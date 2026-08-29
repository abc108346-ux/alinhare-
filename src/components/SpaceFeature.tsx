import React from 'react';
import { ArrowRight, Sparkles, HeartHandshake, Eye } from 'lucide-react';
import { OFFICIAL_PHOTOS, getWhatsAppLink } from '../data/constants';

interface SpaceFeatureProps {
  onOpenPhoto?: (photoIndex: number) => void;
}

export const SpaceFeature: React.FC<SpaceFeatureProps> = ({ onOpenPhoto }) => {
  // Real Photo 1 - Recepção
  const receptionPhoto = OFFICIAL_PHOTOS[0];

  return (
    <section id="espaco" className="bg-[#DCDCD9] py-16 md:py-24 border-b border-[#C5C4C2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left / Top: Real Reception Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl bg-[#F4F1ED] border border-[#C5C4C2] shadow-lg">
                <img
                  src={receptionPhoto.url}
                  alt={receptionPhoto.altText}
                  className="w-full h-[380px] sm:h-[440px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* Quick View Tag */}
              <button
                type="button"
                onClick={() => onOpenPhoto && onOpenPhoto(0)}
                className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F4F1ED] text-[11px] uppercase tracking-widest font-semibold text-[#868684] border border-[#C5C4C2] shadow-sm hover:bg-[#DCDCD9] transition-colors cursor-pointer"
                title="Ampliar foto da recepção"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Ver recepção ampliada</span>
              </button>
            </div>
          </div>

          {/* Right / Top: Editorial Text */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            
            <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#868684]">
              <span className="w-6 h-[1px] bg-[#868684]"></span>
              <span>O Espaço Alinhare</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#868684] leading-tight">
              Um espaço pensado para você.
            </h2>

            <p className="text-base sm:text-lg text-[#868684] leading-relaxed opacity-90">
              Na Alinhare, o cuidado começa pelo ambiente. Um espaço acolhedor para você desacelerar, se movimentar e cuidar do seu corpo.
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex items-start gap-3 text-sm text-[#868684] bg-[#F4F1ED] p-5 rounded-2xl border border-[#C5C4C2]">
                <HeartHandshake className="w-5 h-5 text-[#868684] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Localizado no Jardim Londrilar, o estúdio foi estruturado para proporcionar uma experiência serena, segura e focada no seu bem-estar físico e mental.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#galeria"
                id="space-feature-explore-cta"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold bg-[#868684] text-[#F4F1ED] hover:bg-[#A8A8A5] transition-colors shadow-sm"
              >
                <span>Conheça nosso espaço</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppLink('Olá! Gostaria de agendar uma visita para conhecer o espaço da Alinhare.')}
                target="_blank"
                rel="noopener noreferrer"
                id="space-feature-visit-cta"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold border border-[#868684] text-[#868684] hover:bg-[#F4F1ED] transition-colors"
              >
                <span>Agendar uma visita</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
