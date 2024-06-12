import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Typewriter = () => {
  return (
    <TypeAnimation className="w-full sm:w-3/4 md:max-w-md lg:max-w-2xl"
      sequence={[
        'Here are some of my projects:',
        1000,
        'MERN stack development',
        1000,
        'Python with pandas and matplotlib',
        1000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block', height: '20vh' ,width: 'auto'}}
    />
  );
};

export default Typewriter;
