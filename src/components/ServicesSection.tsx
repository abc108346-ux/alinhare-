import React, { useState } from 'react';
import { Activity, HeartPulse, Sparkles, Layers, ArrowUpRight, Check, X, MessageCircle } from 'lucide-react';
import { SERVICES_DATA, getWhatsAppLink } from '../data/constants';
import { ServiceItem } from '../types';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-6 h-6" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'Layers':
        return <Layers className="w-6 h-6" />;
      default:
        return <Activity className="w-6 h-6" />;
    }
  };

  return (
    <section id="servicos" className="bg-[#F4F1ED] py-16 md:py-24 border-b border-[#DCDCD9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#868684] mb-3">
            <span className="w-6 h-[1px] bg-[#868684]"></span>
            <span>Nossos Atendimentos</span>
            <span className="w-6 h-[1px] bg-[#868684]"></span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#868684]">
            Como podemos cuidar do seu movimento
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#868684]/90 max-w-2xl mx-auto font-normal">
            Abordagens especializadas para promover equilíbrio, fortalecimento e bem-estar corporal na Alinhare.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#DCDCD9] border border-[#C5C4C2] hover:border-[#868684] transition-all duration-300 shadow-xs hover:shadow-md group"
            >
              <div>
                {/* Icon Header */}
                <div className="w-12 h-12 rounded-full bg-[#F4F1ED] text-[#868684] flex items-center justify-center mb-5 border border-[#C5C4C2] group-hover:scale-105 transition-transform shadow-xs">
                  {getIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl sm:text-2xl font-light tracking-wide text-[#868684] mb-2 uppercase">
                  {service.title}
                </h3>

                {/* Subtitle / Tagline */}
                <p className="text-[11px] uppercase tracking-wider font-semibold text-[#868684]/80 mb-4 pb-3 border-b border-[#C5C4C2]">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-[#868684] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Card Footer: Discrete CTA */}
              <div className="pt-4 border-t border-[#C5C4C2] flex items-center justify-between">
                <button
                  type="button"
                  id={`btn-know-${service.id}`}
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#868684] hover:text-[#A8A8A5] uppercase tracking-widest transition-colors cursor-pointer group-hover:underline"
                >
                  <span>{service.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={getWhatsAppLink(`Olá! Gostaria de saber mais sobre ${service.title} na Alinhare.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] uppercase tracking-widest font-bold text-[#868684] hover:text-[#A8A8A5] underline"
                >
                  Agendar
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#868684]/60 backdrop-blur-xs animate-in fade-in">
          <div
            className="bg-[#F4F1ED] border border-[#C5C4C2] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 relative"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-[#868684] hover:bg-[#DCDCD9] rounded-full transition-colors"
              aria-label="Fechar detalhes"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#868684] font-bold">
                Atendimento Alinhare
              </span>
              <h3 className="font-display text-3xl font-light text-[#868684] mt-1">
                {selectedService.title}
              </h3>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#868684]/80 mt-1">
                {selectedService.tagline}
              </p>
            </div>

            <p className="text-base text-[#868684] leading-relaxed">
              {selectedService.description}
            </p>

            <div className="space-y-2.5 bg-[#DCDCD9] p-5 rounded-2xl border border-[#C5C4C2]">
              <h4 className="text-[11px] uppercase tracking-widest font-bold text-[#868684]">
                Destaques do atendimento:
              </h4>
              <ul className="space-y-2 text-sm text-[#868684]">
                {selectedService.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#868684] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={getWhatsAppLink(`Olá! Gostaria de agendar um horário para ${selectedService.title} na Alinhare.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold bg-[#868684] text-[#F4F1ED] hover:bg-[#A8A8A5] transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar pelo WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold border border-[#C5C4C2] text-[#868684] hover:bg-[#DCDCD9]"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
