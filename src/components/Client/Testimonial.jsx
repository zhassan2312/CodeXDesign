import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Types from '../Featured/Types';
import MiniButton from '../buttons/MiniButton';

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
        height: '8vw',
        duration: 0.4,
        ease: 'power4.in',
        onStart: () => {
          container.style.overflow = 'hidden';
        },
      });
    }
  }, [expanded]);

  return (
    <div ref={containerRef} className='testimonialContainer flex w-full  border-y border-zinc-500'>
      <div className={`w-full flex ${expanded ? 'flex-col gap-5 lg:flex-row' : 'flex-row'} justify-between items-start px-[3vw] py-[3vw]`}>
        <p className='text-16 lg:text-[1.5vw] underline-offset-[0.4vw] leading-none underline text-nowrap'>{companyName}</p>
        {expanded && (
          <>
            <div className='flex flex-row lg:flex-col gap-8 lg:gap-[4vw] items-center lg:items-start justify-center'>
              <p className='text-sm lg:text-[1.5vw] leading-none'>Services:</p>
              <div className='flex flex-row lg:flex-col gap-2 lg:gap-[0.8vw]'>
                {types.map((type) => (
                  <MiniButton key={type} text={type} className={'text-sm lg:text-[1vw] lg:px-[1vw] lg:py-[0.8vw] px-4 py-1'} />
                ))}
              </div>
            </div>
            <p className='text-sm leading-none lg:text-[1.5vw] font-poppins'>{personName}</p>
            <div className='flex flex-col lg:w-1/3 lg:gap-[4vw] gap-8 '>
              <img
                src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
                alt="img"
                className='w-[8vw] h-[8vw] lg:w-[16vw] lg:h-[16vw] object-cover rounded-lg'
              />
              <p className='font-light text-sm lg:text-[1vw] lg:leading-[1.5vw] font-poppins'>
                {testimonialText}
              </p>
            </div>
          </>
        )}
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