import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Typewriter = () => {
  return (
    <TypeAnimation
      className="text-2xl md:text-3xl font-bold text-center"
      sequence={[
        'Featured Projects',
        1000,
        'Recent Work',
        1000,
        'Portfolio Highlights',
        1000,
      ]}
      wrapper="h2"
      cursor={true}
      repeat={Infinity}
      style={{ 
        display: 'block',
        marginBottom: '1rem',
        background: 'linear-gradient(to right, #fff, #a5a5a5)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}
    />
  );
};

export default Typewriter;
