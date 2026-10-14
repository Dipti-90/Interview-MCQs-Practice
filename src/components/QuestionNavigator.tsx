import React from 'react';
import { QuizQuestion } from '../data/quizData';
import { QuizAnswer } from './QuizApp';
import { Button } from './ui/button';
import { CheckCircle, XCircle, Circle, BookOpen, Calculator, Monitor } from 'lucide-react';

interface QuestionNavigatorProps {
  questions: QuizQuestion[];
  answers: QuizAnswer[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

const QuestionNavigator: React.FC<QuestionNavigatorProps> = ({
  questions,
  answers,
  currentIndex,
  onNavigate
}) => {
  const getQuestionStatus = (questionIndex: number) => {
    const question = questions[questionIndex];
    const answer = answers.find(a => a.questionId === question.id);
    
    if (!answer) return 'unanswered';
    return answer.isCorrect ? 'correct' : 'incorrect';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'correct':
        return <CheckCircle className="h-4 w-4 text-quiz-correct" />;
      case 'incorrect':
        return <XCircle className="h-4 w-4 text-quiz-incorrect" />;
      default:
        return <Circle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Science':
        return <BookOpen className="h-3 w-3" />;
      case 'Mathematics':
        return <Calculator className="h-3 w-3" />;
      case 'Computer':
        return <Monitor className="h-3 w-3" />;
      default:
        return null;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Science':
        return 'text-science';
      case 'Mathematics':
        return 'text-mathematics';
      case 'Computer':
        return 'text-computer';
      default:
        return 'text-muted-foreground';
    }
  };

  // Group questions by category
  const groupedQuestions = questions.reduce((acc, question, index) => {
    if (!acc[question.category]) {
      acc[question.category] = [];
    }
    acc[question.category].push({ question, index });
    return acc;
  }, {} as Record<string, Array<{ question: QuizQuestion; index: number }>>);

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 bg-quiz-correct/10 rounded-lg">
          <div className="text-quiz-correct font-bold text-lg">
            {answers.filter(a => a.isCorrect).length}
          </div>
          <div className="text-sm text-muted-foreground">Correct</div>
        </div>
        <div className="text-center p-3 bg-quiz-incorrect/10 rounded-lg">
          <div className="text-quiz-incorrect font-bold text-lg">
            {answers.filter(a => !a.isCorrect).length}
          </div>
          <div className="text-sm text-muted-foreground">Incorrect</div>
        </div>
        <div className="text-center p-3 bg-muted rounded-lg">
          <div className="font-bold text-lg">
            {questions.length - answers.length}
          </div>
          <div className="text-sm text-muted-foreground">Remaining</div>
        </div>
      </div>

      {/* Questions by Category */}
      {Object.entries(groupedQuestions).map(([category, categoryQuestions]) => (
        <div key={category} className="space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <span className={getCategoryColor(category)}>
              {getCategoryIcon(category)}
            </span>
            <h3 className="font-semibold">{category}</h3>
            <span className="text-sm text-muted-foreground">
              ({categoryQuestions.length} questions)
            </span>
          </div>
          
          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
            {categoryQuestions.map(({ question, index }) => {
              const status = getQuestionStatus(index);
              const isCurrent = index === currentIndex;
              
              return (
                <Button
                  key={question.id}
                  variant={isCurrent ? "default" : "outline"}
                  size="sm"
                  className={`h-12 w-12 p-0 relative ${
                    isCurrent ? 'ring-2 ring-primary ring-offset-2' : ''
                  }`}
                  onClick={() => onNavigate(index)}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs font-medium">{index + 1}</span>
                    {getStatusIcon(status)}
                  </div>
                </Button>
              );
            })}
          </div>
        </div>
      ))}

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 pt-4 border-t">
        <div className="flex items-center gap-2 text-sm">
          <CheckCircle className="h-4 w-4 text-quiz-correct" />
          <span>Correct</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <XCircle className="h-4 w-4 text-quiz-incorrect" />
          <span>Incorrect</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Circle className="h-4 w-4 text-muted-foreground" />
          <span>Unanswered</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionNavigator;