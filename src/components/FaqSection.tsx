import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_DATA, getWhatsAppLink } from '../data/constants';

export const FaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="faq" className="bg-[#DCDCD9] py-16 md:py-24 border-b border-[#C5C4C2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#868684] mb-3">
            <span className="w-6 h-[1px] bg-[#868684]"></span>
            <span>Tire Suas Dúvidas</span>
            <span className="w-6 h-[1px] bg-[#868684]"></span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#868684]">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#868684] opacity-90">
            Tudo o que você precisa saber sobre nossos atendimentos em Londrina.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="rounded-2xl bg-[#F4F1ED] border border-[#C5C4C2] overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-[#868684] hover:bg-[#F4F1ED]/80 cursor-pointer focus:outline-none"
                >
                  <span className="font-display text-lg sm:text-xl font-light text-[#868684]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#868684] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#868684] leading-relaxed border-t border-[#DCDCD9] animate-in fade-in duration-200 opacity-90 font-normal">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Support Prompt */}
        <div className="mt-10 text-center p-6 sm:p-8 rounded-2xl bg-[#F4F1ED] border border-[#C5C4C2] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="text-center sm:text-left">
            <p className="font-display text-xl font-light text-[#868684]">Ainda tem alguma dúvida?</p>
            <p className="text-xs uppercase tracking-wider text-[#868684]/80 mt-0.5">Fale diretamente com nossa equipe no WhatsApp.</p>
          </div>
          <a
            href={getWhatsAppLink('Olá! Gostaria de tirar uma dúvida sobre a Alinhare.')}
            target="_blank"
            rel="noopener noreferrer"
            id="faq-help-whatsapp-btn"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold bg-[#868684] text-[#F4F1ED] hover:bg-[#A8A8A5] transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
