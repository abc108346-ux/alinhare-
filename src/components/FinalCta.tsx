import React from 'react';
import { MessageCircle, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { getWhatsAppLink, BUSINESS_INFO } from '../data/constants';

export const FinalCta: React.FC = () => {
  return (
    <section id="contato" className="bg-[#868684] py-16 md:py-24 text-[#F4F1ED] relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#F4F1ED]/80">
          <span className="w-8 h-[1px] bg-[#F4F1ED]/40"></span>
          <span>Alinhare Pilates & Fisioterapia Integrativa</span>
          <span className="w-8 h-[1px] bg-[#F4F1ED]/40"></span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#F4F1ED] max-w-3xl mx-auto leading-tight">
          Seu movimento pode transformar sua rotina.
        </h2>

        <p className="text-base sm:text-lg text-[#F4F1ED]/90 max-w-2xl mx-auto font-light leading-relaxed">
          Conheça a Alinhare e descubra uma forma mais consciente de cuidar do seu corpo.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            id="final-cta-whatsapp-btn"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2.5 px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold bg-[#F4F1ED] text-[#868684] hover:bg-[#DCDCD9] transition-all duration-200 shadow-md active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Agendar pelo WhatsApp</span>
          </a>

          <a
            href="tel:43991897341"
            id="final-cta-phone-btn"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold border border-[#F4F1ED]/40 text-[#F4F1ED] hover:bg-[#F4F1ED]/10 transition-all duration-200"
          >
            <span>(43) 99189-7341</span>
          </a>
        </div>

        <div className="pt-6 text-xs text-[#F4F1ED]/70 flex items-center justify-center gap-2">
          <MapPin className="w-3.5 h-3.5" />
          <span>Rua Lord Lovat, 161 • Jardim Londrilar, Londrina - PR</span>
        </div>

      </div>
    </section>
  );
};
