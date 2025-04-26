import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

import React from "../image/technology/reactjs.png";
import git from "../image/technology/git.png";
import javascript from "../image/technology/javascript.png";
import css from "../image/technology/css.png";
import tailwind from "../image/technology/tailwind.png";
import Docker from "../image/technology/docker.png";
import mongodb from "../image/technology/mongodb.png";
import nodejs from "../image/technology/nodejs.png";
import html from "../image/technology/html.png";
import redux from "../image/technology/redux.png";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "Project",
    url: "#project",
  },
  {
    id: "2",
    title: "Skills",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Contact-Us",
    url: "#contact-us",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "";

export const collabContent = [
  {
    id: "0",
    category: "Programming",
    title: "Languages & Core",
    skills: ["JavaScript", "TypeScript", "Python", "C++"],
    icon: javascript,
    text: "Strong foundation in multiple programming paradigms"
  },
  {
    id: "1",
    category: "Frontend",
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind", "Bootstrap"],
    icon: React,
    text: "Modern web development with responsive design"
  },
  {
    id: "2",
    category: "Animation",
    title: "Motion & Graphics",
    skills: ["Framer Motion", "GSAP", "Chart.js", "D3.js"],
    icon: framer,
    text: "Creating engaging user experiences with animations"
  },
  {
    id: "3",
    category: "Backend",
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "RESTful APIs", "WebSocket"],
    icon: nodejs,
    text: "Scalable server-side solutions and API development"
  },
  {
    id: "4",
    category: "State",
    title: "State Management",
    skills: ["Redux Toolkit", "Context API", "Zustand"],
    icon: redux,
    text: "Efficient state management for complex applications"
  },
  {
    id: "5",
    category: "Database",
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
    icon: mongodb,
    text: "Working with both SQL and NoSQL databases"
  },
  {
    id: "6",
    category: "DevOps",
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "Kubernetes", "CI/CD"],
    icon: Docker,
    text: "Modern deployment and development workflows"
  },
  {
    id: "7",
    category: "Learning",
    title: "Currently Learning",
    skills: ["Next.js (Advanced)", "React Native", "Kubernetes"],
    icon: plusSquare,
    text: "Continuously expanding technical knowledge"
  }
];

export const collabApps = [
  {
    id: "0",
    title: "typescript",
    icon: javascript,
    width: 34,
    height: 35,
  },
  {
    id: "1",
    title: "react",
    icon: React,
    width: 38,
    height: 32,
  },
  {
    id: "2",
    title: "nodejs",
    icon: nodejs,
    width: 34,
    height: 34,
  },
  {
    id: "3",
    title: "mongodb",
    icon: mongodb,
    width: 34,
    height: 36,
  },
  {
    id: "4",
    title: "tailwind",
    icon: tailwind,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "redux",
    icon: redux,
    width: 38,
    height: 32,
  },
  {
    id: "6",
    title: "docker",
    icon: Docker,
    width: 26,
    height: 36,
  },
  {
    id: "7",
    title: "git",
    icon: git,
    width: 36,
    height: 28,
  },
  {
    id: "8",
    title: "html",
    icon: html,
    width: 26,
    height: 34,
  },
  {
    id: "9",
    title: "css",
    icon: css,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "RunMarine Services",
    text: "Job portal platform with resume uploads, secure authentication (JWT), admin dashboard for applicant tracking, and GSAP animations. Built with React.js, Tailwind CSS, Node.js, Express.js.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
    url: "https://runmarine-services.com/",
  },
  {
    id: "1",
    title: "Interactive Frontend Project",
    text: "Modern UI with Next.js, TypeScript, and Shadcn. Features responsive design, component-based architecture, and scroll-triggered animations using Framer Motion.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    url: "#",
  },
  {
    id: "2",
    title: "Car Price Prediction System",
    text: "Machine learning model with 85% prediction accuracy using Random Forest and Gradient Boosting algorithms. Built with Python and Tkinter GUI.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    url: "#",
  },
  {
    id: "3",
    title: "E-Commerce Admin Panel OWR-ECOM",
    text: "Comprehensive product management system with analytics dashboard, dynamic theming, and real-time customer communication. Built with React.js, Node.js, PostgreSQL.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    url: "https://owrbackend.quadbtech.com/admin",
  },
  {
    id: "4",
    title: "Stardust Adventure",
    text: "Gaming platform with pixel-style UI using pure CSS and engaging GSAP animations. Built with React.js and TypeScript.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    links: [
      {
        label: "Landing Page",
        url: "https://j3kgd-tqaaa-aaaao-a3tia-cai.icp0.io/",
      },
      {
        label: "Play Game",
        url: "https://wxryv-nqaaa-aaaao-a3w7q-cai.icp0.io/",
      },
    ],
  },
  {
    id: "5",
    title: "SipnPlay",
    text: "Web3 gaming platform with interactive carousels and Unity integration. Built with React.js, TypeScript, and Framer Motion.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    links: [
      {
        label: "Landing Page",
        url: "https://sipnplay.io/",
      },
      {
        label: "Play Game",
        url: "https://play.sipnplay.io/",
      },
    ],
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  }
];
