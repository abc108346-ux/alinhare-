import React from 'react';
import { MessageCircle, Sparkles, CheckCircle2, Feather, RefreshCw } from 'lucide-react';
import { getWhatsAppLink } from '../data/constants';

export const MyofascialSection: React.FC = () => {
  return (
    <section id="liberacao-miofascial" className="bg-[#F4F1ED] py-16 md:py-24 border-b border-[#DCDCD9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#868684]">
              <span className="w-6 h-[1px] bg-[#868684]"></span>
              <span>Terapia Manual & Flexibilidade</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#868684] leading-tight">
              Liberação Miofascial em Londrina
            </h2>
            <p className="text-base sm:text-lg text-[#868684] leading-relaxed opacity-90">
              A fáscia é a membrana de tecido conjuntivo que envolve músculos e articulações. Quando submetida a estresse, má postura ou sobrecarga, podem surgir pontos de tensão e restrições de movimento.
            </p>
            <p className="text-sm sm:text-base text-[#868684] leading-relaxed opacity-90">
              Na Alinhare, a liberação miofascial é realizada com sensibilidade técnica para restabelecer a elasticidade tecidual, relaxar a musculatura e restaurar a sensação de leveza do seu corpo.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-[#868684]">
                <CheckCircle2 className="w-5 h-5 text-[#868684] shrink-0 mt-0.5" />
                <span>Alívio de dores musculares e contraturas acumuladas</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#868684]">
                <CheckCircle2 className="w-5 h-5 text-[#868684] shrink-0 mt-0.5" />
                <span>Melhora na circulação e oxigenação tecidual</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#868684]">
                <CheckCircle2 className="w-5 h-5 text-[#868684] shrink-0 mt-0.5" />
                <span>Aumento da amplitude de movimento e flexibilidade</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={getWhatsAppLink('Olá! Gostaria de agendar uma sessão de Liberação Miofascial na Alinhare em Londrina.')}
                target="_blank"
                rel="noopener noreferrer"
                id="myofascial-whatsapp-cta"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold bg-[#868684] text-[#F4F1ED] hover:bg-[#A8A8A5] transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar Liberação Miofascial</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#DCDCD9] p-8 sm:p-10 rounded-2xl border border-[#C5C4C2] space-y-6 shadow-sm">
              <div className="flex items-center gap-3 border-b border-[#C5C4C2] pb-4">
                <Feather className="w-5 h-5 text-[#868684]" />
                <h3 className="font-display text-2xl font-light text-[#868684]">
                  Indicações Comuns
                </h3>
              </div>

              <ul className="space-y-3.5 text-sm text-[#868684]">
                <li className="p-4 bg-[#F4F1ED] rounded-xl border border-[#C5C4C2]">
                  <strong className="block text-xs uppercase tracking-wider font-bold text-[#868684] mb-1">Tensões no pescoço e ombros:</strong>
                  Decorrentes de longas horas sentado ou trabalho ao computador.
                </li>
                <li className="p-4 bg-[#F4F1ED] rounded-xl border border-[#C5C4C2]">
                  <strong className="block text-xs uppercase tracking-wider font-bold text-[#868684] mb-1">Desconfortos e dores nas costas:</strong>
                  Sobrecargas na coluna lombar e torácica.
                </li>
                <li className="p-4 bg-[#F4F1ED] rounded-xl border border-[#C5C4C2]">
                  <strong className="block text-xs uppercase tracking-wider font-bold text-[#868684] mb-1">Recuperação e pós-esforço:</strong>
                  Ideal para quem pratica atividades físicas e busca relaxamento muscular profundo.
                </li>
              </ul>

              <div className="pt-2 text-xs text-[#868684]/80 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#A8A8A5]" />
                <span className="text-[11px] uppercase tracking-wider">Atendimento acolhedor e com horário reservado no Jardim Londrilar.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
