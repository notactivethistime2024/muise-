export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  priceStart?: string;
}

export interface GearItem {
  id: string;
  category: 'Microphones' | 'Outboard' | 'Instruments' | 'Monitoring';
  name: string;
  model: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  artist: string;
  type: 'spotify' | 'youtube';
  src: string;
}
