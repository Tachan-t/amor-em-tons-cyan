
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import familiaImage from './familia.jpg';
import IlhaImage from './ilhabela.jpg';
import AssumiImage from './assumi.jpg';
import mcImage from './mc.jpg';
import FicandoImage from './ficando.jpg';
import sushiImage from './sushi.jpg';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Camera, Heart, Plus } from 'lucide-react';

const Gallery = () => {
  // Imagens de exemplo (placeholder)
  const galleryImages = [
    {
      id: 1,
      url: familiaImage,
      title: "Casamento de Emily e Fernanda",
      date: "Nov 2024"
    },
    {
      id: 2,
      url: IlhaImage,
      title: "Viagem - Ilhabela",
      date: "Ago 2024"
    },
    {
      id: 3,
      url: AssumiImage,
      title: "Te assumi para o Brasil",
      date: "jun 2024"
    },
    {
      id: 4,
      url: FicandoImage,
      title: "Lanterna dos Afogados",
      date: "Mai 2024"
    },
    {
      id: 5,
      url: mcImage,
      title: "Primeiro MC de muitos",
      date: "Mai 2024"
    },
    {
      id: 6,
      url: sushiImage,
      title: "Nosso Primeiro Sushi",
      date: "Jul 2024"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#00FFFF] mb-4">
          Nossa Galeria de Memórias
        </h2>
        <p className="text-gray-400">
          Cada foto conta uma parte da nossa história
        </p>
      </div>

      {/* Add Photo Button */}
      <div className="flex justify-center mb-8">
        <Button className="bg-[#00FFFF] text-black hover:bg-[#00FFFF]/80 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Adicionar Foto
        </Button>
      </div>

      {/* Carousel */}
      <div className="relative px-12">
        <Carousel className="w-full">
          <CarouselContent>
            {galleryImages.map((image) => (
              <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer bg-gray-900 border-[#00FFFF]/20 hover:border-[#00FFFF]/50 transition-all duration-300 overflow-hidden">
                      <CardContent className="p-0 relative">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={image.url}
                            alt={image.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-center text-white">
                            <Camera className="w-8 h-8 mx-auto mb-2 text-[#00FFFF]" />
                            <h3 className="font-semibold text-sm">{image.title}</h3>
                            <p className="text-xs text-gray-300">{image.date}</p>
                          </div>
                        </div>
                        
                        {/* Heart Icon */}
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Heart className="w-6 h-6 text-red-500" />
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-4xl bg-black border-[#00FFFF]/20">
                    <div className="relative">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {image.title}
                        </h3>
                        <p className="text-[#00FFFF]">{image.date}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-gray-900 border-[#00FFFF]/20 text-[#00FFFF] hover:bg-[#00FFFF] hover:text-black" />
          <CarouselNext className="bg-gray-900 border-[#00FFFF]/20 text-[#00FFFF] hover:bg-[#00FFFF] hover:text-black" />
        </Carousel>
      </div>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gray-900 border-[#00FFFF]/20 text-center">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-[#00FFFF] mb-1">
              {galleryImages.length}
            </div>
            <div className="text-sm text-gray-400">Fotos</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900 border-[#00FFFF]/20 text-center">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-[#00FFFF] mb-1">12</div>
            <div className="text-sm text-gray-400">Meses</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900 border-[#00FFFF]/20 text-center">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-[#00FFFF] mb-1">∞</div>
            <div className="text-sm text-gray-400">Memórias</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900 border-[#00FFFF]/20 text-center">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-[#00FFFF] mb-1">💕</div>
            <div className="text-sm text-gray-400">Amor</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Gallery;
