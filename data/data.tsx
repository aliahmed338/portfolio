import noteApp from "@/public/projects/note-app.webp";
import portoApp from "@/public/projects/porto-app.webp";
import Exclucive from "@/public/projects/screencapture-e-commerce-v1-ochre-vercel-app-2024-07-27-16_20_53.webp";
import cyborg from "@/public/projects/screencapture-cyborg-mu-vercel-app-2024-07-27-16_27_43.webp";
import wordGame from "@/public/projects/word-game.webp";
import WeatherApp from "@/public/projects/weather-app.webp";
import Book from "@/public/projects/Book.webp";
import Tawaazon from "@/public/projects/tawaazon.webp";
import EasyInvo from "@/public/projects/invoice.webp";
import Blog from "@/public/projects/blog-details-4.png";
import storeProductDetails from "@/public/projects/store-product-details.png";

import {
  Iprojects,
  Iskills,
  Isocialmedia,
  IProjectDetails,
} from "@/interface/Interface";

import Blog2 from "@/public/projects/blog-add.png";
import Blog3 from "@/public/projects/blog-details-2.png";
import Blog4 from "@/public/projects/blog-details-3.png";
import Blog5 from "@/public/projects/blog-home.png";
import Blog6 from "@/public/projects/blog-details.png";
import Blog7 from "@/public/projects/blog-home-dark.png";

import store1 from "@/public/projects/store-category.png";
import store2 from "@/public/projects/store-home.png";
import store3 from "@/public/projects/store-invoice.png";
import store4 from "@/public/projects/store-orders.png";
import store5 from "@/public/projects/store-profile.png";
import store6 from "@/public/projects/store-order-details.png";

import store10 from "@/public/projects/cart-store.png";
import store11 from "@/public/projects/details-store.png";
import store12 from "@/public/projects/wishlist-store.png";
import store13 from "@/public/projects/dark-store.png";
import store14 from "@/public/projects/dark-store-2.png";

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
  {
    id: "bootstrap",
    children: "Bootstrap",
  },
  {
    id: "tailwind",
    children: "Tailwind Css",
  },
  {
    id: "shadcn-ui",
    children: "Shadcn Ui",
  },
  {
    id: "daisy-ui",
    children: "daisy Ui",
  },
  {
    id: "react",
    children: "react",
  },
  {
    id: "Next.js",
    children: "Next.js",
  },
  {
    id: "React-Router",
    children: "React Router",
  },
  {
    id: "redux-toolkit",
    children: "redux-toolkit",
  },
  {
    id: "rtk-query",
    children: "RTK Query",
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
    id: "git",
    children: "git",
  },
  {
    id: "github",
    children: "github",
  },
  {
    id: "node-js",
    children: "node.js",
  },
  {
    id: "express",
    children: "express",
  },
  {
    id: "mongo-db",
    children: "mongoDB",
  },
];

