
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Heart, Trophy } from 'lucide-react';

const CoupleQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "Qual é a comida favorita do casal?",
      options: ["Pizza", "Hambúrguer", "Sushi", "Massa"],
      correct: [2, 3]
    },
    {
      question: "Qual é o filme favorito de vocês duas?",
      options: ["Romance", "Ação", "Comédia", "Terror"],
      correct: 1
    },
    {
      question: "Primeira viagem juntas?",
      options: ["São Paulo", "Paraty", "Angra", "Arraial do Cabo"],
      correct: 3
    },
    {
      question: "Onde foi o primeiro beijo?",
      options: ["Praça", "Cinema", "Carro", "Parque"],
      correct: 2
    },
    {
      question: "Qual é o hobby favorito do casal?",
      options: ["Assistir filmes e Series", "Cozinhar", "Jogar", "Viajar"],
      correct: [0, 3]
    }
  ];
  

  const handleNextQuestion = () => {
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
  
    const correct = questions[currentQuestion].correct;
    const selected = parseInt(selectedAnswer);
  
    const isCorrect = Array.isArray(correct)
      ? correct.includes(selected)
      : selected === correct;
  
    if (isCorrect) {
      setScore(score + 1);
    }
  
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer('');
    setShowResults(false);
    setScore(0);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "Vocês se conhecem perfeitamente! 💕";
    if (percentage >= 60) return "Muito bem! Vocês têm uma boa conexão! 💖";
    if (percentage >= 40) return "Ainda há muito para descobrir um sobre o outro! 💝";
    return "Que tal passar mais tempo conversando? 💗";
  };

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#00FFFF]">
          Resultado do Quiz
        </h2>
        
        <Card className="bg-gray-900 border-[#00FFFF]/20 text-center">
          <CardHeader>
            <Trophy className="w-16 h-16 text-[#00FFFF] mx-auto mb-4" />
            <CardTitle className="text-white text-2xl">
              Parabéns!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-6xl font-bold text-[#00FFFF]">
              {score}/{questions.length}
            </div>
            <p className="text-xl text-gray-300">
              {getScoreMessage()}
            </p>
            <div className="bg-black/50 rounded-lg p-4 border border-[#00FFFF]/20">
              <Progress 
                value={(score / questions.length) * 100} 
                className="h-4"
              />
              <p className="text-sm text-gray-400 mt-2">
                {Math.round((score / questions.length) * 100)}% de compatibilidade
              </p>
            </div>
            <Button 
              onClick={resetQuiz}
              className="bg-[#00FFFF] text-black hover:bg-[#00FFFF]/80"
            >
              Jogar Novamente
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#00FFFF]">
        Quiz do Casal
      </h2>
      
      <Card className="bg-gray-900 border-[#00FFFF]/20">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-white">
              Pergunta {currentQuestion + 1} de {questions.length}
            </CardTitle>
            <Heart className="w-6 h-6 text-red-500" />
          </div>
          <Progress 
            value={((currentQuestion + 1) / questions.length) * 100} 
            className="h-2"
          />
        </CardHeader>
        <CardContent className="space-y-6">
          <h3 className="text-xl font-semibold text-white mb-6">
            {questions[currentQuestion].question}
          </h3>
          
          <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-black/30 transition-colors">
                <RadioGroupItem 
                  value={index.toString()} 
                  id={`option-${index}`}
                  className="border-[#00FFFF] text-[#00FFFF]"
                />
                <Label 
                  htmlFor={`option-${index}`}
                  className="text-gray-300 cursor-pointer flex-1"
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
          
          <Button 
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
            className="w-full bg-[#00FFFF] text-black hover:bg-[#00FFFF]/80 disabled:bg-gray-600"
          >
            {currentQuestion === questions.length - 1 ? 'Finalizar Quiz' : 'Próxima Pergunta'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CoupleQuiz;
