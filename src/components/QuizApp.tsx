import React, { useState, useEffect } from 'react';
import { QuizQuestion as QuizQuestionType, getRandomQuestions } from '../data/quizData';
import QuizStart from './QuizStart';
import QuizQuestionComponent from './QuizQuestion';
import QuizResults from './QuizResults';
import QuizProgress from './QuizProgress';
import QuestionNavigator from './QuestionNavigator';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Grid3X3, X, Home } from 'lucide-react';

export interface QuizAnswer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
  timeSpent: number;
}

type QuizState = 'start' | 'quiz' | 'results';

const QuizApp: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>('start');
  const [questions, setQuestions] = useState<QuizQuestionType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showNavigator, setShowNavigator] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [questionStartTime, setQuestionStartTime] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState(60);

  // Load quiz state from localStorage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem('csit-quiz-state');
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        setQuizState(parsed.quizState || 'start');
        setQuestions(parsed.questions || []);
        setCurrentQuestionIndex(parsed.currentQuestionIndex || 0);
        setAnswers(parsed.answers || []);
        setStartTime(parsed.startTime || 0);
      } catch (error) {
        console.error('Error loading saved quiz state:', error);
        localStorage.removeItem('csit-quiz-state');
      }
    }
  }, []);

  // Save quiz state to localStorage whenever it changes
  useEffect(() => {
    if (quizState !== 'start') {
      const stateToSave = {
        quizState,
        questions,
        currentQuestionIndex,
        answers,
        startTime
      };
      localStorage.setItem('csit-quiz-state', JSON.stringify(stateToSave));
    }
  }, [quizState, questions, currentQuestionIndex, answers, startTime]);

  useEffect(() => {
    if (quizState !== "quiz") return;

    if (timeLeft === 0) {
      goToNext();
      setTimeLeft(60);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);

    }, 1000);

    return () => clearInterval(timer);

  }, [timeLeft, quizState]);

  const startQuiz = (questionCount: number = 40) => {
    const newQuestions = getRandomQuestions(questionCount);
    setQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setQuizState('quiz');
    setStartTime(Date.now());
    setQuestionStartTime(Date.now());
  };

  const handleAnswer = (selectedAnswer: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const timeSpent = Date.now() - questionStartTime;

    const newAnswer: QuizAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect,
      timeSpent
    };

    setAnswers(prev => [...prev, newAnswer]);

    // Auto-advance after 2 seconds
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setQuestionStartTime(Date.now());
      } else {
        finishQuiz();
      }
    }, 2000);
  };

  const finishQuiz = () => {
    setQuizState('results');
    localStorage.removeItem('csit-quiz-state');
  };

  const restartQuiz = () => {
    setQuizState('start');
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setShowNavigator(false);
    localStorage.removeItem('csit-quiz-state');
  };

  const navigateToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    setShowNavigator(false);
    setQuestionStartTime(Date.now());
    setTimeLeft(60);
  };

  const goToPrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setQuestionStartTime(Date.now());
      setTimeLeft(60);
    }
  };

  const goToNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setQuestionStartTime(Date.now());
      setTimeLeft(60);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = answers.find(a => a.questionId === currentQuestion?.id);
  const correctAnswers = answers.filter(a => a.isCorrect).length;

  if (quizState === 'start') {
    return <QuizStart onStartQuiz={startQuiz} />;
  }

  if (quizState === 'results') {
    return (
      <QuizResults
        questions={questions}
        answers={answers}
        totalTime={Date.now() - startTime}
        onRestart={restartQuiz}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 flex flex-col">
      <div className="max-w-4xl mx-auto flex-1">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="outline"
              onClick={restartQuiz}
              className="flex items-center gap-2"
            >
              <Home className="h-4 w-4" />
              Home
            </Button>
            <h1 className="text-xl font-semibold text-center flex-1">CSIT Quiz</h1>
            <div className="w-20"></div> {/* Spacer for alignment */}
          </div>
          <QuizProgress
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            correctAnswers={correctAnswers}
            totalAnswered={answers.length}
          />

          <p className="text-center text-lg font-bold text-red-500 mt-2">
            ⏳ Time Left: {timeLeft}s
          </p>
        </div>

        {/* Question Navigator Modal */}
        {showNavigator && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Question Navigator</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowNavigator(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <QuestionNavigator
                  questions={questions}
                  answers={answers}
                  currentIndex={currentQuestionIndex}
                  onNavigate={navigateToQuestion}
                />
              </div>
            </Card>
          </div>
        )}

        {/* Main Quiz Content */}
        <div className="space-y-6">
          {/* Question Card */}
          <Card className="overflow-hidden">
            <div className="p-6">
              <QuizQuestionComponent
                question={currentQuestion}
                selectedAnswer={currentAnswer?.selectedAnswer}
                isAnswered={!!currentAnswer}
                onAnswer={handleAnswer}
                questionNumber={currentQuestionIndex + 1}
              />
            </div>
          </Card>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={goToPrevious}
              disabled={currentQuestionIndex === 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            <Button
              variant="outline"
              onClick={() => setShowNavigator(true)}
              className="flex items-center gap-2"
            >
              <Grid3X3 className="h-4 w-4" />
              Navigator
            </Button>

            <Button
              variant="outline"
              onClick={goToNext}
              disabled={currentQuestionIndex === questions.length - 1}
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Finish Quiz Button */}
          {answers.length === questions.length && (
            <div className="text-center">
              <Button
                onClick={finishQuiz}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-3"
              >
                View Results
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizApp;