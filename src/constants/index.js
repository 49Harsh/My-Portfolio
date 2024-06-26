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
    url: "#Project",
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
    title: "Reactjs",
    text: collabText,
  },
  {
    id: "1",
    title: "Express.js",
  },
  {
    id: "2",
    title: "MongoDB",
  },
  {
    id: "3",
    title: "NodeJS",
  },
  {
    id: "4",
    title: "javaScript",
  },
  {
    id: "5",
    title: "Python",
  },
  {
    id: "6",
    title: "C++",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "docker",
    icon: Docker,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "mongodb",
    icon: mongodb,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "git",
    icon: git,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "javascript",
    icon: javascript,
    width: 34,
    height: 35,
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
    title: "nodejs",
    icon: nodejs,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "html",
    icon: html,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "react",
    icon: React,
    width: 38,
    height: 32,
  },
  {
    id: "8",
    title: "css",
    icon: css,
    width: 38,
    height: 32,
  },
  {
    id: "9",
    title: "redux",
    icon: redux,
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
    title: "E-Commerce website",
    text: "Foundation Setup, Features & Functionality, User Experience, Security Measures:HTTPS, Performance Optimization",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Flexbox property css game",
    text: "I have created a game through which people can learn the properties of flex CSS easily and in a fun way.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Blog-Website",
    text: "I have created a blog app where I fetch data from the backend using mongoDB , and I have added features like comments, delete, and likes",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Old car price prediction using machine learning in py",
    text: " accurately forecast car values using linear regression, Ridge regression for overfitting",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Work in progress",
    text: "Project",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Work in progress",
    text: "Project 2",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
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
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
