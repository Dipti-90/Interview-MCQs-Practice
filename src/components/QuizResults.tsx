import React from 'react';
import { QuizQuestion, getQuestionsByCategory } from '../data/quizData';
import { QuizAnswer } from './QuizApp';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Trophy, 
  Target, 
  Clock, 
  RotateCcw, 
  CheckCircle, 
  XCircle,
  BookOpen,
  Calculator,
  Monitor,
  Award
} from 'lucide-react';

interface QuizResultsProps {
  questions: QuizQuestion[];
  answers: QuizAnswer[];
  totalTime: number;
  onRestart: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({
  questions,
  answers,
  totalTime,
  onRestart
}) => {
  const correctAnswers = answers.filter(a => a.isCorrect).length;
  const totalQuestions = questions.length;
  const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
  const averageTimePerQuestion = Math.round(totalTime / totalQuestions / 1000);

  // Category-wise performance
  const categoryPerformance = answers.reduce((acc, answer) => {
    const question = questions.find(q => q.id === answer.questionId);
    if (question) {
      if (!acc[question.category]) {
        acc[question.category] = { correct: 0, total: 0 };
      }
      acc[question.category].total++;
      if (answer.isCorrect) {
        acc[question.category].correct++;
      }
    }
    return acc;
  }, {} as Record<string, { correct: number; total: number }>);

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 80) return 'text-quiz-correct';
    if (percentage >= 60) return 'text-warning';
    return 'text-quiz-incorrect';
  };

  const getGrade = (percentage: number) => {
    if (percentage >= 90) return { grade: 'A+', message: 'Outstanding! 🌟' };
    if (percentage >= 80) return { grade: 'A', message: 'Excellent! 🎉' };
    if (percentage >= 70) return { grade: 'B+', message: 'Good work! 👍' };
    if (percentage >= 60) return { grade: 'B', message: 'Not bad! 📝' };
    if (percentage >= 50) return { grade: 'C', message: 'Keep practicing! 💪' };
    return { grade: 'F', message: 'Need more practice! 📚' };
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Science':
        return <BookOpen className="h-5 w-5" />;
      case 'Mathematics':
        return <Calculator className="h-5 w-5" />;
      case 'Computer':
        return <Monitor className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Science':
        return 'science';
      case 'Mathematics':
        return 'mathematics';
      case 'Computer':
        return 'computer';
      default:
        return 'muted';
    }
  };

  const formatTime = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const { grade, message } = getGrade(scorePercentage);

  // Get incorrect answers for review
  const incorrectAnswers = answers
    .filter(answer => !answer.isCorrect)
    .map(answer => {
      const question = questions.find(q => q.id === answer.questionId);
      return { answer, question };
    })
    .filter(item => item.question);

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4 animate-bounce-in">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-gradient-primary text-white">
              <Trophy className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Quiz Complete!</h1>
          <p className="text-xl text-muted-foreground">{message}</p>
        </div>

        {/* Overall Score Card */}
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-5" />
          <CardContent className="p-8 text-center relative">
            <div className="space-y-4">
              <div className="text-6xl font-bold text-primary">{scorePercentage}%</div>
              <div className="text-2xl font-semibold">Grade: {grade}</div>
              <div className="text-lg text-muted-foreground">
                {correctAnswers} out of {totalQuestions} questions correct
              </div>
              <Progress value={scorePercentage} className="h-4 max-w-md mx-auto" />
            </div>
          </CardContent>
        </Card>

        {/* Performance Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-primary mb-2">
                <Target className="h-8 w-8 mx-auto" />
              </div>
              <div className="text-2xl font-bold">{correctAnswers}/{totalQuestions}</div>
              <div className="text-sm text-muted-foreground">Correct Answers</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-mathematics mb-2">
                <Clock className="h-8 w-8 mx-auto" />
              </div>
              <div className="text-2xl font-bold">{formatTime(totalTime)}</div>
              <div className="text-sm text-muted-foreground">Total Time</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-computer mb-2">
                <Award className="h-8 w-8 mx-auto" />
              </div>
              <div className="text-2xl font-bold">{averageTimePerQuestion}s</div>
              <div className="text-sm text-muted-foreground">Avg. per Question</div>
            </CardContent>
          </Card>
        </div>

        {/* Category Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Category Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(categoryPerformance).map(([category, performance]) => {
              const percentage = Math.round((performance.correct / performance.total) * 100);
              return (
                <div key={category} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`text-${getCategoryColor(category)}`}>
                        {getCategoryIcon(category)}
                      </div>
                      <span className="font-medium">{category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`font-bold ${getPerformanceColor(percentage)}`}>
                        {percentage}%
                      </span>
                      <span className="text-sm text-muted-foreground">
                        ({performance.correct}/{performance.total})
                      </span>
                    </div>
                  </div>
                  <Progress value={percentage} className="h-2" />
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Review Incorrect Answers */}
        {incorrectAnswers.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <XCircle className="h-5 w-5 text-quiz-incorrect" />
                Review Incorrect Answers ({incorrectAnswers.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {incorrectAnswers.map(({ answer, question }, index) => {
                if (!question) return null;
                return (
                  <div key={answer.questionId} className="border border-border rounded-lg p-4 space-y-3">
                    <div className="flex items-start gap-2">
                      <Badge className={`bg-${getCategoryColor(question.category)} text-white`}>
                        {question.category}
                      </Badge>
                      <div className="flex-1">
                        <p className="font-medium mb-2">{question.question}</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-quiz-incorrect">
                            <XCircle className="h-4 w-4" />
                            <span>Your answer: {question.options[answer.selectedAnswer]}</span>
                          </div>
                          <div className="flex items-center gap-2 text-quiz-correct">
                            <CheckCircle className="h-4 w-4" />
                            <span>Correct answer: {question.options[question.correctAnswer]}</span>
                          </div>
                          {question.explanation && (
                            <div className="mt-2 p-2 bg-muted/50 rounded text-muted-foreground">
                              <strong>Explanation:</strong> {question.explanation}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onRestart}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8"
          >
            <RotateCcw className="h-5 w-5 mr-2" />
            Take Another Quiz
          </Button>
        </div>

        {/* Performance Tips */}
        <Card className="bg-muted/30">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-3 text-center">💡 Performance Tips</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                {scorePercentage >= 80 ? (
                  <>
                    <p>• Excellent work! Keep up the consistent practice.</p>
                    <p>• Focus on speed to improve time management.</p>
                    <p>• Try helping others to reinforce your knowledge.</p>
                  </>
                ) : scorePercentage >= 60 ? (
                  <>
                    <p>• Good foundation! Focus on weak areas.</p>
                    <p>• Review explanations for incorrect answers.</p>
                    <p>• Practice more questions in challenging topics.</p>
                  </>
                ) : (
                  <>
                    <p>• Don't give up! Consistent practice will help.</p>
                    <p>• Focus on understanding concepts, not memorizing.</p>
                    <p>• Take more time to read questions carefully.</p>
                  </>
                )}
              </div>
              <div className="space-y-2">
                <p>• Regular practice improves both speed and accuracy.</p>
                <p>• Use the question navigator to review answers.</p>
                <p>• Focus extra time on your weakest category.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuizResults;