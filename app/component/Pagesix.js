'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import imageone from './image/image4.png';
import imagetwo from './image/image5 (2).png';
import imagethre from './image/image5.png';

gsap.registerPlugin(ScrollTrigger);



const Pagesix = () => {

  const wrapperRef = useRef(null); // Outer container
  const titleRef = useRef(null); // "Core Products" title (if needed)
  const acquireRef = useRef(null); // "Acquire CRX" section (if needed)
  const cardRefs = useRef([]); // Refs for mapped cards

  useEffect(() => {
    // GSAP context for proper scoping and cleanup
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 768px)',
          isMobile: '(max-width: 767px)',
        },
        (context) => {
          const { isMobile } = context.conditions;

          // Main wrapper animation
          gsap.fromTo(
            wrapperRef.current,
            { y: isMobile ? 50 : 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: isMobile ? 1 : 1.5,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: wrapperRef.current,
                start: isMobile ? 'top 90%' : 'top 80%',
                end: 'bottom 20%',
                scrub: 0.8,
              },
            }
          );

          // Title animation (if used, currently no title in JSX)
          if (titleRef.current) {
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
          }

          // Card animations with stagger
          cardRefs.current.forEach((card, index) => {
            if (!card) return;
            gsap.fromTo(
              card,
              { y: 50, opacity: 0, scale: 0.9 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                delay: index * 0.25, // Stagger effect
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 80%',
                  end: 'top 30%',
                  scrub: 0.8,
                },
              }
            );
          });

          // Acquire CRX section animation (if used, currently no section in JSX)
          if (acquireRef.current) {
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
        }
      );
    }, wrapperRef); // Scope to wrapperRef for React strict mode

    return () => ctx.revert(); // Cleanup
  }, []);

    return (
        <div className='sm:pt-0  container mx-auto px-6 sm:px-0' id='Roadmap'>
            <h2 className='lessioneight text-[16px] md:text-[20px] lg:text-[25px] text-center'>Caring is the new marketing</h2>
            <p className='wehavebeen text-[#18191F] pt-[5px] sm:px-[25%]'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who&apos;s joining the community, read about how our community are increasing their membership income and lot&apos;s more.</p>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-[16.7px] pt-[11.33px] px-[20px] sm:px-[28px]'>
              <div className='group'>
                <div className=''>
                  <Image className='w-full group-hover:grayscale duraction-500'  src={imageone} alt='Loading ...'/>
                </div>
                  <div className='fiixngagea mx-[20px] sm:mx-[28px] p-[11.32px] flex items-center justify-center gap-[16px] flex-col group-hover:-mt-10 duration-500 -mt-8 z-20 relative'>
                    <h2 className='lessioneight text-[] sm:text-[11px] lg:text-[12px] xl:text-[13.921px] text-center !font-semibold !text-[#717171]'>Creating Streamlined <br className='sm:block hidden'/> Safeguarding Processes with <br className='sm:block hidden'/> OneRen</h2>
                    <div className='wehavebeenthesaas flex items-center gap-[5px] cursor-pointer'>Readmore
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.0757 11.866L14.3678 9.5739C14.6396 9.30207 14.6396 8.86134 14.3678 8.58951L12.0757 6.29742M14.1639 9.0817L4.41895 9.0817" stroke="#4CAF4F" stroke-width="1.0441" stroke-linecap="round"/>
                      </svg>
                    </div>
                  </div>
              </div>
              <div className='group'>
                <Image className='w-full group-hover:grayscale duraction-500' src={imagetwo} alt='Loading ...'/>
                <div className='fiixngagea mx-[20px] sm:mx-[28px] p-[11.32px] flex items-center justify-center gap-[16px] flex-col group-hover:-mt-10 duration-500 -mt-8 z-20 relative'>
                  <h2 className='lessioneight text-[] sm:text-[11px] lg:text-[12px] xl:text-[13.921px] text-center !font-semibold !text-[#717171]'>What are your safeguarding <br className='sm:block hidden'/> responsibilities and how can <br className='sm:block hidden'/> you manage them?</h2>
                  <div className='wehavebeenthesaas flex items-center gap-[5px] cursor-pointer'>Readmore
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0757 11.866L14.3678 9.5739C14.6396 9.30207 14.6396 8.86134 14.3678 8.58951L12.0757 6.29742M14.1639 9.0817L4.41895 9.0817" stroke="#4CAF4F" stroke-width="1.0441" stroke-linecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className='group'>
                <Image className='w-full group-hover:grayscale duraction-500' src={imagethre} alt='Loading ...'/>
                <div className='fiixngagea mx-[20px] sm:mx-[28px] p-[11.32px] flex items-center justify-center gap-[16px] flex-col group-hover:-mt-10 duration-500 -mt-8 z-20 relative'>
                  <h2 className='lessioneight text-[] sm:text-[11px] lg:text-[12px] xl:text-[13.921px] text-center !font-semibold !text-[#717171]'>Revamping the Membership <br className='sm:block hidden'/> Model with Triathlon <br className='sm:block hidden'/> Australia</h2>
                  <div className='wehavebeenthesaas flex items-center gap-[5px] cursor-pointer'>Readmore
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0757 11.866L14.3678 9.5739C14.6396 9.30207 14.6396 8.86134 14.3678 8.58951L12.0757 6.29742M14.1639 9.0817L4.41895 9.0817" stroke="#4CAF4F" stroke-width="1.0441" stroke-linecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Pagesix;