export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  ctaText: string;
  iconName: string;
}

export interface GalleryPhoto {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  url: string;
  altText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
