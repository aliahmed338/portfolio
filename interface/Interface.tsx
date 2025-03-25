import { StaticImageData } from "next/image";

export interface Iskills {
  id: string;
  children: string;
}

export interface Iprojects {
  id: number;
  name: string;
  description: string[];
  image: StaticImageData;
  vercel?: string;
  Behance?: string;
  github?: string;
}

export interface Isocialmedia {
  href: string;
  name: string;
}