export const PROJECTS: Iprojects[] = [
  {
    id: 1,
    name: "TechStoreOnline",
    description: [
      "- A full MERN stack e-commerce app..",
      "- Features product filtering, search, and order management.",
      "- Includes Stripe payments and invoice download..",
    ],
    image: storeProductDetails,
    github: "https://github.com/aliahmed338/Tech-Store-Online",
  },
  {
    id: 2,
    name: "TechBlog",
    description: [
      "- A full-featured blog platform built with Next.js",
      "- Supports admin & user roles with rich text editor",
      "- Blogs can include images uploaded via Cloudinary",
    ],
    image: Blog,
    github: "https://github.com/aliahmed338/Blog",
    vercel: "https://blog-three-red-94.vercel.app/",
  },
  {
    id: 3,
    name: "EasyInvo",
    description: [
      "- A powerful invoicing app built with Next.js and Prisma.",
      "- Includes full auth system and CRUD for invoices.",
      "- Supports Stripe payments, email via Resend & React Email.",
    ],
    image: EasyInvo,
    vercel: "https://invoice-app-flax-seven.vercel.app/",
  },
  {
    id: 4,
    name: "Cloth-Store",
    description: [
      "- An advanced e-commerce website with React.js.",
      "- Features seamless API integration with Axios.",
      "- Designed for a smooth shopping experience.",
    ],
    image: Exclucive,
    github: "https://github.com/aliahmed338/cloth-store",
    vercel: "https://cloth-store-rose.vercel.app/",
  },
  {
    id: 5,
    name: "Note-App",
    description: [
      "- A simple note-taking app with React.js.",
      "- Users can add, edit, and delete notes easily.",
      "- Uses Formik and Yup for smooth form validation.",
    ],
    image: noteApp,
    vercel: "https://note-app-my-new-branch.vercel.app/login",
  },

  {
    id: 6,
    name: "Wordle",
    description: [
      "- Classic word guessing game built with React & TypeScript",
      "- Features daily challenges and interactive keyboard",
      "- Responsive design with victory animations",
    ],
    image: wordGame,
    vercel: "https://word-game-weld.vercel.app/",
  },
  {
    id: 7,
    name: "Weather-App",
    description: [
      "- Real-time weather forecasting web application",
      "- Integrates with OpenWeatherMap API for live data",
      "- Displays temperature, humidity, and wind speed",
    ],
    image: WeatherApp,
    vercel: "https://weather-app-ochre-ten-44.vercel.app/",
    github: "https://github.com/aliahmed338/weather-app",
  },
  {
    id: 8,
    name: "My-Old-Portfolio",
    description: [
      "- A modern portfolio built with React and TypeScript.",
      "- Supports dark/light mode and smooth navigation.",
      "- Optimized for SEO and perfect responsiveness.",
    ],
    image: portoApp,
    vercel: "https://portfolio-three-sandy-24.vercel.app/",
  },
  {
    id: 9,
    name: "CYBORG",
    description: [
      "- A dynamic gaming website with React and TypeScript.",
      "- Includes Home, Streams, Profile, and Browse pages.",
      "- Fully responsive with smooth SPA navigation.",
    ],
    image: cyborg,
    vercel: "https://cyborg-six.vercel.app/",
    github: "https://github.com/aliahmed338/cyborg",
  },
];

