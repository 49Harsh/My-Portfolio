import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import logo from "../image/logo.png"
import { useState } from "react";

const Collaboration = () => {
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (id) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <Section crosses className="overflow-hidden">
      <div className="container lg:flex items-start gap-10">
        <div className="max-w-[50rem] mx-auto lg:mx-0">
          <h2 className="h2 mb-6 md:mb-8 text-center lg:text-left">
            Technical Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collabContent.map((item) => (
              <div 
                key={item.id}
                className="relative group h-full"
              >
                {/* Card background with hover effect */}
                <div className="absolute -inset-2.5 bg-gradient-to-r from-color-1/50 to-color-2/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                
                <div className="relative p-6 bg-n-7 rounded-xl border border-n-6 hover:border-n-5 transition-colors duration-500 h-full flex flex-col">
                  {/* Category tag */}
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-n-8/80 rounded-full border border-n-6 backdrop-blur-xl">
                    <span className="text-xs font-mono text-color-1">{item.category}</span>
                  </div>

                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-n-6 rounded-xl border border-n-5">
                      <img src={item.icon} width={24} height={24} alt={item.title} />
                    </div>
                    <div>
                      <h6 className="text-base font-semibold text-color-1 mb-1">{item.title}</h6>
                      <div 
                        className="relative cursor-pointer"
                        onClick={() => toggleDescription(item.id)}
                      >
                        <p className={`text-xs text-n-3 ${!expandedDescriptions[item.id] ? 'line-clamp-2' : ''}`}>
                          {item.text}
                        </p>
                        {item.text.length > 80 && (
                          <button 
                            className="text-xs text-color-1 hover:text-color-2 transition-colors mt-1"
                          >
                            {expandedDescriptions[item.id] ? 'Show less' : 'See more'}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Skills list */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {item.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-n-6 rounded-full text-xs font-medium text-n-1 border border-n-5 hover:border-n-4 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-10 lg:mt-0">
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={logo}
                    width={48}
                    height={48}
                    alt="logo"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    } hover:scale-110 hover:bg-n-6 transition-all duration-300 group`}
                  >
                    <img
                      className="m-auto group-hover:scale-110 transition-transform duration-300"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
