import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { MdArrowOutward } from 'react-icons/md';

const Button = ({ text, isWhite }) => {
  const [hover, setHover] = useState(false);
  const buttonRef = useRef(null);
  const iconRef = useRef(null);

  const handleHover = (isHovering) => () => {
    setHover(isHovering);
    if (isHovering) {
      gsap.to(buttonRef.current, {
        backgroundPosition: '0% 0%',
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(iconRef.current, {
        width: '2rem',
        height: '2rem',
        padding: '0.5rem',
        backgroundColor: isWhite ? 'black' : 'white',
        color: isWhite ? 'white' : 'black',
        duration: 0.3,
        ease: 'power2.out',
      });
    } else {
      gsap.to(buttonRef.current, {
        backgroundPosition: '0% 100%',
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(iconRef.current, {
        width: '0.75rem',
        height: '0.75rem',
        padding: '0',
        backgroundColor: isWhite ? 'black' : 'white',
        color: 'transparent',
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  return (
    <a
      href="mailto:zhassan2312@gmail.com"
      ref={buttonRef}
      className={`flex gap-5 items-center pl-8 pr-16 py-4 ${isWhite ? 'bg-white text-zinc-900' : 'bg-zinc-900 text-white bg-gradient-to-t from-zinc-900 to-zinc-700'} rounded-full justify-center relative bg-[length:100%_200%] bg-[position:0%_100%]`}
      onMouseEnter={handleHover(true)}
      onMouseLeave={handleHover(false)}
    >
      <span className='btn__text'>{text}</span>
      <div ref={iconRef} className={`btn__icon w-3 h-3 ${isWhite ? 'bg-zinc-900' : 'bg-zinc-100'} rounded-full flex items-center justify-center absolute right-4`}>
        <MdArrowOutward className={`${hover ? `${isWhite ? 'text-white' : 'text-black'}` : 'text-transparent'}`} />
      </div>
    </a>
  );
};

export default Button;