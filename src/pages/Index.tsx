import React from 'react';
import DaysCounter from '../components/DaysCounter';
import CoupleQuiz from '../components/CoupleQuiz';
import Timeline from '../components/Timeline';
import Gallery from '../components/Gallery';
import LoveLetter from '../components/LoveLetter';
import { Heart, Calendar, HelpCircle, Clock, Camera, Mail } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation - Now at the top */}
      <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-[#00FFFF]/20 px-6 py-4 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo/Title */}
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-[#00FFFF] animate-pulse" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-white to-[#00FFFF] bg-clip-text text-transparent">
              Nossa História
            </h1>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <a 
              href="#contador" 
              className="flex items-center gap-2 text-gray-300 hover:text-[#00FFFF] transition-colors group"
            >
              <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline">Contador</span>
            </a>
            <a 
              href="#carta" 
              className="flex items-center gap-2 text-gray-300 hover:text-[#00FFFF] transition-colors group"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline">Carta</span>
            </a>
            <a 
              href="#quiz" 
              className="flex items-center gap-2 text-gray-300 hover:text-[#00FFFF] transition-colors group"
            >
              <HelpCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline">Quiz</span>
            </a>
            <a 
              href="#timeline" 
              className="flex items-center gap-2 text-gray-300 hover:text-[#00FFFF] transition-colors group"
            >
              <Clock className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline">Timeline</span>
            </a>
            <a 
              href="#galeria" 
              className="flex items-center gap-2 text-gray-300 hover:text-[#00FFFF] transition-colors group"
            >
              <Camera className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline">Galeria</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Header - Updated with top padding for navbar */}
      <header className="pt-24 pb-8 px-6 text-center border-b border-gray-800">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Heart className="w-8 h-8 text-[#00FFFF] animate-pulse" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-[#00FFFF] bg-clip-text text-transparent">
            Nossa História de Amor
          </h2>
          <Heart className="w-8 h-8 text-[#00FFFF] animate-pulse" />
        </div>
        <p className="text-gray-400 text-lg">Celebrando cada momento juntos</p>
      </header>

      {/* Main Content */}
      <main className="space-y-16 py-8">
        {/* Days Counter Section */}
        <section id="contador" className="px-6">
          <DaysCounter />
        </section>

        {/* Love Letter Section */}
        <section id="carta" className="px-6">
          <LoveLetter />
        </section>

        {/* Quiz Section */}
        <section id="quiz" className="px-6">
          <CoupleQuiz />
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="px-6">
          <Timeline />
        </section>

        {/* Gallery Section */}
        <section id="galeria" className="px-6">
          <Gallery />
        </section>
      </main>
    </div>
  );
};

export default Index;