export const PROJECT_DETAILS: IProjectDetails[] = [
  {
    id: 1,
    name: "TechStoreOnline",
    description:
      "TechStoreOnline is an e-commerce platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js).\nIt offers product filtering, robust search, and order tracking.\nIntegrated with Stripe for secure payments and PDF invoice downloads.\nFeatures authentication, responsive design, and optimized performance for a seamless shopping experience.",
    images: [
      storeProductDetails,
      store1,
      store2,
      store3,
      store4,
      store5,
      store6,
    ],
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Stripe",
      "jwt",
      "cookies",
      "Invoice",
      "Tailwind Css",
      "daisyUi",
      "Redux-toolkit",
      "RTK Query",
    ],
    github: "https://github.com/aliahmed338/Tech-Store-Online",
  },
  {
    id: 2,
    name: "TechBlog",
    description:
      "TechBlog is a blog platform built with Next.js for server-side rendering and SEO.\nAdmins can create and manage content, while users can read, comment, and share posts.\nIncludes a rich text editor, image uploads via Cloudinary, and category tagging.\nOffers responsive design, secure authentication, and search functionality.",
    images: [Blog, Blog2, Blog3, Blog4, Blog5, Blog6, Blog7],
    tech: [
      "Next.js",
      "Cloudinary",
      "Chadcn Ui",
      "Prisma Orm",
      "Tailwind Css",
      "Tip-Tap",
      "Neon DB",
    ],
    github: "https://github.com/aliahmed338/Blog",
    vercel: "https://blog-three-red-94.vercel.app/",
  },
  {
    id: 3,
    name: "EasyInvo",
    description:
      "EasyInvo is an invoicing app built with Next.js and Prisma for efficient database management.\nSupports full CRUD operations for invoices with Stripe for payments.\nUses Resend and React Email for automated invoice emails and reminders.\nFeatures secure authentication, PDF generation, and a responsive interface.",
    images: [EasyInvo],
    tech: ["Next.js", "Prisma", "Stripe", "Resend", "React Email"],
    vercel: "https://invoice-app-flax-seven.vercel.app/",
  },
  {
    id: 4,
    name: "Cloth-Store",
    description:
      "Exclusive is an e-commerce website built with React.js and Axios for API integration.\nOffers product browsing, shopping cart management, and secure checkout.\nIncludes responsive design, accessibility features, and performance optimizations.\nProvides a premium shopping experience with smooth navigation.",
    images: [Exclucive, store10, store11, store12, store13, store14],
    tech: [
      "React.js",
      "Axios",
      "Type script",
      "Yup",
      "useFormik",
      "Toaster",
      "tailwind css",
      "axios",
    ],
    github: "https://github.com/aliahmed338/cloth-store",
    vercel: "https://cloth-store-rose.vercel.app/",
  },
  {
    id: 5,
    name: "Note-App",
    description:
      "Note App is a simple note-taking tool built with React.js, Formik, and Yup.\nUsers can add, edit, and delete notes with local storage for persistence.\nFeatures search, categorization with tags, and a responsive interface.\nEnsures privacy with client-side data and keyboard shortcuts for efficiency.",
    images: [noteApp],
    tech: ["React.js", "Formik", "Yup"],
    vercel: "https://note-app-my-new-branch.vercel.app/login",
  },
  {
    id: 6,
    name: "Wordle",
    description:
      "Wordle is a word guessing game built with React and TypeScript.\nPlayers guess a five-letter word in six attempts with color-coded feedback.\nIncludes daily challenges, streak tracking, and shareable results.\nOffers responsive design, accessibility features, and victory animations.",
    images: [wordGame],
    tech: ["React", "TypeScript"],
    vercel: "https://word-game-weld.vercel.app/",
  },
  {
    id: 7,
    name: "Weather-App",
    description:
      "Weather App provides real-time forecasts using the OpenWeatherMap API.\nUsers can search cities, view detailed weather data, and get alerts.\nBuilt with React, it supports geolocation, theme switching, and offline caching.\nFully responsive with intuitive icons and unit conversions.",
    images: [WeatherApp],
    tech: ["React", "OpenWeatherMap API"],
    vercel: "https://weather-app-ochre-ten-44.vercel.app/",
    github: "https://github.com/aliahmed338/weather-app",
  },
  {
    id: 8,
    name: "My-Old-Portfolio",
    description:
      "My Old Portfolio is a personal showcase built with React and TypeScript.\nFeatures dark/light mode, smooth navigation, and animated sections.\nOptimized for SEO, responsive across devices, and includes analytics.\nIdeal for displaying projects, skills, and contact info.",
    images: [portoApp],
    tech: ["React", "TypeScript"],
    vercel: "https://portfolio-three-sandy-24.vercel.app/",
    github: "https://github.com/aliahmed200/portfolio",
  },
  {
    id: 9,
    name: "CYBORG",
    description:
      "CYBORG is a gaming platform built with React and TypeScript.\nIncludes game browsing, live streams, user profiles, and community forums.\nFeatures real-time updates, responsive design, and accessibility support.\nIdeal for gamers to connect, stream, and engage.",
    images: [cyborg],
    tech: ["React", "TypeScript"],
    vercel: "https://cyborg-six.vercel.app/",
    github: "https://github.com/aliahmed338/cyborg",
  },
];

export const SOCIAL_MEDIA: Isocialmedia[] = [
  {
    href: "https://www.facebook.com/profile.php?id=100069281631238",
    name: "facebook",
  },
  {
    href: "https://github.com/aliahmed338",
    name: "gitHub",
  },
  {
    href: "https://t.me/aliahmed_2000",
    name: "telegram",
  },
  {
    href: "mailto:alidev338@gmail.com",
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

export const WORDS = [
  "AGENT",
  "WORLD",
  "ABOUT",
  "HEART",
  "WATER",
  "SIXTY",
  "BOARD",
  "MONTH",
  "MUSIC",
  "PARTY",
  "PIANO",
  "MOUTH",
  "WOMAN",
  "SUGAR",
  "AMBER",
  "DREAM",
  "LAUGH",
  "TIGER",
  "EARTH",
  "MONEY",
  "WORDS",
  "SMILE",
  "LEMON",
  "SOUTH",
  "AFTER",
  "STONE",
  "THING",
  "LIGHT",
  "STORY",
  "POWER",
  "TODAY",
  "RANGE",
  "PEARL",
  "VENOM",
  "PROXY",
  "ROUND",
  "HOVER",
  "CANDY",
  "ABOVE",
  "PHONE",
  "OTHER",
  "SMART",
  "BLACK",
  "MAGIC",
  "FRUIT",
  "RADIO",
  "ROYAL",
  "HONEY",
  "FLAKE",
  "SOUND",
];
