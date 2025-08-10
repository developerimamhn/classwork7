"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import logo from './image/logo.png';
import righticon from './image/righticon.png';


const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false); // For background styling
    const [isVisible, setIsVisible] = useState(true); // For show/hide
    const [prevScrollPos, setPrevScrollPos] = useState(0); // Tracks scroll direction

    // Handle clicks outside to close the menu
    const handleClickOutside = (event) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
        ) {
            setToggle(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Smooth scroll to section
    const handleScroll = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 50,
                behavior: "smooth",
            });
            setToggle(false);
        }
    };

    // Scroll logic for show/hide and background change
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            // Update scrolled state for background styling
            if (currentScrollPos > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Show/hide navbar based on scroll direction
            if (currentScrollPos < 50) {
                setIsVisible(true); // Show near the top
            } else if (currentScrollPos > prevScrollPos) {
                setIsVisible(false); // Hide when scrolling down
            } else {
                setIsVisible(true); // Show when scrolling up
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    const handleScrollToTop   = (e, targetId) => {
        e.preventDefault();
        if (targetId === "") {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
      

    return (
        <div className={` header ${scrolled ? "scrolled" : " "} z-[150] w-full header backgronsdvg   ${
            isVisible ? "translate-y-0 transition-transform duration-300 " : "-translate-y-full transition-transform duration-300 "
        }`}>
            
            <header className='px-[24px]   flex  justify-between items-center py-[20px] sm:py-[24px] lg:py-[30px] relative  sm:overflow-hidden backgroundimage sm:px-[40px] md:px-[50px] lg:px-[70px] xl:px-[90px] 2xl:px-[100px] gap-[14px] md:gap-[16px] lg:gap-[18px] xl:gap-[20px] 2xl:gap-[22px]'>
            <dev className='linersext absolute bottom-0 left-0 w-full h-[2px] z-10'></dev>
            <Link onClick={(e) => handleScrollToTop(e, "")} href='/' className='cursor-pointer relative flex  items-center justify-start Froggo-Logo'>
                <Image className='w-full h-[14px] sm:h-[15px] 2xl:h-[16.7px]' src={logo} alt=''/></Link>
                <div className='sm:hidden relative top-[-11px] -left-6'>
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-white text-[24px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-white text-[24px] absolute' />
                    </div>
                </div>
                 

                <nav ref={menuRef} className={`navbar-items-main absolute  sm:left-0 sm:relative duration-1000 z-[99] sm:opacity-100 flex justif-start sm:justify-center items-start sm:items-center gap-[16px] sm:gap-[20px] md:gap-[24px] lg:gap-[32px] xl:gap-[36px] 2xl:gap-[40px] sm:blur-none blur-[200] sm:bg-transparent bg-[#15161B] right-0 sm:flex-row flex-col p-[20px] sm:p-[0] sm:w-fit w-full  sm:h-full pl-[24px] sm:pl-[32px] md:pl-[36px] lg:pl-[40px] xl:pl-[48px] 2xl:pl-[60px] ml-auto
                    ${toggle ? 'top-[67px] h-screen' :'-top-[500%]' }
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                    <a className="cursor-pointer Link-manu-bar" href="#Home" onClick={(e) => handleScroll(e, "Home")}>
                    Home</a>

                    <a className="cursor-pointer Link-manu-bar" href="#Features" onClick={(e) => handleScroll(e, "Features")}>
                    Features</a>

                    <a className="cursor-pointer Link-manu-bar" href="#Community" onClick={(e) => handleScroll(e, "Community")}>
                    Community</a>

                    <a className="cursor-pointer Link-manu-bar" href="#Blog" onClick={(e) => handleScroll(e, "Blog")}>
                    Blog</a>

                    <a className="cursor-pointer Link-manu-bar" href="#Pricing" onClick={(e) => handleScroll(e, "Pricing")}>
                    Pricing
                    </a>

                    <ul className='sm:hidden flex flex-col'>
                    <button
                        class="cursor-pointer buttonauditelt text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-[11.137px] flex items-center justify-centerpy-[7px] py-[9.5px] px-[14px] md:px-[16px] lg:px-[18px] xl:px-[20px] 2xl:px-[22px] rounded-[2.784px] group "
                        >
                        <div class="relative overflow-hidden">
                            <p
                            class="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] flex items-center justify-centerpy-[7px] gap-[7.50px]"
                            >
                            Register Now
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[10px]' viewBox="0 0 10 9" fill="none">
                            <path d="M5.36823 0.914551L8.79531 4.34163M8.79531 4.34163L5.36823 7.76872M8.79531 4.34163H0.570312" stroke="white" stroke-width="1.01833" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            </p>
                            <p
                            class="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] flex items-center justify-centerpy-[7px] gap-[7.50px]"
                            >
                            Register Now
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[10px]' viewBox="0 0 10 9" fill="none">
                            <path d="M5.36823 0.914551L8.79531 4.34163M8.79531 4.34163L5.36823 7.76872M8.79531 4.34163H0.570312" stroke="white" stroke-width="1.01833" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </p>
                        </div>
                        </button>
                    </ul>
                </nav>
                
                <ul className='sm:flex hidden ml-atuo'>
                    <button
                        class="cursor-pointer buttonauditelt text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-[11.137px] flex items-center justify-centerpy-[7px] py-[9.5px] px-[14px] md:px-[16px] lg:px-[18px] xl:px-[20px] 2xl:px-[22px] rounded-[2.784px] group "
                        >
                        <div class="relative overflow-hidden">
                            <p
                            class="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] flex items-center justify-centerpy-[7px] gap-[7.50px]"
                            >
                            Register Now
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[10px]' viewBox="0 0 10 9" fill="none">
                            <path d="M5.36823 0.914551L8.79531 4.34163M8.79531 4.34163L5.36823 7.76872M8.79531 4.34163H0.570312" stroke="white" stroke-width="1.01833" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            </p>
                            <p
                            class="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] flex items-center justify-centerpy-[7px] gap-[7.50px]"
                            >
                            Register Now
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[10px]' viewBox="0 0 10 9" fill="none">
                            <path d="M5.36823 0.914551L8.79531 4.34163M8.79531 4.34163L5.36823 7.76872M8.79531 4.34163H0.570312" stroke="white" stroke-width="1.01833" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </p>
                        </div>
                        </button>

                </ul>
                
                
            </header>
        </div>
    );
};

export default NavBar;