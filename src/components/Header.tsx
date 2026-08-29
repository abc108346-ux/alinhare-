import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, MapPin, Instagram } from 'lucide-react';
import { OFFICIAL_LOGO_URL, BUSINESS_INFO, NAV_LINKS, getWhatsAppLink } from '../data/constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top micro bar for Local SEO & Quick Access */}
      <div className="bg-[#DCDCD9] border-b border-[#C5C4C2] text-[#868684] text-[11px] uppercase tracking-wider py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="w-4 h-[1px] bg-[#A8A8A5] hidden md:inline-block"></span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#868684] shrink-0" />
              <span>Rua Lord Lovat, 161 • Jardim Londrilar, Londrina - PR</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 font-semibold shrink-0">
            <a
              href="tel:43991897341"
              id="header-phone-link"
              className="inline-flex items-center gap-1 hover:text-[#A8A8A5] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3" />
              <span>(43) 99189-7341</span>
            </a>
            <span className="text-[#C5C4C2]">|</span>
            <a
              href={BUSINESS_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              id="header-instagram-link"
              className="inline-flex items-center gap-1 hover:text-[#A8A8A5] transition-colors whitespace-nowrap"
            >
              <Instagram className="w-3 h-3" />
              <span>@alinharepilates.londrina</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 bg-[#F4F1ED]/95 backdrop-blur-md ${
          isScrolled ? 'shadow-sm border-b border-[#C5C4C2] py-2.5' : 'py-3.5 sm:py-4 border-b border-[#DCDCD9]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo & Brand Identity */}
          <a
            href="#inicio"
            id="brand-logo-link"
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus:ring-2 focus:ring-[#868684] rounded-lg"
          >
            <img
              src={OFFICIAL_LOGO_URL}
              alt="Logo Oficial da Alinhare Pilates e Fisioterapia Integrativa"
              className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full object-cover border border-[#C5C4C2] shadow-xs group-hover:scale-105 transition-transform"
              loading="eager"
            />
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-[0.18em] text-[#868684] leading-tight group-hover:text-[#A8A8A5] transition-colors">
                ALINHARE
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-[#868684]/80 font-medium whitespace-nowrap">
                Pilates & Fisioterapia
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6 text-[11px] xl:text-xs uppercase tracking-wider font-semibold text-[#868684]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                id={`nav-${link.href.replace('#', '')}`}
                className="whitespace-nowrap hover:text-[#A8A8A5] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#868684] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action CTA Button (Desktop) & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-cta"
              className="hidden md:inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-[11px] uppercase tracking-widest font-bold bg-[#868684] text-[#F4F1ED] hover:bg-[#A8A8A5] transition-all shadow-xs whitespace-nowrap active:scale-[0.98]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Agendar Horário</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-[#868684] hover:bg-[#DCDCD9] focus:outline-none focus:ring-2 focus:ring-[#868684]"
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-panel"
            className="lg:hidden bg-[#F4F1ED] border-b border-[#DCDCD9] px-6 pt-4 pb-6 space-y-4 shadow-md animate-in fade-in slide-in-from-top-4 duration-200"
          >
            <nav className="flex flex-col space-y-2 text-xs uppercase tracking-widest font-semibold text-[#868684]">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  id={`mobile-nav-${link.href.replace('#', '')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg hover:bg-[#DCDCD9] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-[#C5C4C2] flex flex-col gap-2.5">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-drawer-whatsapp-cta"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full text-xs uppercase tracking-widest font-bold bg-[#868684] text-[#F4F1ED] hover:bg-[#A8A8A5] transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar pelo WhatsApp</span>
              </a>
              <a
                href="tel:43991897341"
                id="mobile-drawer-phone-link"
                className="w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium border border-[#C5C4C2] text-[#868684] bg-[#DCDCD9] hover:bg-[#C5C4C2] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Ligar (43) 99189-7341</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
