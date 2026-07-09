import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Mobile Application Developer",
    company: "Milan Manch",
    duration: "Sep 2025 – Feb 2026",
    responsibilities: [
      "Engineered a geo-intelligent vendor discovery system connecting customers across small towns and cities to the nearest vendors, filtered by proximity, ratings, and pricing.",
      "Built a real-time location-based ranking algorithm surfacing the most relevant vendor profiles by distance, user ratings, and competitive pricing tiers.",
      "Developed end-to-end client-vendor flow including vendor onboarding, product listing, and a customer-facing comparison interface.",
      "Implemented Redux state management for seamless cross-platform data sync across iOS and Android under low-network conditions common in Tier-2/3 cities."
    ]
  },
  {
    title: "React Native & Full Stack Developer",
    company: "Vedaz.io",
    duration: "Apr 2025 – Sep 2025",
    responsibilities: [
      "Architected and deployed live streaming platform using Agora SDK for real-time video communication, serving 10,000+ concurrent users with minimal latency.",
      "Built scalable RESTful APIs with Node.js and Express.js handling authentication, user management, and stream data processing.",
      "Implemented real-time chat via WebSocket and Socket.io; integrated Remix.js improving page load time by 35% through server-side rendering.",
      "Published production-ready mobile app on Google Play Store achieving 50,000+ downloads with a 4.2+ star rating."
    ]
  },
  {
    title: "Full Stack Developer Intern",
    company: "QuadB Tech",
    duration: "Oct 2024 – Apr 2025",
    responsibilities: [
      "Delivered 5+ production features using React.js and Node.js with JWT authentication and role-based access control, improving application security and UX.",
      "Optimized MongoDB and PostgreSQL queries through indexing and query restructuring, reducing API response time by 40%."
    ]
  },
  {
    title: "Network Engineering Intern",
    company: "Altire University",
    duration: "2024 (1 month)",
    responsibilities: [
      "Assisting in network infrastructure maintenance and troubleshooting",
      "Supporting the implementation of network security protocols",
      "Documenting network configurations and procedures",
      "Learning about network monitoring and optimization",
      "Gaining hands-on experience with networking equipment"
    ]
  }
];

const Experience = () => {
  return (
    <Section
      className="relative overflow-hidden"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="experience"
    >
      <div className="container relative z-2">
        <div className="relative">
          <div className="text-center max-w-[50rem] mx-auto mb-12 lg:mb-20">
            <h2 className="h2 mb-6 text-white">Professional Experience</h2>
            <p className="body-2 text-white/80">
              My journey in tech through valuable internships and hands-on experience
            </p>
          </div>

          <div className="relative max-w-[64rem] mx-auto">
            {/* Center timeline line */}
            <div
              className="absolute top-0 bottom-0 left-[1.1rem] md:left-1/2 w-px bg-gradient-to-b from-white/0 via-white/20 to-white/0 md:-translate-x-1/2"
              aria-hidden="true"
            ></div>

            <div className="flex flex-col gap-10 md:gap-4">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className="relative md:grid md:grid-cols-2 md:gap-x-10"
                  >
                    {/* Timeline dot */}
                    <span
                      className="absolute left-[1.1rem] md:left-1/2 top-1.5 w-3 h-3 -translate-x-1/2 rounded-full bg-white border-2 border-[#0e0c15] z-10"
                      aria-hidden="true"
                    ></span>

                    {/* Spacer for the opposite column on desktop */}
                    {!isLeft && <div className="hidden md:block" />}

                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                      className={`relative
                        pl-10 md:pl-8
                        ${isLeft ? "md:text-right md:col-start-1" : "md:col-start-2"}`}
                    >
                      <div className="glow-card card-blur backdrop-blur-[32px] rounded-[1.5rem] p-6 lg:p-8 border border-white/10 relative z-[1]">
                        <div className={`flex flex-col gap-2 mb-4 ${isLeft ? "md:items-end" : "md:items-start"}`}>
                          <span className="text-white/50 text-sm tracking-wide uppercase">
                            {exp.duration}
                          </span>
                          <h3 className="h4 text-white font-semibold">
                            {exp.title}
                          </h3>
                          <span className="text-white/70">{exp.company}</span>
                        </div>
                        <ul className={`space-y-2 ${isLeft ? "md:text-right" : ""}`}>
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="text-white/80 leading-relaxed text-sm">
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>

                    {isLeft && <div className="hidden md:block" />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @property --glow-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        .glow-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: conic-gradient(
            from var(--glow-angle),
            transparent 0deg,
            transparent 270deg,
            #f97316 300deg,
            #ec4899 320deg,
            #8b5cf6 340deg,
            #22d3ee 355deg,
            transparent 360deg
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: glow-rotate 4s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes glow-rotate {
          to {
            --glow-angle: 360deg;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .glow-card::before {
            animation: none;
          }
        }
      `}</style>
    </Section>
  );
};

export default Experience;