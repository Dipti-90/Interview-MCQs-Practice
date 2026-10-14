import React, { useState } from 'react';
import { QuizQuestion, quizQuestions, searchQuestions } from '../data/quizData';
import { shuffleQuestions } from '../data/quizData';
import { getUnitsByCategory } from '../data/quizData';
import {getQuestionsByDificulty} from '../data/quizData';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { getCategoryStats } from '../data/quizData';
import { BookOpen, Clock, Target, Trophy, Play, Book } from 'lucide-react';

interface QuizStartProps {
  onStartQuiz: (questionCount: number, specificQuestions?: QuizQuestion[]) => void;
}


const QuizStart: React.FC<QuizStartProps> = ({ onStartQuiz }) => {
  const [selectedCount, setSelectedCount] = useState(30);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState('easy');
  
  // Use the searchQuestions function instead of manual filtering
  const filteredQuestions = searchQuestions(search);
  
  const categoryStats = getCategoryStats();

  const features = [
    // {
    //   icon: <Target className="h-6 w-6" />,
    //   title: 'Comprehensive Coverage',
    //   description: 'Questions from Data Structures, OOP, Operating System and DBMS'
    // },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Timed Practice',
      description: 'Track your time and improve speed for the actual exam'
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: 'Instant Feedback',
      description: 'Get immediate explanations for correct and incorrect answers'
    }
  ];

  const categories = [
    {
      name: 'Data Structures & Algorithms',
      icon: <BookOpen className="h-8 w-8" />,
      count: categoryStats["Data Structures & Algorithms"] || 0,
      color: 'science',
      gradient: 'bg-gradient-science'
    },
    {
      name: 'Object Oriented Programming',
      icon: <BookOpen className="h-8 w-8" />,
      count: categoryStats["Object Oriented Programming"] || 0,
      color: 'computer',
      gradient: 'bg-gradient-computer'
    },
    {
      name: 'Operating System',
      icon: <BookOpen className="h-8 w-8" />,
      count: categoryStats["Operating System"] || 0,
      color: 'mathematics',
      gradient: 'bg-gradient-math'
    },
    {
      name: 'Database Management System',
      icon: <BookOpen className="h-8 w-8" />,
      count: categoryStats["Database Management System"] || 0,
      color: 'computer',
      gradient: 'bg-gradient-computer'
    }
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="animate-bounce-in">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Technical Interview MCQs
            </h1>
            <p className="text-lg text-gray-500 mt-2">
              Practice DSA, OOP, OS and DBMS interview questions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              📚 {Object.values(categoryStats).reduce((a, b) => a + b, 0)} Total Questions
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              🎯 Real Exam Format
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              ⚡ Instant Results
            </Badge>
          </div>
        </div>

        {/*Search Overview*/}
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="🔍 Search interview questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border p-3 rounded-lg shadow-sm"
          />
        </div>
        {search && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Search Results</CardTitle>
            </CardHeader>
            <CardContent>
              {filteredQuestions.length === 0 ? (
                <p>No questions found</p>
              ) : (
                filteredQuestions.slice(0, 5).map((q) => (
                  <p key={q.id} className="text-left mb-2">
                    • {q.question}
                  </p>
                ))
              )}
            </CardContent>
          </Card>
        )}

        {/* Categories Overview */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className="relative overflow-hidden group hover:scale-105 transition-transform">
              <div className={`absolute inset-0 ${category.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
              <CardContent className="p-6 text-center relative">
                <div className="text-white mb-4 flex justify-center">
                  <div className={`p-3 rounded-full bg-${category.color} text-white`}>
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-2xl font-bold text-primary">{category.count} Questions</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {selectedCategory && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>{selectedCategory} Units</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              {getUnitsByCategory(selectedCategory).map((unit) => (
                <Button
                  key={unit}
                  onClick={() => onStartQuiz(10)}
                  className='bg-primary text-white'
                >{unit}</Button>
              ))}
            </CardContent>
          </Card>
        )}

        {/*Difficulty Overview*/}
        <div className="grid grid-cols-3 gap-2">
          {["easy", "medium", "hard"].map((level) => (
            <Button
              key={level}
              variant={difficulty === level ? "default" : "outline"}
              onClick={() => setDifficulty(level)}
              className="h-12"
            >
              {level.toUpperCase()}
            </Button>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              //  onClick={() => onStartQuiz(selectedCount)}
              className="text-center group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* Quiz Configuration */}
        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Target className="h-5 w-5" />
              Start Your Practice
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-3">
                Number of Questions
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[30, 50, 100].map((count) => (
                  <Button
                    key={count}
                    variant={selectedCount === count ? "default" : "outline"}
                    onClick={() => setSelectedCount(count)}
                    className="h-12"
                  >
                    {count}
                  </Button>
                ))}
              </div>
            </div>

            <Button
              onClick={() => onStartQuiz(selectedCount)}
              size="lg"
              className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold h-14 text-lg"
            >
              <Play className="h-5 w-5 mr-2" />
              Start Quiz ({selectedCount} Questions)
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Questions will be randomly selected from all categories
            </p>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="bg-muted/50">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-3 text-center">💡 Interview Tips</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p>• Read each question carefully</p>
                <p>• Eliminate obviously wrong answers first</p>
                <p>• Don't spend too much time on one question</p>
              </div>
              <div className="space-y-2">
                <p>• Review your answers if time permits</p>
                <p>• Stay calm and focused throughout</p>
                <p>• Practice regularly for better performance</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuizStart;