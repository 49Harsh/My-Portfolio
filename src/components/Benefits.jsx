import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Tilt from "react-parallax-tilt";
import Typewriter from "./Typewriter";
import ProjectLinks from "./ProjectLinks";
import { useState } from "react";

const Benefits = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const handleProjectClick = (project) => {
    if (project.links) {
      setSelectedProject(project);
    } else if (project.url) {
      window.open(project.url, '_blank');
    }
  };

  const toggleDescription = (id, e) => {
    e.stopPropagation(); // Prevent triggering card click
    setExpandedDescriptions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <Section id="features" className="py-10">
      <div className="container relative z-2">
        {/* <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Here I have mentioned some of my projects"
        /> */}

        <div className="md:max-w-md lg:max-w-2xl mx-auto mb-8">
          <Typewriter />
        </div>
      
          
       
        

        {/* Creative background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-gradient-to-r from-fuchsia-500/20 to-rose-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {benefits.map((item) => (
            <Tilt key={item.id} tiltMaxAngleX={5} tiltMaxAngleY={5}>
              <div className="relative group">
                {/* Animated border with breathing effect only on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-500 rounded-xl opacity-20 blur transition-all duration-500 group-hover:animate-breathing"></div>
                
                {/* Main card content */}
                <div className="relative flex flex-col min-h-[18rem] bg-n-8/90 backdrop-blur-sm p-5 rounded-xl border border-n-6/50 transition-all duration-500">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative">
                        {/* Icon glow effect only on hover */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur-md transition-all duration-500"></div>
                        <img
                          src={item.iconUrl}
                          width={28}
                          height={28}
                          alt={item.title}
                          className="relative rounded-full bg-n-7 p-1 ring-1 ring-n-1/10"
                        />
                      </div>
                      <h5 className="h5 text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/90 via-cyan-200/90 to-slate-200/90">{item.title}</h5>
                    </div>
                    <div className="min-h-[6rem]">
                      <p className={`body-2 text-sm text-n-3/90 ${!expandedDescriptions[item.id] ? 'line-clamp-3' : ''}`}>
                        {item.text}
                      </p>
                      {item.text.length > 120 && (
                        <button 
                          onClick={(e) => toggleDescription(item.id, e)}
                          className="mt-1 text-xs font-bold text-color-1 hover:text-color-2 transition-colors"
                        >
                          {expandedDescriptions[item.id] ? 'Show less' : 'See more'}
                        </button>
                      )}
                    </div>
                    <div className="flex items-center mt-3 pt-3 border-t border-n-6">
                      <button 
                        onClick={() => handleProjectClick(item)}
                        className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider cursor-pointer hover:text-color-1 transition-colors flex items-center group/btn"
                      >
                        {item.links ? 'View Links' : 'View Project'}
                        <Arrow className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>

                  {/* Decorative corners - only visible on hover */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-1/3 h-[1px] bg-gradient-to-l from-transparent via-purple-500/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"></div>
                    <div className="absolute bottom-0 right-0 w-1/3 h-[1px] bg-gradient-to-l from-transparent via-cyan-500/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>

      <ProjectLinks
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        links={selectedProject?.links || []}
      />
    </Section>
  );
};

export default Benefits;
