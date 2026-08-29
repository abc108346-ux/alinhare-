import React from 'react';
import { MessageCircle, HeartPulse, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import { getWhatsAppLink } from '../data/constants';

export const PhysiotherapySection: React.FC = () => {
  return (
    <section id="fisioterapia" className="bg-[#DCDCD9] py-16 md:py-24 border-b border-[#C5C4C2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#868684] mb-3">
            <span className="w-6 h-[1px] bg-[#868684]"></span>
            <span>Cuidado Especializado & Integrativo</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#868684] leading-tight mb-4">
            Fisioterapia em Londrina
          </h2>
          <p className="text-base sm:text-lg text-[#868684] leading-relaxed opacity-90 font-normal">
            Na Alinhare, compreendemos a fisioterapia como um caminho para restabelecer a harmonia do corpo, promovendo movimento consciente, autonomia e qualidade de vida no dia a dia.
          </p>
        </div>

        {/* 5 Core Pillars as requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-[#F4F1ED] p-6 sm:p-7 rounded-2xl border border-[#C5C4C2] space-y-3 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-full bg-[#DCDCD9] flex items-center justify-center text-[#868684] text-xs font-bold tracking-widest border border-[#C5C4C2]">
              01
            </div>
            <h3 className="font-display text-2xl font-light text-[#868684]">
              Movimento
            </h3>
            <p className="text-sm text-[#868684] leading-relaxed">
              O movimento ativo e seguro como pilar central da reabilitação física, devolvendo a naturalidade e a fluidez às suas atividades.
            </p>
          </div>

          <div className="bg-[#F4F1ED] p-6 sm:p-7 rounded-2xl border border-[#C5C4C2] space-y-3 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-full bg-[#DCDCD9] flex items-center justify-center text-[#868684] text-xs font-bold tracking-widest border border-[#C5C4C2]">
              02
            </div>
            <h3 className="font-display text-2xl font-light text-[#868684]">
              Funcionalidade
            </h3>
            <p className="text-sm text-[#868684] leading-relaxed">
              Foco direto em recuperar a capacidade funcional, melhorar sua mobilidade e proporcionar mais disposição para o cotidiano.
            </p>
          </div>

          <div className="bg-[#F4F1ED] p-6 sm:p-7 rounded-2xl border border-[#C5C4C2] space-y-3 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-full bg-[#DCDCD9] flex items-center justify-center text-[#868684] text-xs font-bold tracking-widest border border-[#C5C4C2]">
              03
            </div>
            <h3 className="font-display text-2xl font-light text-[#868684]">
              Consciência Corporal
            </h3>
            <p className="text-sm text-[#868684] leading-relaxed">
              Desenvolvimento da percepção postural e biomecânica para que você compreenda e cuide melhor do seu próprio corpo.
            </p>
          </div>

          <div className="bg-[#F4F1ED] p-6 sm:p-7 rounded-2xl border border-[#C5C4C2] space-y-3 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-full bg-[#DCDCD9] flex items-center justify-center text-[#868684] text-xs font-bold tracking-widest border border-[#C5C4C2]">
              04
            </div>
            <h3 className="font-display text-2xl font-light text-[#868684]">
              Cuidado Individualizado
            </h3>
            <p className="text-sm text-[#868684] leading-relaxed">
              Cada pessoa possui uma história e necessidades particulares. O acompanhamento é desenhado com atenção exclusiva às suas características.
            </p>
          </div>

          <div className="bg-[#F4F1ED] p-6 sm:p-7 rounded-2xl border border-[#C5C4C2] space-y-3 shadow-xs hover:shadow-md transition-all lg:col-span-2">
            <div className="w-10 h-10 rounded-full bg-[#DCDCD9] flex items-center justify-center text-[#868684] text-xs font-bold tracking-widest border border-[#C5C4C2]">
              05
            </div>
            <h3 className="font-display text-2xl font-light text-[#868684]">
              Abordagem Integrada
            </h3>
            <p className="text-sm text-[#868684] leading-relaxed">
              Sinergia completa entre fisioterapia clínica, fisioterapia integrativa, Pilates e liberação miofascial para um cuidado abrangente e sustentável.
            </p>
          </div>

        </div>

        {/* Bottom CTA block */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#F4F1ED] border border-[#C5C4C2] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-2xl font-light text-[#868684]">
              Quer saber como a fisioterapia pode te ajudar?
            </h4>
            <p className="text-sm text-[#868684]">
              Atendimento em Londrina - Jardim Londrilar. Converse conosco pelo WhatsApp.
            </p>
          </div>

          <a
            href={getWhatsAppLink('Olá! Gostaria de saber mais sobre a Fisioterapia na Alinhare em Londrina.')}
            target="_blank"
            rel="noopener noreferrer"
            id="fisioterapia-section-cta"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold bg-[#868684] text-[#F4F1ED] hover:bg-[#A8A8A5] transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com a Alinhare</span>
          </a>
        </div>

      </div>
    </section>
  );
};
