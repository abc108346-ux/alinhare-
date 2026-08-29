import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SpaceFeature } from './components/SpaceFeature';
import { PilatesSection } from './components/PilatesSection';
import { ServicesSection } from './components/ServicesSection';
import { PhysiotherapySection } from './components/PhysiotherapySection';
import { MyofascialSection } from './components/MyofascialSection';
import { GallerySection } from './components/GallerySection';
import { SocialProof } from './components/SocialProof';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ImageModal } from './components/ImageModal';

export default function App() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const handleOpenPhoto = (index: number) => {
    setActivePhotoIndex(index);
  };

  const handleClosePhoto = () => {
    setActivePhotoIndex(null);
  };

  return (
    <div className="min-h-screen bg-[#F4F1ED] text-[#868684] flex flex-col selection:bg-[#C5C4C2] selection:text-[#868684]">
      {/* Official Header */}
      <Header />

      {/* Main Content Landmark */}
      <main className="flex-1">
        {/* Section 8: Hero */}
        <Hero />

        {/* Section 9: O Espaço Alinhare (Foto Real Recepção) */}
        <SpaceFeature onOpenPhoto={handleOpenPhoto} />

        {/* Section 10: Pilates em Londrina */}
        <PilatesSection onOpenPhoto={handleOpenPhoto} />

        {/* Section 11: Serviços (4 Cards) */}
        <ServicesSection />

        {/* Section 12: Fisioterapia em Londrina */}
        <PhysiotherapySection />

        {/* Dedicated Service Section: Liberação Miofascial */}
        <MyofascialSection />

        {/* Section 13: Galeria do Espaço (5 Fotos Reais) */}
        <GallerySection onOpenPhoto={handleOpenPhoto} />

        {/* Section 14: Prova Social (Google 5.0 - 40 avaliações) */}
        <SocialProof />

        {/* Section 15: Sobre a Alinhare */}
        <AboutSection />

        {/* Section 16: Localização (Jardim Londrilar + Google Maps) */}
        <LocationSection />

        {/* Section 17: FAQ (Perguntas Frequentes) */}
        <FaqSection />

        {/* Section 18: CTA Final */}
        <FinalCta />
      </main>

      {/* Section 20: Footer */}
      <Footer />

      {/* Section 19: Floating WhatsApp Mobile/Desktop */}
      <FloatingWhatsApp />

      {/* Lightbox Modal for Real Photos */}
      <ImageModal
        currentIndex={activePhotoIndex}
        onClose={handleClosePhoto}
        onSelectIndex={setActivePhotoIndex}
      />
    </div>
  );
}
