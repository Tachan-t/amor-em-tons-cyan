
import React, { useState, useEffect } from 'react';
import { Calendar, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DaysCounter = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [daysTogether, setDaysTogether] = useState(0);

  useEffect(() => {
    // Data padrão para demonstração (pode ser personalizada)
    const defaultDate = new Date('2024-04-09');
    setStartDate(defaultDate);
    
    const calculateDays = () => {
      if (defaultDate) {
        const today = new Date();
        const timeDiff = today.getTime() - defaultDate.getTime();
        const days = Math.floor(timeDiff / (1000 * 3600 * 24));
        setDaysTogether(days);
      }
    };

    calculateDays();
    const interval = setInterval(calculateDays, 86400000); // Atualiza a cada 24 horas

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#00FFFF]">
        Nosso Contador de Amor
      </h2>
      
      <Card className="bg-gray-900 border-[#00FFFF]/20 hover:border-[#00FFFF]/50 transition-all duration-300">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-white">
            <Calendar className="w-6 h-6 text-[#00FFFF]" />
            Juntos desde
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          {startDate && (
            <p className="text-gray-300 text-lg">
              {startDate.toLocaleDateString('pt-BR', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
              })}
            </p>
          )}
          
          <div className="relative">
            <div className="text-6xl font-bold text-[#00FFFF] mb-2 animate-pulse">
              {daysTogether}
            </div>
            <p className="text-xl text-gray-300">
              {daysTogether === 1 ? 'dia' : 'dias'} juntos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-black/50 rounded-lg p-4 border border-[#00FFFF]/20">
              <div className="text-2xl font-bold text-[#00FFFF]">
                {Math.floor(daysTogether / 365)}
              </div>
              <div className="text-sm text-gray-400">Anos</div>
            </div>
            <div className="bg-black/50 rounded-lg p-4 border border-[#00FFFF]/20">
              <div className="text-2xl font-bold text-[#00FFFF]">
                {Math.floor((daysTogether % 365) / 30)}
              </div>
              <div className="text-sm text-gray-400">Meses</div>
            </div>
            <div className="bg-black/50 rounded-lg p-4 border border-[#00FFFF]/20">
              <div className="text-2xl font-bold text-[#00FFFF]">
                {Math.floor(daysTogether / 7)}
              </div>
              <div className="text-sm text-gray-400">Semanas</div>
            </div>
            <div className="bg-black/50 rounded-lg p-4 border border-[#00FFFF]/20">
              <div className="text-2xl font-bold text-[#00FFFF]">
                {daysTogether * 24}
              </div>
              <div className="text-sm text-gray-400">Horas</div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <Heart className="w-8 h-8 text-red-500 animate-bounce" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DaysCounter;
