import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Link = ({ isBlack, text, className, href, onClick, isNavbar }) => {
  const [hover, setHover] = useState(false);
  const underlineRef = useRef(null);
  const textFlipRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (underlineRef.current === null || textFlipRef.current === null) return; // Ensure refs are properly assigned

    // Kill the existing timeline to prevent overlap
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const textWidth = textFlipRef.current.offsetWidth; // Get the width of the text element

    if (hover) {
      // Create a new timeline for the hover effect
      const tl = gsap.timeline();

      // Step 1: Line shrinks and moves towards the right (like mouse leave)
      tl.to(underlineRef.current, { 
        width: '0%', 
        left: '100%', 
        duration: 0.15, 
        ease: 'power2.in' 
      })
      // Step 2: Line reappears from the left and grows to 100%
      .fromTo(
        underlineRef.current, 
        { width: '0%', left: '0%' }, 
        { width: `${textWidth}px`, duration: 0.15, ease: 'power2.out' }
      )
      .to(
        underlineRef.current, 
        { 
            width: '0%',
            left:'100%', 
            duration: 0.4, 
            ease: 'power2.in' }
      )
      .to(
        underlineRef.current, 
        { 
            width: '0%',
            left:'0%', 
            duration: 0.25, 
            ease: 'power2.out' }
      )
      .fromTo(
        underlineRef.current, 
        { width: '0%', left: '0%' }, 
        { width: `${textWidth}px`, duration: 0.15, ease: 'power2.out' }
      );

      timelineRef.current = tl;
    } else {
      // Create a new timeline for the mouse leave effect (disappear to the right)
      const tl = gsap.timeline();
      tl.to(underlineRef.current, {
        width: '0%', 
        left: '100%', 
        duration: 0.15, 
        ease: 'power2.in', 
        onComplete: () => {
          // Reset underline position to left for the next hover
          gsap.set(underlineRef.current, { left: '0%' });
        },
      });

      timelineRef.current = tl;
    }
  }, [hover]); // Trigger useEffect only when hover state changes

  useEffect(() => {
    const flipDistance = window.innerWidth >= 1920 ? 40 : 20; // Adjust flip distance for larger screens

    if (hover && isNavbar) {
      gsap.to(textFlipRef.current, {
        y: -flipDistance,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
          gsap.fromTo(textFlipRef.current, {
            y: flipDistance,
          }, {
            y: 0,
            duration: 0.4,
            ease: 'power2.out'
          });
        }
      });
    } else if (!hover && isNavbar) {
      gsap.to(textFlipRef.current, {
        y: flipDistance,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
          gsap.fromTo(textFlipRef.current, {
            y: -flipDistance,
          }, {
            y: 0,
            duration: 0.4,
            ease: 'power2.out'
          });
        }
      });
    }
  }, [hover, isNavbar]);

  return (
    <a
      href={href}
      className={`${className} cursor-pointer relative leading-none text-md lg:text-[1vw] xl:text-[1vw] overflow-hidden`}  // Base styles
      onClick={onClick}
      onMouseEnter={() => setHover(true)}   // Hover in
      onMouseLeave={() => setHover(false)}  // Hover out
    >
      <span ref={textFlipRef} className='leading-none pb-[0.5vw] lg:pb-[0.2vw] inline-block'>{text}</span>
      <span
        ref={underlineRef}
        className={`absolute bottom-0 left-0 h-[2px] ${isBlack ? 'bg-black' : 'bg-white'} w-0`}  // Initial style
      ></span>
    </a>
  );
};

export default Link;