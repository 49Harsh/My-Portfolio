import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import logo from '../image/logo.png'

import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import ContactPopup from "./ContactPopup";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    setOpenNavigation(false);
    enablePageScroll();
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Adjust this value to control the scroll position
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
          openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <div className="grid grid-cols-2">
            <a className="block w-[80px] xl:mr-8 flex-col items-end" href="#hero">
              <img src={logo} width={60} height={20} alt="Logo" />  
            </a>
            <div className='flex items-center'>Harsh | Portfolio</div>
            
          </div>

          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={(e) => handleClick(e, item.url.substring(1))}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === "#contact-us" ? "lg:hidden" : ""
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </div>

            <HamburgerMenu />
          </nav>

          <div className="flex items-center justify-end flex-grow basis-0">
            <button
              className="hidden lg:flex text-xs font-code font-bold uppercase text-n-1 px-4 py-2 border border-n-6 hover:bg-n-6 transition-colors rounded-xl"
              onClick={() => setShowContactPopup(true)}
            >
              Contact Info
            </button>

            <button
              className="ml-6 lg:hidden"
              onClick={toggleNavigation}
            >
              <MenuSvg openNavigation={openNavigation} />
            </button>
          </div>
        </div>
      </div>

      <ContactPopup 
        isOpen={showContactPopup} 
        onClose={() => setShowContactPopup(false)} 
      />
    </>
  );
};

export default Header;