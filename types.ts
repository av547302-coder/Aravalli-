export interface Project {
  id: number;
  title: string;
  location: string;
  price: string;
  type: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

export interface NavItem {
  label: string;
  path: string;
}
