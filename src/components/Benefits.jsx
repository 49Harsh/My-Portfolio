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

  const handleProjectClick = (project) => {
    if (project.links) {
      setSelectedProject(project);
    } else if (project.url) {
      window.open(project.url, '_blank');
    }
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
              <div
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] h-full group"
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                }}
              >
                <div className="relative z-2 flex flex-col h-full bg-gradient-to-b from-n-8/90 to-n-8/90 backdrop-blur-sm p-6 rounded-xl border border-n-6/50 transition-colors duration-300">
                  {/* Hover effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-n-6/50 to-n-6/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  
                  {/* Card content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={item.iconUrl}
                        width={32}
                        height={32}
                        alt={item.title}
                        className="rounded-full bg-n-7 p-1 ring-1 ring-n-1/10"
                      />
                      <h5 className="h5 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/90 to-slate-200/90">{item.title}</h5>
                    </div>
                    <p className="body-2 mb-4 text-sm text-n-3/90 flex-grow">{item.text}</p>
                    <div className="flex items-center mt-auto pt-4 border-t border-n-6">
                      <button 
                        onClick={() => handleProjectClick(item)}
                        className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider cursor-pointer hover:text-color-1 transition-colors flex items-center group/btn"
                      >
                        {item.links ? 'View Links' : 'View Project'}
                        <Arrow className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-n-1/15 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-1/3 h-[1px] bg-gradient-to-l from-transparent via-n-1/15 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-n-1/15 to-transparent"></div>
                    <div className="absolute bottom-0 right-0 w-1/3 h-[1px] bg-gradient-to-l from-transparent via-n-1/15 to-transparent"></div>
                  </div>
                </div>

                {item.light && <GradientLight />}

                <ClipPath />
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
