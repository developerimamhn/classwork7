'use client';


import React, { useEffect, useRef  } from 'react';
// import Image from 'next/image';
// import image9 from './image/image9.png';
// import imagefromleft from './image/imagefromleft.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Pageeight = () => {
    const svgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      svgRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: svgRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);


  // const [hasGradientBorder, setHasGradientBorder] = useState(false);
  // const inputRef = useRef(null);

  // const toggleGradientBorder = () => {
  //   setHasGradientBorder(!hasGradientBorder);
  //   inputRef.current.focus();
  // };



  
    return (
        <div className='relative py-[22px] my-[33px] bg-[#F5F7FA] sm:px-[10%]'>
          <div className='container mx-auto px-6 sm:px-0 flex items-center jusitfy-center flex-col'>
            <h2 className='pellectionasdfgaws text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44.5px]'>Pellentesque suscipit <br/> fringilla libero eu.</h2>
            <button
              class="cursor-pointer buttonauditelt text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-[11.137px] flex items-center justify-centerpy-[7px] py-[8px] px-[14px] md:px-[16px] lg:px-[18px] xl:px-[20px] 2xl:px-[22px] rounded-[2.784px] group mt-[16px] lg:mt-[22px]"
              >
              <div class="relative overflow-hidden">
                  <p
                  class="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] flex items-center justify-centerpy-[7px] gap-[5.50px]"
                  >
                  Get a Demo
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.71576 7.75015L10.4349 6.03105C10.6387 5.82717 10.6387 5.49661 10.4349 5.29273L8.71576 3.57363M10.282 5.66189L2.625 5.66189" stroke="white" stroke-width="0.765676" stroke-linecap="round"/>
                  </svg>
                  </p>
                  <p
                  class="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] flex items-center justify-centerpy-[7px] gap-[5.50px]"
                  >
                  Get a Demo
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.71576 7.75015L10.4349 6.03105C10.6387 5.82717 10.6387 5.49661 10.4349 5.29273L8.71576 3.57363M10.282 5.66189L2.625 5.66189" stroke="white" stroke-width="0.765676" stroke-linecap="round"/>
                  </svg>
                  </p>
              </div>
              </button>
          </div>
        </div>
    );
};

export default Pageeight;