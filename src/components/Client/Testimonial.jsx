import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Types from '../Featured/Types';

const Testimonial = ({ testimonialText, types, companyName, personName, expanded, onToggle }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (expanded) {
      gsap.to(container, {
        height: 'auto',
        duration: 0.4,
        ease: 'power4.out',
        onComplete: () => {
          container.style.overflow = 'visible';
        },
      });
    } else {
      gsap.to(container, {
        height: '9vw',
        duration: 0.4,
        ease: 'power4.in',
        onStart: () => {
          container.style.overflow = 'hidden';
        },
      });
    }
  }, [expanded]);

  return (
    <div ref={containerRef} className='testimonialContainer flex w-full border-y border-zinc-500'>
      <div className='flex flex-col gap-[3vw] justify-start items-start px-[3vw] py-[3vw]'>
        <p className='text-[2vw] font-medium underline-offset-[0.4vw] underline'>{companyName}</p>
        <p className='text-[1.6vw]'>Services:</p>
        <Types types={types} />
        <p className='font-medium text-[1.6vw] font-poppins'>{personName}</p>
        <img
          src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
          alt="img"
          className='w-[8vw] h-[8vw] object-cover rounded-lg'
        />
        <p className='font-light text-[1.6vw] font-poppins'>
          {testimonialText}
        </p>
      </div>
      <h2
        className={`${expanded ? 'text-zinc-600' : 'text-white'} absolute right-[3vw] mt-[3.2vw] underline font-grotesk text-[1.6vw] tracking-tighter font-extralight cursor-pointer`}
        onClick={onToggle}
      >
        Read More
      </h2>
    </div>
  );
};

export default Testimonial;