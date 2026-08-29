import React from 'react';
import { MapPin, Navigation, MessageCircle, Phone, Instagram, Clock, Compass } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/constants';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="bg-[#F4F1ED] py-16 md:py-24 border-b border-[#DCDCD9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#868684] mb-3">
            <span className="w-6 h-[1px] bg-[#868684]"></span>
            <span>Localização & Acesso</span>
            <span className="w-6 h-[1px] bg-[#868684]"></span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#868684]">
            Estamos em Londrina
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#868684] opacity-90">
            No Jardim Londrilar, com fácil acesso e facilidade de estacionamento.
          </p>
        </div>

        {/* 2 Column Layout: Address Card + Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address Details Card */}
          <div className="lg:col-span-5 bg-[#DCDCD9] border border-[#C5C4C2] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm">
            
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#868684]">
                  Endereço Oficial
                </span>
                <h3 className="font-display text-2xl font-light text-[#868684] mt-1">
                  Alinhare Pilates e Fisioterapia Integrativa
                </h3>
              </div>

              <div className="space-y-3 text-sm text-[#868684]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#868684] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#868684]">Rua Lord Lovat, 161</p>
                    <p>Jardim Londrilar</p>
                    <p>Londrina - PR</p>
                    <p className="text-xs text-[#868684]/80">CEP 86010-690</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Phone className="w-5 h-5 text-[#868684] shrink-0" />
                  <a
                    href="tel:43991897341"
                    id="location-phone-link"
                    className="font-medium hover:underline hover:text-[#A8A8A5]"
                  >
                    (43) 99189-7341
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-[#868684] shrink-0" />
                  <a
                    href={BUSINESS_INFO.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="location-instagram-link"
                    className="font-medium hover:underline hover:text-[#A8A8A5]"
                  >
                    @alinharepilates.londrina
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F4F1ED] border border-[#C5C4C2] space-y-1 text-xs text-[#868684]">
                <span className="font-bold block uppercase tracking-wider text-[10px]">Atendimento:</span>
                <p>Horários flexíveis mediante agendamento prévio.</p>
                <p>Pilates, Fisioterapia Integrativa e Liberação Miofascial.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="location-how-to-get-btn"
                className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold bg-[#868684] text-[#F4F1ED] hover:bg-[#A8A8A5] transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Como chegar</span>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                id="location-whatsapp-btn"
                className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold border border-[#868684] text-[#868684] hover:bg-[#F4F1ED] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Google Maps Interactive Frame */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#C5C4C2] bg-[#DCDCD9] shadow-xs min-h-[350px] lg:min-h-full flex flex-col">
            <iframe
              title="Mapa de Localização da Alinhare em Londrina"
              src="https://maps.google.com/maps?q=Rua%20Lord%20Lovat,%20161,%20Jardim%20Londrilar,%20Londrina%20-%20PR&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[360px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
