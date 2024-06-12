import Section from "./Section";
import Heading from "./Heading";
import { service1} from "../assets";
import Tilt from "react-parallax-tilt";
import Button from "./Button";

import {

  Gradient,

} from "./design/Services";


import myimg from '../image/myimages.png'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Services = () => {






  // email logic
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8uisjim', 'template_94an65q', form.current, {
        publicKey: '4jJmrFneYWrBw75Y7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Massege sent")
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("error")
        },
      )
    }




  return (
   

    <Section id="how-to-use">
      <div className="container mx-auto px-4">
    <Heading
      title="If you have any kind of query, you can email me. Thank you.'"
      text="------------------------------------------------------------"
    />

    <div className="relative">
    
      <div className="relative z-1 flex flex-col lg:flex-row items-center h-auto lg:h-[39rem] mb-5 p-4 lg:p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">

      {/* bg image */}
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
          <img
            className="w-full h-full object-cover md:object-right blur-3xl"
            width={800}
            alt="jhonDon"
            height={730}
            src={service1}
          />
        </div>

        <div className="relative z-10 w-full lg:w-1/2 p-4 lg:p-8">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <label className="">Name</label>
            <input type="text" name="user_name" className="bg-[#5eead4] border border-n-1/10 rounded-3xl bg-opacity-10 px-3 py-2" />
            <label className="">Email</label>
            <input type="email" name="user_email" className="bg-[#5eead4] border border-n-1/10 rounded-3xl bg-opacity-10 px-3 py-2" />
            <label className="">Message</label>
            <textarea name="message" className="bg-[#5eead4] border border-n-1/10 rounded-3xl bg-opacity-10 px-3 py-2 h-32" />
            
            <Button type="submit" value="Send" className=" w-[90px] mx-auto mt-4" href="#login">
            <input type="submit" value="Send" className=" w-full h-full "   />
            </Button>
          </form>
        </div>

        <div className="relative z-10 w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <Tilt>
            <div className="rounded-full">
              <img src={myimg} className="rounded-full drop-shadow-md" />
            </div>
          </Tilt>
        </div>
      </div>
      <Gradient />
    </div>
  </div>
</Section>

  );
};

export default Services;
