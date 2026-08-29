import React from 'react';
import { MessageCircle, ArrowDown, MapPin, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, OFFICIAL_PHOTOS, getWhatsAppLink } from '../data/constants';

export const Hero: React.FC = () => {
  // Using real Photo 2 (Equipamentos / Ambiente)
  const heroPhoto = OFFICIAL_PHOTOS[1];

  return (
    <section
      id="inicio"
      className="relative bg-[#F4F1ED] pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-[#DCDCD9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            
            {/* Location & Trust Badge */}
            <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-[#A8A8A5] font-semibold">
              <span className="w-8 h-[1px] bg-[#A8A8A5]"></span>
              <span>📍 Jardim Londrilar • Londrina - PR</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] text-[#868684]">
                Movimento para fortalecer, <span className="italic">alinhar</span> e transformar.
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-[#868684] opacity-90 max-w-xl font-normal">
                Pilates, fisioterapia e liberação miofascial em Londrina para cuidar do seu corpo com consciência, equilíbrio e acolhimento.
              </p>
            </div>

            {/* Core Values / Pillar Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#868684]">
                <CheckCircle2 className="w-4 h-4 text-[#868684] shrink-0" />
                <span className="font-medium">Atendimento Individual</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#868684]">
                <CheckCircle2 className="w-4 h-4 text-[#868684] shrink-0" />
                <span className="font-medium">Espaço Acolhedor</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#868684]">
                <CheckCircle2 className="w-4 h-4 text-[#868684] shrink-0" />
                <span className="font-medium">Equipamentos Completos</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-primary-cta"
                className="inline-flex justify-center items-center gap-2.5 px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold bg-[#868684] text-[#F4F1ED] hover:bg-[#A8A8A5] transition-all shadow-sm active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar pelo WhatsApp</span>
              </a>

              <a
                href="#espaco"
                id="hero-secondary-cta"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold border border-[#C5C4C2] text-[#868684] hover:bg-[#DCDCD9] transition-all"
              >
                <span>Conhecer o Espaço</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Google Rating Bar */}
            <div className="mt-8 flex items-center gap-3.5 border-t border-[#DCDCD9] pt-6">
              <div className="flex text-[#A8A8A5] tracking-tight">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#A8A8A5] text-[#A8A8A5]" />
                ))}
              </div>
              <p className="text-[11px] uppercase tracking-widest font-semibold text-[#868684]">
                5,0 no Google • 40 avaliações de clientes
              </p>
            </div>
          </div>

          {/* Right Column: Natural Tones Editorial Photography Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Real Image Card */}
              <div className="relative rounded-2xl overflow-hidden bg-[#DCDCD9] border border-[#C5C4C2] shadow-lg">
                <img
                  src={heroPhoto.url}
                  alt={heroPhoto.altText}
                  className="w-full h-[380px] sm:h-[440px] object-cover hover:scale-[1.02] transition-transform duration-500"
                  loading="eager"
                />
                
                {/* Floating Real Venue Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#F4F1ED]/95 backdrop-blur-xs p-4 rounded-xl border border-[#C5C4C2] shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#868684]/80 font-bold">
                        Equipamentos Premium
                      </p>
                      <p className="text-xs font-semibold text-[#868684]">
                        Alinhare • Jardim Londrilar
                      </p>
                    </div>
                    <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold bg-[#DCDCD9] text-[#868684] rounded-full border border-[#C5C4C2]">
                      Londrina - PR
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
