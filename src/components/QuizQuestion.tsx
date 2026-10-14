import React from 'react';

import { QuizQuestion as QuizQuestionType } from '../data/quizData';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { CheckCircle, XCircle, BookOpen, Calculator, Monitor } from 'lucide-react';

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedAnswer?: number;
  isAnswered: boolean;
  onAnswer: (selectedAnswer: number) => void;
  questionNumber: number;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedAnswer,
  isAnswered,
  onAnswer,
  questionNumber
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Science':
        return <BookOpen className="h-4 w-4" />;
      case 'Mathematics':
        return <Calculator className="h-4 w-4" />;
      case 'Computer':
        return <Monitor className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Science':
        return 'bg-science text-white';
      case 'Mathematics':
        return 'bg-mathematics text-white';
      case 'Computer':
        return 'bg-computer text-white';
      default:
        return 'bg-secondary';
    }
  };

  const getOptionClassName = (optionIndex: number) => {
    if (!isAnswered) {
      return 'hover:bg-quiz-hover border-2 border-border hover:border-primary/50 transition-all';
    }

    if (optionIndex === question.correctAnswer) {
      return 'bg-quiz-correct/20 border-2 border-quiz-correct text-quiz-correct animate-pulse-correct';
    }

    if (optionIndex === selectedAnswer && selectedAnswer !== question.correctAnswer) {
      return 'bg-quiz-incorrect/20 border-2 border-quiz-incorrect text-quiz-incorrect animate-shake';
    }

    return 'border-2 border-border opacity-50';
  };

  const getOptionIcon = (optionIndex: number) => {
    if (!isAnswered) return null;

    if (optionIndex === question.correctAnswer) {
      return <CheckCircle className="h-5 w-5 text-quiz-correct" />;
    }

    if (optionIndex === selectedAnswer && selectedAnswer !== question.correctAnswer) {
      return <XCircle className="h-5 w-5 text-quiz-incorrect" />;
    }

    return null;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Question Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <Badge className={getCategoryColor(question.category)}>
              {getCategoryIcon(question.category)}
              <span className="ml-1">{question.category}</span>
            </Badge>
            <span className="text-sm text-muted-foreground">
              Question {questionNumber}
            </span>
          </div>
          
          <h2 className="text-xl md:text-2xl font-semibold leading-relaxed">
            {question.question}
          </h2>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant="outline"
            className={`w-full h-auto p-4 text-left justify-start text-wrap ${getOptionClassName(index)}`}
            onClick={() => !isAnswered && onAnswer(index)}
            disabled={isAnswered}
          >
            <div className="flex items-center gap-3 w-full">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                {String.fromCharCode(65 + index)}
              </div>
              <span className="flex-1 text-base">{option}</span>
              {getOptionIcon(index)}
            </div>
          </Button>
        ))}
      </div>

      {/* Explanation */}
      {isAnswered && question.explanation && (
        <div className="bg-muted/50 border border-border rounded-lg p-4 animate-slide-up">
          <div className="flex items-start gap-2">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-1">Explanation</h4>
              <p className="text-sm text-muted-foreground">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}

      {/* Answer Status */}
      {isAnswered && (
        <div className="text-center">
          {selectedAnswer === question.correctAnswer ? (
            <div className="flex items-center justify-center gap-2 text-quiz-correct">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Correct! Well done!</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 text-quiz-incorrect">
              <XCircle className="h-5 w-5" />
              <span className="font-medium">Incorrect. The correct answer is option {String.fromCharCode(65 + question.correctAnswer)}.</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;