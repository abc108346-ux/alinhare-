import React from 'react';
import { OFFICIAL_LOGO_URL, BUSINESS_INFO, NAV_LINKS, getWhatsAppLink } from '../data/constants';
import { Phone, Instagram, MapPin, MessageCircle, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#DCDCD9] text-[#868684] border-t border-[#C5C4C2] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#C5C4C2]">
          
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={OFFICIAL_LOGO_URL}
                alt="Logo da Alinhare Pilates e Fisioterapia Integrativa"
                className="w-14 h-14 rounded-full object-cover border border-[#C5C4C2] shadow-xs"
                loading="lazy"
              />
              <div>
                <span className="font-display text-2xl font-semibold tracking-wide text-[#868684] block">
                  ALINHARE
                </span>
                <span className="text-xs uppercase tracking-widest text-[#868684]/80">
                  Pilates & Fisioterapia Integrativa
                </span>
              </div>
            </div>

            <p className="text-sm text-[#868684] leading-relaxed max-w-sm">
              "{BUSINESS_INFO.slogan}"
            </p>

            <p className="text-xs text-[#868684]/90 leading-relaxed max-w-sm">
              Estúdio de Pilates e Fisioterapia Integrativa em Londrina - PR. Cuidado humanizado, movimento consciente e bem-estar no Jardim Londrilar.
            </p>
          </div>

          {/* Col 2: Fast Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#868684]">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider font-semibold">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[#868684] hover:text-[#A8A8A5] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#868684]">
              Contato & Localização
            </h4>

            <div className="space-y-3 text-sm text-[#868684]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#868684] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address.street} • {BUSINESS_INFO.address.neighborhood}<br />
                  {BUSINESS_INFO.address.city} - {BUSINESS_INFO.address.state} • CEP {BUSINESS_INFO.address.zip}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#868684] shrink-0" />
                <a
                  href="tel:43991897341"
                  id="footer-phone-link"
                  className="hover:underline hover:text-[#A8A8A5]"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#868684] shrink-0" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-whatsapp-link"
                  className="hover:underline hover:text-[#A8A8A5]"
                >
                  WhatsApp: (43) 99189-7341
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#868684] shrink-0" />
                <a
                  href={BUSINESS_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-instagram-link"
                  className="hover:underline hover:text-[#A8A8A5]"
                >
                  {BUSINESS_INFO.instagram.handle}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* SEO Local Footer Tags */}
        <div className="py-6 border-b border-[#C5C4C2] text-[11px] text-[#868684]/80 leading-relaxed">
          <p>
            <strong>Alinhare Pilates e Fisioterapia Integrativa</strong> • Atendimento em Londrina - PR: Pilates em Londrina, Estúdio de Pilates no Jardim Londrilar, Fisioterapia em Londrina, Fisioterapia Integrativa, Liberação Miofascial e Reeducação Postural.
          </p>
        </div>

        {/* Bottom copyright, developer credit & back to top */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#868684]">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. Todos os direitos reservados.
          </p>

          <p className="text-[11px] text-center font-medium tracking-wide">
            Produzido por{' '}
            <a
              href="https://bwwebdesign.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-developer-credit"
              className="font-bold underline hover:text-[#A8A8A5] transition-colors"
            >
              BW Bernardo Web Design
            </a>
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            id="footer-back-to-top"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F4F1ED] hover:bg-[#C5C4C2] text-[11px] uppercase tracking-widest font-semibold text-[#868684] transition-colors border border-[#C5C4C2] shadow-xs cursor-pointer"
            title="Voltar ao topo"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
