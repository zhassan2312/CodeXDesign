import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MiniButton = ({ text,className}) => {
  const [hover, setHover] = useState(false);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (hover) {
      gsap.to(circleRef.current, {
        duration: 0.7,
        scaleY: 1,
        transformOrigin: 'bottom',
        ease: 'power4.out'
      });
      gsap.to(textRef.current, {
        color: 'black',
        duration: 0.7,
        ease: 'power4.out'
      });
    } else {
      gsap.to(circleRef.current, {
        duration: 0.7,
        scaleY: 0,
        transformOrigin: 'top',
        ease: 'power4.out'
      });
      gsap.to(textRef.current, {
        color: 'white',
        duration: 0.7,
        ease: 'power4.out'
      });
    }
  }, [hover]);

  return (
    <div 
      className={`${className} relative border-[1px] lg:border-[0.1vw] border-white font-light uppercase rounded-full overflow-hidden`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div 
        ref={circleRef}
        className="absolute rounded-full inset-0 bg-white transform scale-y-0"
      ></div>
      <span ref={textRef} className="relative z-10 text-sm lg:text-[1vw]">{text}</span>
    </div>
  );
};

export default MiniButton;