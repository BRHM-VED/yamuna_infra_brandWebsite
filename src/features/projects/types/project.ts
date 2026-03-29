export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  price: string;
  unitsAvailable: number;
  status: 'new' | 'completed' | 'ongoing';
  image: string;
  amenities: string[];
  gallery: string[];
}
