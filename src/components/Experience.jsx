import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "QuadB Tech",
    duration: "October 2024 - April 2025",
    responsibilities: [
      "Developing and maintaining web applications using React.js and Node.js",
      "Implementing responsive designs and ensuring cross-browser compatibility",
      "Working with REST APIs and database integration",
      "Collaborating with team members using version control (Git)",
      "Participating in code reviews and contributing to technical discussions"
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
          <div className="flex flex-col gap-8 max-w-[55rem] mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-blur backdrop-blur-[32px] rounded-[2rem] p-6 lg:p-10 border border-white/10"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                    <h3 className="h4 mb-2 text-white font-semibold">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-white/90">{exp.company}</span>
                      <span className="w-2 h-2 rounded-full bg-white/30"></span>
                      <span className="text-white/70">{exp.duration}</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="text-white/80 leading-relaxed">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience; 