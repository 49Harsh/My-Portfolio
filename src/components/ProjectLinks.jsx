import React from 'react';

const ProjectLinks = ({ isOpen, onClose, links, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-gradient-to-b from-n-8/95 to-n-8/95 rounded-2xl p-8 w-full max-w-md border border-n-6/50 backdrop-blur-sm">
        {/* Background gradients */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        {/* Title with gradient */}
        <h3 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-200/90 to-slate-200/90">{title}</h3>
        
        {/* Links container */}
        <div className="flex flex-col gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-4 bg-n-7/50 rounded-xl hover:bg-n-6/50 transition-all duration-300 border border-n-6/50"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              {/* Link content */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-n-6 flex items-center justify-center border border-n-1/10">
                  {link.label.includes('Game') ? '🎮' : '🌐'}
                </div>
                <span className="text-sm font-semibold text-slate-200/90">{link.label}</span>
              </div>
              <span className="text-xs text-n-3 group-hover:text-color-1 transition-colors flex items-center gap-2">
                Visit
                <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M5 3l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </span>
            </a>
          ))}
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-n-7/50 border border-n-1/10 text-n-3 hover:text-color-1 transition-colors"
        >
          ✕
        </button>

        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
          <div className="absolute top-0 left-0 w-[1px] h-8 bg-gradient-to-b from-transparent via-n-1/15 to-transparent"></div>
          <div className="absolute top-0 left-0 w-8 h-[1px] bg-gradient-to-r from-transparent via-n-1/15 to-transparent"></div>
        </div>
        <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
          <div className="absolute top-0 right-0 w-[1px] h-8 bg-gradient-to-b from-transparent via-n-1/15 to-transparent"></div>
          <div className="absolute top-0 right-0 w-8 h-[1px] bg-gradient-to-l from-transparent via-n-1/15 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[1px] h-8 bg-gradient-to-t from-transparent via-n-1/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-8 h-[1px] bg-gradient-to-r from-transparent via-n-1/15 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-gradient-to-t from-transparent via-n-1/15 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-gradient-to-l from-transparent via-n-1/15 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLinks; 