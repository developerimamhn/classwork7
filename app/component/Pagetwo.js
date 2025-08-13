'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import smslide1 from './image/Frame 35.png';
// import backgrundtexxt from './image/backgrundtexxt.png';


gsap.registerPlugin(ScrollTrigger);

const Pagetwo = () => {
  const wrapperRef = useRef(null);
  const gridItem1Ref = useRef(null);
  const gridItem2Ref = useRef(null);
  const gridItem3Ref = useRef(null);
  const titleRef = useRef(null);
  const acquireRef = useRef(null);
  
  useEffect(() => {
    const mm = gsap.matchMedia();
  
    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;
  
        // Skip all animations on mobile
        if (isMobile) return;
  
        // Main wrapper animation (desktop only)
        gsap.fromTo(
          wrapperRef.current,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: 'top 80%',
              end: 'top 20%',
              scrub: 0.8,
            },
          }
        );
  
        // Title animation (desktop only)
        gsap.fromTo(
          titleRef.current,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
              end: 'top 50%',
              scrub: 0.8,
            },
          }
        );
  
        // Grid items animation (desktop only)
        [gridItem1Ref, gridItem2Ref, gridItem3Ref].forEach((ref, index) => {
          gsap.fromTo(
            ref.current,
            { y: 50, opacity: 0, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              delay: index * 0.25,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 80%',
                end: 'top 30%',
                scrub: 0.8,
              },
            }
          );
        });
  
        // Acquire CRX section animation (desktop only)
        gsap.fromTo(
          acquireRef.current,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: acquireRef.current,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 0.8,
            },
          }
        );
      }
    );
  
    return () => mm.revert(); // Cleanup
  }, []);
  
  const itemRefs = useRef([]);
  
  useEffect(() => {
    const mm = gsap.matchMedia();
  
    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isMobile } = context.conditions;
  
        // Skip animations on mobile
        if (isMobile) return;
  
        // Item animations (desktop only)
        itemRefs.current.forEach((el, index) => {
          if (!el) return;
  
          gsap.fromTo(
            el,
            {
              autoAlpha: 0,
              y: 50,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 100%',
                toggleActions: 'play none none none',
              },
              delay: index * 0.1,
            }
          );
        });
      }
    );
  
    return () => mm.revert(); // Cleanup
  }, []);


    
    return (
        <div ref={wrapperRef} id='Devolopers'  className='py-[24px] sm:py-[32px] md:py-[36px] lg:py-[40px] xl:py-[48px] 2xl:py-[69px] px-6 sm:px-0 relative container mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-9 justify-between items-center'>
            <div className='col-span-4'>
              <Image src={smslide1} alt=''/>
            </div>
            <div className='col-span-5'>
              <h3 className='colientslist !text-left !text-[25.059px]'>The unseen of spending three <br className='sm:block hidden'/> years at Pixelgrade</h3>
              <p className='wehavebeen pt-[11px] !text-left !text-[9.745px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
              <button
                className="cursor-pointer buttonauditelt text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-[11.137px] flex items-center justify-centerpy-[7px] py-[8px] px-[14px] md:px-[16px] lg:px-[18px] xl:px-[20px] 2xl:px-[22px] rounded-[2.784px] group mt-[16px] lg:mt-[22px]"
                >
                <div className="relative overflow-hidden">
                    <p
                    className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] flex items-center justify-centerpy-[7px] gap-[7.50px]"
                    >
                    Learn More
                    </p>
                    <p
                    className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] flex items-center justify-centerpy-[7px] gap-[7.50px]"
                    >
                    Learn More
                    </p>
                </div>
              </button>
            </div>
          </div>
        </div>
    );
};

export default Pagetwo;