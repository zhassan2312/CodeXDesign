import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { MdArrowOutward } from 'react-icons/md';

const Button = ({href,onClick, text, isWhite, className }) => {
  const [hover, setHover] = useState(false);
  const buttonRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const icon = iconRef.current;

    const handleHover = (isHovering) => () => {
      setHover(isHovering);
      if (isHovering) {
        gsap.to(button, {
          backgroundPosition: '0% 0%',
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(icon, {
          width: button.offsetHeight * 0.5,
          height: button.offsetHeight * 0.5,
          padding: button.offsetHeight * 0.125,
          backgroundColor: isWhite ? 'black' : 'white',
          color: isWhite ? 'white' : 'black',
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        gsap.to(button, {
          backgroundPosition: '0% 100%',
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(icon, {
          width: button.offsetHeight * 0.1875,
          height: button.offsetHeight * 0.1875,
          padding: 0,
          backgroundColor: isWhite ? 'black' : 'white',
          color: 'transparent',
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    button.addEventListener('mouseenter', handleHover(true));
    button.addEventListener('mouseleave', handleHover(false));

    return () => {
      button.removeEventListener('mouseenter', handleHover(true));
      button.removeEventListener('mouseleave', handleHover(false));
    };
  }, [isWhite]);

  return (
    <a
      href={href}
      target='_blank'
      onClick={onClick}
      ref={buttonRef}
      className={`flex cursor-pointer gap-5 items-center ${className} ${isWhite ? 'bg-white text-zinc-900' : 'bg-zinc-900 text-white'} rounded-full justify-center relative bg-[length:100%_200%] bg-[position:0%_100%]`}
    >
      <span className='btn__text text-nowrap text-md lg:text-[1vw]'>{text}</span>
      <div ref={iconRef} className={`btn__icon w-3 h-3 lg:w-[1vw] lg:h-[1vw] ${isWhite ? 'bg-zinc-900' : 'bg-zinc-100'} rounded-full flex items-center justify-center absolute right-4 lg:right-[1vw]`}>
        <MdArrowOutward className={`w-5 h-5 lg:w-[2vw] lg:h-[2vw] ${hover ? `${isWhite ? 'text-white' : 'text-black'}` : 'text-transparent'}`} />
      </div>
    </a>
  );
};

export default Button;