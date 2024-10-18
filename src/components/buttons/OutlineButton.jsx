import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { MdArrowOutward } from 'react-icons/md';

const OutlineButton = ({ text, className }) => {
  const [hover, setHover] = useState(false);
  const buttonRef = useRef(null);
  const iconRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (hover) {
      gsap.to(circleRef.current, {
        duration: 0.8,
        scaleY: 1,
        transformOrigin: 'bottom',
        ease: 'power4.out'
      });
      gsap.to(textRef.current, {
        color: 'white',
        duration: 0.8,
        ease: 'power4.out'
      });
    } else {
      gsap.to(circleRef.current, {
        duration: 0.8,
        scaleY: 0,
        transformOrigin: 'top',
        ease: 'power4.out'
      });
      gsap.to(textRef.current, {
        color: 'black',
        duration: 0.7,
        ease: 'power4.out'
      });
    }
  }, [hover]);

  const handleHover = (isHovering) => () => {
    setHover(isHovering);
    const buttonHeight = buttonRef.current.offsetHeight;
    if (isHovering) {
      gsap.to(buttonRef.current, {
        backgroundColor: 'black',
        color: 'white',
        duration: 0.4,
        ease: 'power2.out',
      });
      gsap.to(iconRef.current, {
        width: buttonHeight * 0.5,
        height: buttonHeight * 0.5,
        padding: buttonHeight * 0.125,
        backgroundColor: 'white',
        color: 'black',
        duration: 0.4,
        ease: 'power2.out',
      });
    } else {
      gsap.to(buttonRef.current, {
        backgroundColor: 'transparent',
        color: 'black',
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(iconRef.current, {
        width: buttonHeight * 0.1875,
        height: buttonHeight * 0.1875,
        padding: 0,
        backgroundColor: 'black',
        color: 'transparent',
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  return (
    <a
      href="#"
      ref={buttonRef}
      className={`${className} relative flex gap-5 items-center border-2 border-black text-black rounded-full justify-center overflow-hidden ${className}`}
      onMouseEnter={handleHover(true)}
      onMouseLeave={handleHover(false)}
    >
      <div 
        ref={circleRef}
        className="absolute inset-0 bg-black transform scale-y-0"
      ></div>
      <span ref={textRef} className="relative z-10 text-md lg:text-[1vw] text-black">{text}</span>
      <div ref={iconRef} className="btn__icon w-3 h-3 lg:w-[1vw] lg:h-[1vw]  bg-black rounded-full flex items-center justify-center absolute right-4 lg:right-[1vw]">
        <MdArrowOutward className={`w-5 h-5 lg:w-[2vw] lg:h-[2vw] ${hover ? 'text-black' : 'text-transparent'}`} />
      </div>
    </a>
  );
};

export default OutlineButton;