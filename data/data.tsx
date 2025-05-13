import noteApp from "@/public/projects/note-app.webp";
import freshApp from "@/public/projects/fresh-app.webp";
import portoApp from "@/public/projects/porto-app.webp";
import cvApp from "@/public/projects/cv-app.webp";
import Exclucive from "@/public/projects/screencapture-e-commerce-v1-ochre-vercel-app-2024-07-27-16_20_53.webp";
import cyborg from "@/public/projects/screencapture-cyborg-mu-vercel-app-2024-07-27-16_27_43.webp";
import wordGame from "@/public/projects/word-game.webp";
import WeatherApp from "@/public/projects/weather-app.webp";
import Book from "@/public/projects/Book.webp";
import Tawaazon from "@/public/projects/tawaazon.webp";
import EasyInvo from "@/public/projects/invoice.webp";
import Article from "@/public/projects/article.webp";
import { Iprojects, Iskills, Isocialmedia } from "@/interface/Interface";

export const SKILLS: Iskills[] = [
  {
    id: "html",
    children: "Html",
  },
  {
    id: "css",
    children: "Css",
  },
  {
    id: "java script",
    children: "Java Script",
  },
  {
    id: "typeScript",
    children: "Type Script",
  },
  // {
  //   id: "bootstrap",
  //   children: "Bootstrap",
  // },
  {
    id: "tailwind",
    children: "Tailwind Css",
  },
  {
    id: "react",
    children: "react",
  },
  {
    id: "redux-toolkit",
    children: "redux-toolkit",
  },
  {
    id: "axios",
    children: "axios",
  },
  {
    id: "react-hook-form",
    children: "react-hook-form",
  },
  {
    id: "Yup",
    children: "Yup",
  },
  {
    id: "zod",
    children: "zod",
  },
  {
    id: "React-Router",
    children: "React Router",
  },
  {
    id: "Next.js",
    children: "Next.js",
  },
  {
    id: "Postgresql",
    children: "Postgresql",
  },
  {
    id: "prisma",
    children: "Prisma",
  },
  {
    id: "Ui-design",
    children: "Ui Design",
  },
  {
    id: "Figma",
    children: "Figma",
  },
  {
    id: "npm",
    children: "npm",
  },
  {
    id: "shadcn-ui",
    children: "shadcn ui",
  },
  {
    id: "git",
    children: "git",
  },
  {
    id: "github",
    children: "github",
  },
  // {
  //   id: "redux",
  //   children: "redux",
  // },
];

