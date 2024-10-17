import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { MdArrowOutward } from 'react-icons/md';

const OutlineButton = ({ text }) => {
  const [hover, setHover] = useState(false);
  const buttonRef = useRef(null);
  const iconRef = useRef(null);

  const handleHover = (isHovering) => () => {
    setHover(isHovering);
    if (isHovering) {
      gsap.to(buttonRef.current, {
        backgroundColor: 'black',
        color: 'white',
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(iconRef.current, {
        width: '2rem',
        height: '2rem',
        padding: '0.5rem',
        backgroundColor: 'white',
        color: 'black',
        duration: 0.3,
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
        width: '0.75rem',
        height: '0.75rem',
        padding: '0',
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
      className="flex gap-5 items-center pl-8 pr-16 py-4 border-2 border-black text-black rounded-full justify-center relative"
      onMouseEnter={handleHover(true)}
      onMouseLeave={handleHover(false)}
    >
      <span className='btn__text'>{text}</span>
      <div ref={iconRef} className="btn__icon w-3 h-3 bg-black rounded-full flex items-center justify-center absolute right-4">
        <MdArrowOutward className={`${hover ? 'text-black' : 'text-transparent'}`} />
      </div>
    </a>
  );
};

export default OutlineButton;