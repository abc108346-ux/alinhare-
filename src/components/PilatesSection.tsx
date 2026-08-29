import React from 'react';
import { MessageCircle, CheckCircle2, ShieldCheck, Compass, Dumbbell } from 'lucide-react';
import { OFFICIAL_PHOTOS, getWhatsAppLink } from '../data/constants';

interface PilatesSectionProps {
  onOpenPhoto?: (photoIndex: number) => void;
}

export const PilatesSection: React.FC<PilatesSectionProps> = ({ onOpenPhoto }) => {
  const equipmentPhoto = OFFICIAL_PHOTOS[1]; // Photo 2
  const studioPhoto = OFFICIAL_PHOTOS[2];    // Photo 3

  return (
    <section id="pilates" className="bg-[#F4F1ED] py-16 md:py-24 border-b border-[#DCDCD9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#868684] mb-3">
            <span className="w-6 h-[1px] bg-[#868684]"></span>
            <span>Movimento Consciente & Saúde</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#868684] leading-tight mb-4">
            Pilates em Londrina
          </h2>
          <p className="text-base sm:text-lg text-[#868684] leading-relaxed opacity-90">
            Na Alinhare, você encontra um espaço dedicado ao Pilates em Londrina, no Jardim Londrilar, com uma proposta de movimento consciente, fortalecimento, mobilidade e qualidade de vida.
          </p>
        </div>

        {/* Editorial Layout: Photos + Highlights + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Image Collage with Real Photos */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            
            <div
              className="group relative rounded-2xl overflow-hidden bg-[#DCDCD9] border border-[#C5C4C2] shadow-sm cursor-pointer"
              onClick={() => onOpenPhoto && onOpenPhoto(1)}
            >
              <img
                src={equipmentPhoto.url}
                alt={equipmentPhoto.altText}
                className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#868684]/10 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-full bg-[#F4F1ED]/95 text-[10px] uppercase tracking-widest font-bold text-[#868684] backdrop-blur-xs border border-[#C5C4C2]">
                Aparelhos de Pilates
              </div>
            </div>

            <div
              className="group relative rounded-2xl overflow-hidden bg-[#DCDCD9] border border-[#C5C4C2] shadow-sm cursor-pointer mt-6"
              onClick={() => onOpenPhoto && onOpenPhoto(2)}
            >
              <img
                src={studioPhoto.url}
                alt={studioPhoto.altText}
                className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#868684]/10 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-full bg-[#F4F1ED]/95 text-[10px] uppercase tracking-widest font-bold text-[#868684] backdrop-blur-xs border border-[#C5C4C2]">
                Espaço Alinhare
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Pillars */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-[#DCDCD9] p-6 sm:p-8 rounded-2xl border border-[#C5C4C2] space-y-6 shadow-sm">
              <h3 className="font-display text-2xl sm:text-3xl font-light text-[#868684]">
                Benefícios do Pilates na Alinhare
              </h3>

              <ul className="space-y-4 text-sm sm:text-base text-[#868684]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#868684] shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-semibold">Fortalecimento Muscular Profundo:</strong> Estabilidade do core e alinhamento biomecânico para sua rotina diária.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#868684] shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-semibold">Mobilidade & Flexibilidade:</strong> Ganho gradual de amplitude articular com segurança e controle.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#868684] shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-semibold">Consciência Corporal e Postura:</strong> Reeducação de padrões motores e alívio de sobrecargas posturais.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#868684] shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-semibold">Ambiente Acolhedor no Jardim Londrilar:</strong> Sessões com atenção detalhada e respeito ao seu ritmo.
                  </span>
                </li>
              </ul>

              <div className="pt-4 border-t border-[#C5C4C2] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#868684]/80 block font-semibold">Atendimento com hora marcada</span>
                  <span className="text-xs uppercase tracking-widest font-bold text-[#868684]">Pilates em Londrina - PR</span>
                </div>

                <a
                  href={getWhatsAppLink('Olá! Gostaria de agendar uma aula de Pilates na Alinhare em Londrina.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="pilates-section-whatsapp-cta"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold bg-[#868684] text-[#F4F1ED] hover:bg-[#A8A8A5] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agendar Pilates</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
