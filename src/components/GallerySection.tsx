import React, { useState } from 'react';
import { Eye, Sparkles, MapPin, Maximize2 } from 'lucide-react';
import { OFFICIAL_PHOTOS } from '../data/constants';

interface GallerySectionProps {
  onOpenPhoto: (index: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenPhoto }) => {
  return (
    <section id="galeria" className="bg-[#DCDCD9] py-16 md:py-24 border-b border-[#C5C4C2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#868684] mb-3">
            <span className="w-6 h-[1px] bg-[#868684]"></span>
            <span>Galeria do Espaço</span>
            <span className="w-6 h-[1px] bg-[#868684]"></span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#868684]">
            Conheça a Alinhare
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#868684] opacity-90">
            Um ambiente acolhedor para cuidar do movimento.
          </p>
        </div>

        {/* Editorial Masonry Grid with all 5 authentic photos */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Photo 1: Recepção (Featured Tall on Left) */}
          <div
            className="md:col-span-6 lg:col-span-5 group relative rounded-2xl overflow-hidden bg-[#F4F1ED] border border-[#C5C4C2] shadow-xs cursor-pointer min-h-[380px] md:min-h-[500px]"
            onClick={() => onOpenPhoto(0)}
          >
            <img
              src={OFFICIAL_PHOTOS[0].url}
              alt={OFFICIAL_PHOTOS[0].altText}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#868684]/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
            <div className="absolute bottom-0 inset-x-0 p-6 text-[#F4F1ED]">
              <span className="text-xs uppercase tracking-widest font-semibold bg-[#868684]/80 px-2.5 py-1 rounded inline-block mb-2">
                {OFFICIAL_PHOTOS[0].category}
              </span>
              <h3 className="font-display text-2xl font-semibold leading-tight">
                {OFFICIAL_PHOTOS[0].title}
              </h3>
              <p className="text-xs text-[#DCDCD9] mt-1">
                {OFFICIAL_PHOTOS[0].subtitle}
              </p>
            </div>
            <div className="absolute top-4 right-4 p-2 bg-[#F4F1ED]/80 backdrop-blur-xs rounded-full text-[#868684] opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          {/* Photos 2, 3, 4, 5 (Grid on Right) */}
          <div className="md:col-span-6 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Photo 2: Equipamentos */}
            <div
              className="group relative rounded-2xl overflow-hidden bg-[#F4F1ED] border border-[#C5C4C2] shadow-xs cursor-pointer h-60 sm:h-64"
              onClick={() => onOpenPhoto(1)}
            >
              <img
                src={OFFICIAL_PHOTOS[1].url}
                alt={OFFICIAL_PHOTOS[1].altText}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#868684]/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 inset-x-0 p-4 text-[#F4F1ED]">
                <span className="text-[10px] uppercase tracking-widest font-semibold bg-[#868684]/80 px-2 py-0.5 rounded inline-block mb-1">
                  {OFFICIAL_PHOTOS[1].category}
                </span>
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {OFFICIAL_PHOTOS[1].title}
                </h3>
              </div>
            </div>

            {/* Photo 3: Ambiente */}
            <div
              className="group relative rounded-2xl overflow-hidden bg-[#F4F1ED] border border-[#C5C4C2] shadow-xs cursor-pointer h-60 sm:h-64"
              onClick={() => onOpenPhoto(2)}
            >
              <img
                src={OFFICIAL_PHOTOS[2].url}
                alt={OFFICIAL_PHOTOS[2].altText}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#868684]/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 inset-x-0 p-4 text-[#F4F1ED]">
                <span className="text-[10px] uppercase tracking-widest font-semibold bg-[#868684]/80 px-2 py-0.5 rounded inline-block mb-1">
                  {OFFICIAL_PHOTOS[2].category}
                </span>
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {OFFICIAL_PHOTOS[2].title}
                </h3>
              </div>
            </div>

            {/* Photo 4: Ambiente */}
            <div
              className="group relative rounded-2xl overflow-hidden bg-[#F4F1ED] border border-[#C5C4C2] shadow-xs cursor-pointer h-60 sm:h-64"
              onClick={() => onOpenPhoto(3)}
            >
              <img
                src={OFFICIAL_PHOTOS[3].url}
                alt={OFFICIAL_PHOTOS[3].altText}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#868684]/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 inset-x-0 p-4 text-[#F4F1ED]">
                <span className="text-[10px] uppercase tracking-widest font-semibold bg-[#868684]/80 px-2 py-0.5 rounded inline-block mb-1">
                  {OFFICIAL_PHOTOS[3].category}
                </span>
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {OFFICIAL_PHOTOS[3].title}
                </h3>
              </div>
            </div>

            {/* Photo 5: Detalhes */}
            <div
              className="group relative rounded-2xl overflow-hidden bg-[#F4F1ED] border border-[#C5C4C2] shadow-xs cursor-pointer h-60 sm:h-64"
              onClick={() => onOpenPhoto(4)}
            >
              <img
                src={OFFICIAL_PHOTOS[4].url}
                alt={OFFICIAL_PHOTOS[4].altText}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#868684]/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 inset-x-0 p-4 text-[#F4F1ED]">
                <span className="text-[10px] uppercase tracking-widest font-semibold bg-[#868684]/80 px-2 py-0.5 rounded inline-block mb-1">
                  {OFFICIAL_PHOTOS[4].category}
                </span>
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {OFFICIAL_PHOTOS[4].title}
                </h3>
              </div>
            </div>

          </div>

        </div>

        {/* Gallery Caption Note */}
        <div className="mt-8 text-center text-xs text-[#868684] flex items-center justify-center gap-2">
          <MapPin className="w-3.5 h-3.5" />
          <span>Fotos reais registradas no espaço Alinhare em Londrina - Jardim Londrilar.</span>
        </div>

      </div>
    </section>
  );
};
