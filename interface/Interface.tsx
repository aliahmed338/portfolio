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

export interface IProjectDetails {
  id: number;
  name: string;
  description: string;
  images: StaticImageData[];
  tech: string[];
  vercel?: string;
  github?: string;
}

export interface ProjectImage {
  src: string;
  alt?: string;
}

export interface Project {
  name: string;
  github?: string;
  vercel?: string;
  description: string;
  tech: string[];
  images: ProjectImage[];
}
