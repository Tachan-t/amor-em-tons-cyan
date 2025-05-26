
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Star, Calendar, Gift, Plane, Camera } from 'lucide-react';

const Timeline = () => {
  const timelineEvents = [
    {
      date: "08 Mar 2024",
      title: "Primeiro Encontro",
      description: "O dia em que tudo começou. Uma chuva que mudou nossas vidas para sempre.",
      icon: Heart,
      color: "text-red-500"
    },
    {
      date: "08 Abr 2024",
      title: "A certeza chegou e ficou",
      description: "Decidimos que seria eu e você e cá estamos.",
      icon: Gift,
      color: "text-pink-500"
    },
    {
      date: "22 jun 2024",
      title: "Primeira Viagem",
      description: "Nossa primeira aventura juntas. Descobrimos novos lugares, criamos memórias incríveis e finalmente te assumi para o Brasil com nossas alianças.",
      icon: Plane,
      color: "text-blue-500"
    },
    {
      date: "12 set 2024",
      title: "Aniversário de 5 Meses",
      description: "Meio ano de puro amor e felicidade. Comemoramos com um jantar no Chalezinho.",
      icon: Star,
      color: "text-yellow-500"
    },
    {
      date: "15 Nov 2024",
      title: "Viajamos para Angra dos Reis",
      description: "Viajamos com sua familia, e sabiamos que seria uma de muitas viagens.",
      icon: Calendar,
      color: "text-green-500"
    },
    {
      date: "25 Dez 2024",
      title: "Primeiro Natal",
      description: "Nosso primeiro Natal juntos, cercados de amor, família e alegria.",
      icon: Camera,
      color: "text-[#00FFFF]"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#00FFFF]">
        Nossa Linha do Tempo
      </h2>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-[#00FFFF] to-transparent"></div>
        
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              {/* Timeline Point */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#00FFFF] rounded-full border-4 border-black z-10"></div>
              
              {/* Event Card */}
              <Card className={`w-5/12 bg-gray-900 border-[#00FFFF]/20 hover:border-[#00FFFF]/50 transition-all duration-300 ${
                index % 2 === 0 ? 'mr-auto' : 'ml-auto'
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full bg-black/50 border border-current ${event.color}`}>
                      <event.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-[#00FFFF] font-medium">
                          {event.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00FFFF]/20 to-purple-500/20 rounded-full border border-[#00FFFF]/30">
          <Heart className="w-5 h-5 text-red-500 animate-pulse" />
          <span className="text-white font-medium">E nossa história continua...</span>
          <Heart className="w-5 h-5 text-red-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
