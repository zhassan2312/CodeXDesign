import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Link = ({ text, className, href, onClick, isNavbar }) => {
  const [hover, setHover] = useState(false);
  const underlineRef = useRef(null);
  const textFlipRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (underlineRef.current === null) return; // Ensure ref is properly assigned

    // Kill the existing timeline to prevent overlap
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

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
        { width: '100%', duration: 0.15, ease: 'power2.out' }
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
        { width: '100%', duration: 0.15, ease: 'power2.out' }
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
    if (hover && isNavbar) {
      gsap.to(textFlipRef.current, {
        y: -20,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
          gsap.fromTo(textFlipRef.current, {
            y: 20,
          }, {
            y: 0,
            duration: 0.4,
            ease: 'power2.out'
          });
        }
      });
    } else if (!hover && isNavbar) {
      gsap.to(textFlipRef.current, {
        y: 20,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
          gsap.fromTo(textFlipRef.current, {
            y: -20,
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
      className={`${className} relative overflow-hidden`}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}   // Hover in
      onMouseLeave={() => setHover(false)}  // Hover out
    >
      <span ref={textFlipRef} style={{ display: 'inline-block' }}>{text}</span>
      <span
        ref={underlineRef}
        className="absolute bottom-0 left-0 h-[2px] bg-white w-0"  // Initial style
        style={{ display: 'block', position: 'absolute', height: '2px', backgroundColor: 'white' }}
      ></span>
    </a>
  );
};

export default Link;