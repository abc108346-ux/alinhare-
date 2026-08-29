import React from 'react';
import { OFFICIAL_LOGO_URL, BUSINESS_INFO, getWhatsAppLink } from '../data/constants';
import { Sparkles, MessageCircle, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="bg-[#DCDCD9] py-16 md:py-24 border-b border-[#C5C4C2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Official Logo Branding Emblem */}
          <div className="lg:col-span-5 text-center flex flex-col items-center justify-center">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-[#F4F1ED] border border-[#C5C4C2] shadow-xs max-w-sm w-full">
              <img
                src={OFFICIAL_LOGO_URL}
                alt="Logo Oficial Alinhare Pilates e Fisioterapia Integrativa"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto object-cover border-2 border-[#C5C4C2] shadow-sm mb-4"
                loading="lazy"
              />
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#868684] tracking-wide">
                ALINHARE
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#868684] mt-1 font-medium">
                Pilates & Fisioterapia Integrativa
              </p>
              <div className="mt-4 pt-3 border-t border-[#C5C4C2] flex items-center justify-center gap-1.5 text-xs text-[#868684]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Jardim Londrilar • Londrina - PR</span>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Grounded Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#868684]">
              <span className="w-6 h-[1px] bg-[#868684]"></span>
              <span>Sobre a Alinhare</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#868684] leading-tight">
              Movimento pra fortalecer, <span className="italic">alinhar</span> e transformar.
            </h2>

            <div className="space-y-4 text-base text-[#868684] leading-relaxed opacity-90 font-normal">
              <p>
                A <strong className="font-semibold">Alinhare Pilates e Fisioterapia Integrativa</strong> nasceu com o propósito de oferecer um atendimento humano, atento e focado no equilíbrio físico e bem-estar em Londrina.
              </p>
              <p>
                No coração do Jardim Londrilar, proporcionamos um ambiente calmo e estruturado para quem busca desacelerar a mente, fortalecer o corpo e desenvolver maior consciência corporal por meio do Pilates, da fisioterapia e da liberação miofascial.
              </p>
              <p>
                Acreditamos que cada movimento bem orientado tem o poder de alinhar a postura, aliviar tensões acumuladas e transformar a sua qualidade de vida.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                id="about-whatsapp-cta"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold bg-[#868684] text-[#F4F1ED] hover:bg-[#A8A8A5] transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Falar com a Alinhare</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
