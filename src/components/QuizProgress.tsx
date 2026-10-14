import React from 'react';
import { Progress } from './ui/progress';
import { Card } from './ui/card';
import { Trophy, Target, Clock } from 'lucide-react';

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  correctAnswers: number;
  totalAnswered: number;
}

const QuizProgress: React.FC<QuizProgressProps> = ({
  currentQuestion,
  totalQuestions,
  correctAnswers,
  totalAnswered
}) => {
  const progressPercentage = ((currentQuestion - 1) / totalQuestions) * 100;
  const accuracy = totalAnswered > 0 ? (correctAnswers / totalAnswered) * 100 : 0;

  return (
    <Card className="p-4">
      <div className="space-y-4">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Quiz Progress</h3>
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion} of {totalQuestions}
            </span>
          </div>
          <Progress value={progressPercentage} className="h-3" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center space-y-1">
            <div className="flex items-center justify-center gap-1 text-primary">
              <Target className="h-4 w-4" />
              <span className="text-sm font-medium">Progress</span>
            </div>
            <div className="text-xl font-bold">
              {Math.round(progressPercentage)}%
            </div>
          </div>

          <div className="text-center space-y-1">
            <div className="flex items-center justify-center gap-1 text-quiz-correct">
              <Trophy className="h-4 w-4" />
              <span className="text-sm font-medium">Score</span>
            </div>
            <div className="text-xl font-bold">
              {correctAnswers}/{totalAnswered}
            </div>
          </div>

          <div className="text-center space-y-1">
            <div className="flex items-center justify-center gap-1 text-mathematics">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">Accuracy</span>
            </div>
            <div className="text-xl font-bold">
              {Math.round(accuracy)}%
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default QuizProgress;