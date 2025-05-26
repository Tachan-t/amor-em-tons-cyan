import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Mail } from 'lucide-react';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleLetter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#00FFFF] mb-4">
          Carta do Coração
        </h2>
        <p className="text-gray-400">
          Uma mensagem especial para quem amo
        </p>
      </div>

      <div className="relative flex justify-center">
        {/* Envelope */}
        <div 
          className={`relative transition-all duration-1000 z-10 ${
            isOpen ? 'transform -translate-y-20 opacity-50' : ''
          }`}
        >
          <div className="w-80 h-52 bg-gradient-to-br from-red-800 to-red-900 rounded-lg shadow-2xl relative overflow-hidden">
            {/* Envelope flap */}
            <div 
              className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-red-700 to-red-800 transition-transform duration-1000 origin-top ${
                isOpen ? 'transform rotate-x-180' : ''
              }`}
              style={{
                clipPath: 'polygon(0 0, 50% 60%, 100% 0)',
                transformStyle: 'preserve-3d'
              }}
            />
            
            {/* Envelope body */}
            <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-br from-red-800 to-red-900" />
            
            {/* Heart seal */}
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-8 h-8 bg-[#00FFFF] rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-red-800 fill-current" />
              </div>
            </div>
          </div>

          {/* Open/Close button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              onClick={handleToggleLetter}
              className="bg-[#00FFFF] text-black hover:bg-[#00FFFF]/80 flex items-center gap-2 transform hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              {isOpen ? 'Fechar Carta' : 'Abrir Carta'}
            </Button>
          </div>
        </div>

        {/* Letter content */}
        <div 
          className={`absolute top-8 z-20 transition-all duration-1000 ${
            isOpen 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10 pointer-events-none'
          }`}
        >
          <Card className="w-96 bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-red-500 animate-pulse" />
                  <span className="text-red-600 font-script text-lg">Para meu amor</span>
                  <Heart className="w-5 h-5 text-red-500 animate-pulse" />
                </div>
              </div>
              
              <div className="text-gray-800 leading-relaxed space-y-4 font-serif">
                <p className="text-sm italic">
                  Oii meu Amor...
                </p>
                
                <p className="text-sm">
                  Feliz dia dos namorados!! Hoje quero te agradecer por esta sempre ao meu lado amor, Nem sempre foi fácil para nós,
                  por questão de que vinhemos de pontos de vista diferentes e familias bem diferentes também. Mas isso nos fez perceber
                  que nem sempre será um mar de rosas, e vai de nós escolher ficar. Então...
                </p>
                
                <p className="text-sm">
                  Mas aqui estamos. Decidimos ficar. Decidimos que o amor não é apenas sobre as 
                  semelhanças que nos unem, mas também sobre aceitar e celebrar aquilo que nos torna 
                  únicos. Escolhemos encarar cada desafio de mãos dadas, transformando nossas diferenças 
                  em complementos, nossos atritos em aprendizado.
                </p>
                
                <p className="text-sm">
                  Você me ensinou que amar não é encontrar alguém perfeito, mas sim encontrar alguém 
                  imperfeito e escolher vê-lo com olhos perfeitos todos os dias. É sobre construir 
                  pontes onde outros veem abismos, é sobre criar harmonia onde outros ouvem ruído.
                </p>
                
                <p className="text-sm font-medium">
                  Obrigado por ficar. Obrigado por escolher nosso amor, todos os dias.
                </p>
              </div>
              
              <div className="mt-6 text-right">
                <p className="text-sm text-gray-600 italic">
                  Com todo meu amor,
                  Natacha Silva.
                </p>
                <div className="flex items-center justify-end gap-1 mt-2">
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                  <span className="text-red-600 font-script">Seu amor</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;