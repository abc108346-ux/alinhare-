import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { OFFICIAL_PHOTOS } from '../data/constants';

interface ImageModalProps {
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  currentIndex,
  onClose,
  onSelectIndex
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        onSelectIndex((currentIndex + 1) % OFFICIAL_PHOTOS.length);
      }
      if (e.key === 'ArrowLeft') {
        onSelectIndex((currentIndex - 1 + OFFICIAL_PHOTOS.length) % OFFICIAL_PHOTOS.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose, onSelectIndex]);

  if (currentIndex === null) return null;

  const currentPhoto = OFFICIAL_PHOTOS[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#868684]/80 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-4xl w-full bg-[#F4F1ED] rounded-2xl overflow-hidden shadow-2xl border border-[#C5C4C2]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:px-6 bg-[#DCDCD9] border-b border-[#C5C4C2] flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#868684] block">
              {currentPhoto.category} • Foto Real {currentIndex + 1} de {OFFICIAL_PHOTOS.length}
            </span>
            <h3 className="font-display text-xl font-semibold text-[#868684]">
              {currentPhoto.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-[#868684] hover:bg-[#C5C4C2] transition-colors"
            aria-label="Fechar visualização"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body / Image Viewer */}
        <div className="relative bg-[#DCDCD9] flex items-center justify-center min-h-[320px] max-h-[70vh] overflow-hidden">
          <img
            src={currentPhoto.url}
            alt={currentPhoto.altText}
            className="max-h-[68vh] w-auto max-w-full object-contain mx-auto"
          />

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={() =>
              onSelectIndex((currentIndex - 1 + OFFICIAL_PHOTOS.length) % OFFICIAL_PHOTOS.length)
            }
            className="absolute left-3 p-2.5 rounded-full bg-[#F4F1ED]/90 text-[#868684] hover:bg-[#F4F1ED] transition-colors shadow-md cursor-pointer"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={() => onSelectIndex((currentIndex + 1) % OFFICIAL_PHOTOS.length)}
            className="absolute right-3 p-2.5 rounded-full bg-[#F4F1ED]/90 text-[#868684] hover:bg-[#F4F1ED] transition-colors shadow-md cursor-pointer"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:px-6 bg-[#F4F1ED] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#868684]">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>Alinhare Pilates • Rua Lord Lovat, 161 - Jardim Londrilar, Londrina - PR</span>
          </div>

          <div className="flex items-center gap-1.5">
            {OFFICIAL_PHOTOS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onSelectIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === currentIndex ? 'bg-[#868684] scale-125' : 'bg-[#C5C4C2] hover:bg-[#A8A8A5]'
                }`}
                aria-label={`Ir para foto ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