export const PROJECTS: Iprojects[] = [
  {
    id: 1,
    name: "EasyInvo",
    description: [
      "- A powerful invoicing app built with Next.js and Prisma.",
      "- Includes full auth system and CRUD for invoices.",
      "- Supports Stripe payments, email via Resend & React Email.",
    ],
    image: EasyInvo,
    github: "https://github.com/aliahmed200/invoice-app",
    vercel: "https://invoice-app-flax-seven.vercel.app/",
  },
  {
    id: 2,
    name: "Exclusive",
    description: [
      "- An advanced e-commerce website with React.js.",
      "- Features seamless API integration with Axios.",
      "- Designed for a smooth shopping experience.",
    ],
    image: Exclucive,
    github: "https://github.com/aliahmed200/E-commerce-ts",
    vercel: "https://e-commerce-v1-ochre.vercel.app/",
  },
  {
    id: 3,
    name: "Note App",
    description: [
      "- A simple note-taking app with React.js.",
      "- Users can add, edit, and delete notes easily.",
      "- Uses Formik and Yup for smooth form validation.",
    ],
    image: noteApp,
    github: "https://github.com/aliahmed200/note-app",
    vercel: "https://note-app-my-new-branch.vercel.app/login",
  },
  {
    id: 4,
    name: "Article",
    description: [
      "- A full-stack article platform built with Next.js and Prisma.",
      "- Role-based access for admins and users with full auth.",
      "- Features article CRUD, Tailwind UI, and NeonDB integration.",
    ],
    image: Article,
    github: "https://github.com/aliahmed200/article-app",
    vercel: "https://article-full-stack-app-next.vercel.app/",
  },
  {
    id: 5,
    name: "Wordle",
    description: [
      "- Classic word guessing game built with React & TypeScript",
      "- Features daily challenges and interactive keyboard",
      "- Responsive design with victory animations",
    ],
    image: wordGame,
    vercel: "https://word-game-weld.vercel.app/",
    github: "https://github.com/aliahmed200/Word-Game",
  },
  {
    id: 6,
    name: "Weather App",
    description: [
      "- Real-time weather forecasting web application",
      "- Integrates with OpenWeatherMap API for live data",
      "- Displays temperature, humidity, and wind speed",
    ],
    image: WeatherApp,
    vercel: "https://weather-app-green-six-91.vercel.app/",
    github: "https://github.com/aliahmed200/weather-app",
  },
  {
    id: 7,
    name: "Fresh Cart",
    description: [
      "- An online shopping platform built with React.js.",
      "- Integrated with an API using Axios.",
      "- Features secure authentication and a user-friendly cart.",
    ],
    image: freshApp,
    github: "https://github.com/aliahmed200/E-commerce",
  },
  {
    id: 8,
    name: "JobJunction",
    description: [
      "- A CV builder app using React and Tailwind CSS.",
      "- Users can customize templates and download PDFs.",
      "- Designed for effortless resume creation.",
    ],
    image: cvApp,
    vercel: "https://cv-builder-newversion.vercel.app/",
    github: "https://github.com/aliahmed200/cv-builder",
  },
  {
    id: 9,
    name: "My Old Portfolio",
    description: [
      "- A modern portfolio built with React and TypeScript.",
      "- Supports dark/light mode and smooth navigation.",
      "- Optimized for SEO and perfect responsiveness.",
    ],
    image: portoApp,
    vercel: "https://portfolio-three-sandy-24.vercel.app/",
    github: "https://github.com/aliahmed200/portfolio",
  },
  {
    id: 10,
    name: "CYBORG",
    description: [
      "- A dynamic gaming website with React and TypeScript.",
      "- Includes Home, Streams, Profile, and Browse pages.",
      "- Fully responsive with smooth SPA navigation.",
    ],
    image: cyborg,
    vercel: "https://cyborg-mu.vercel.app/",
    github: "https://github.com/aliahmed200/cyborg",
  },
];

export const SOCIAL_MEDIA: Isocialmedia[] = [
  {
    href: "https://www.facebook.com/profile.php?id=100069281631238",
    name: "facebook",
  },
  {
    href: "https://github.com/aliahmed200",
    name: "gitHub",
  },
  {
    href: "https://t.me/aliahmed_2000",
    name: "telegram",
  },
  {
    href: "mailto:aliahmed60345@gmail.com",
    name: "gmail",
  },
  {
    href: "whatsapp://send?phone=+201096929238",
    name: "whats app",
  },
  {
    href: "https://www.linkedin.com/in/ali-ahmed-2579202a9",
    name: "linked in",
  },
  {
    href: "https://www.behance.net/3ea1f0ee",
    name: "Behance",
  },
];

export const UXCASESTUDY: Iprojects[] = [
  {
    id: 1,
    name: "the Book Exchange Experience",
    description: [
      "- A Case Study on Streamlined Swapping and Delivery",
      "- I followed the Double Diamond process in my design, focusing on the four stages: Discover, Define, Develop, and Deliver. ",
    ],
    image: Book,
    Behance:
      "https://www.behance.net/gallery/215469583/Enhancing-the-Book-Exchange-Experience-Case-Study",
  },
  {
    id: 2,
    name: "Tawaazon",
    description: [
      "- Tawaazon Case Study (Ui Ux Design)",
      "- Tawaazon: An Innovative App Designed to Help Parents Manage Their Children's Screen Time While Educating Them on the Importance of Balance in a Fun and Engaging Way",
    ],
    image: Tawaazon,
    Behance: "https://www.behance.net/gallery/216091343/Tawaazon",
  },
];
