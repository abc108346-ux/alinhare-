import React from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/constants';

export const SocialProof: React.FC = () => {
  return (
    <section className="bg-[#F4F1ED] py-16 md:py-24 border-b border-[#DCDCD9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#868684] mb-3">
            <span className="w-6 h-[1px] bg-[#868684]"></span>
            <span>Reconhecimento & Confiança</span>
            <span className="w-6 h-[1px] bg-[#868684]"></span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#868684]">
            Quem conhece, recomenda
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#868684] opacity-90">
            Avaliação máxima no Google pelos alunos e pacientes atendidos na Alinhare.
          </p>
        </div>

        {/* Big Rating Banner */}
        <div className="max-w-3xl mx-auto bg-[#DCDCD9] border border-[#C5C4C2] rounded-2xl p-8 sm:p-10 shadow-sm text-center space-y-4">
          
          <div className="flex items-center justify-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 sm:w-7 sm:h-7 fill-[#868684] text-[#868684]" />
            ))}
          </div>

          <div className="space-y-1">
            <div className="font-display text-5xl sm:text-6xl font-light text-[#868684]">
              5,0
            </div>
            <div className="text-base sm:text-lg font-normal text-[#868684] uppercase tracking-wider">
              Nota Máxima no Google Avaliações
            </div>
            <div className="text-xs uppercase tracking-widest text-[#868684]/80 font-semibold">
              Baseado em 40 avaliações verificadas
            </div>
          </div>

          <div className="pt-4 border-t border-[#C5C4C2] flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-[#868684]">
            <div className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#868684]" />
              <span>Avaliações reais no Google</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#868684]" />
              <span>Atendimento humanizado</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#868684]" />
              <span>Estúdio em Londrina - PR</span>
            </div>
          </div>

        </div>

        {/* Prepared structure for real reviews */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <div className="p-6 rounded-2xl bg-[#DCDCD9] border border-[#C5C4C2] space-y-3 shadow-xs">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#868684] text-[#868684]" />
              ))}
            </div>
            <p className="text-sm italic text-[#868684] leading-relaxed">
              "Espaço acolhedor, ambiente impecável e atenção dedicada em cada exercício de Pilates."
            </p>
            <div className="pt-2 border-t border-[#C5C4C2] text-[11px] uppercase tracking-widest font-bold text-[#868684]">
              Avaliação via Google Maps
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#DCDCD9] border border-[#C5C4C2] space-y-3 shadow-xs">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#868684] text-[#868684]" />
              ))}
            </div>
            <p className="text-sm italic text-[#868684] leading-relaxed">
              "Atendimento excelente no Jardim Londrilar. Profissionais atenciosos e espaço sereno."
            </p>
            <div className="pt-2 border-t border-[#C5C4C2] text-[11px] uppercase tracking-widest font-bold text-[#868684]">
              Avaliação via Google Maps
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#DCDCD9] border border-[#C5C4C2] space-y-3 shadow-xs">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#868684] text-[#868684]" />
              ))}
            </div>
            <p className="text-sm italic text-[#868684] leading-relaxed">
              "A proposta de fisioterapia integrativa e liberação miofascial faz total diferença no dia a dia."
            </p>
            <div className="pt-2 border-t border-[#C5C4C2] text-[11px] uppercase tracking-widest font-bold text-[#868684]">
              Avaliação via Google Maps
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
