interface Specs {
  key: string;
  label: string;
  value: string;
}

interface BaseProduct {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  manufacturer: string;
  rating: number;
  reviews: number;
  imageHref: string;
  specs: Specs[];
}

interface Videocard extends BaseProduct {
  category: 'videocards';
  memory: number;
}

interface Motherboard extends BaseProduct {
  category: 'motherboards';
}

interface Mouse extends BaseProduct {
  category: 'mouses';
}

interface Monitor extends BaseProduct {
  category: 'monitors';
}

interface Keyboard extends BaseProduct {
  category: 'keyboards';
}

interface Cpu extends BaseProduct {
  category: 'cpu';
}

export type Product = Videocard | Motherboard | Mouse | Monitor | Keyboard | Cpu;
