import React, { useRef } from 'react';
import MiniButton from '../buttons/MiniButton';

const Testimonial = ({ testimonialText, types, companyName, personName, expanded, onToggle, companylink, profilelink, img }) => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className={`testimonialContainer w-full border-y border-zinc-500 transition-all duration-500 ease-in-out overflow-hidden relative bg-zinc-900 ${expanded ? 'max-h-[600px] opacity-100 py-[3vw]' : 'max-h-[70px] opacity-80 py-[1vw]'}`}
    >
      <div className={`w-full flex flex-row justify-between items-center px-[3vw]`}>
        <button
          onClick={() => window.open(companylink, '_blank')}
          className='cursor-pointer text-16 lg:text-[1.5vw] underline-offset-[0.4vw] leading-none underline text-nowrap bg-transparent border-none p-0 m-0 font-poppins text-left'
        >
          {companyName}
        </button>
        <h2
          className={`${expanded ? 'text-zinc-600' : 'text-white'} underline font-grotesk text-[1.6vw] tracking-tighter font-extralight cursor-pointer ml-4`}
          onClick={onToggle}
        >
          {expanded ? 'Show Less' : 'Read More'}
        </h2>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out ${expanded ? 'opacity-100 max-h-[600px] mt-6' : 'opacity-0 max-h-0 mt-0'} overflow-hidden px-[3vw]`}
        style={{ pointerEvents: expanded ? 'auto' : 'none' }}
      >
        <div className='flex flex-col lg:flex-row gap-5 lg:gap-[4vw] items-start'>
          <div className='flex flex-row lg:flex-col gap-8 lg:gap-[4vw] items-center lg:items-start justify-center'>
            <p className='text-sm lg:text-[1.5vw] leading-none'>Services:</p>
            <div className='flex flex-row lg:flex-col gap-2 lg:gap-[0.8vw]'>
              {types.map((type) => (
                <MiniButton key={type} text={type} className={'text-sm lg:text-[1vw] lg:px-[1vw] lg:py-[0.8vw] px-4 py-1'} />
              ))}
            </div>
          </div>
          <button
            onClick={() => window.open(profilelink, '_blank')}
            className='cursor-pointer text-sm leading-none lg:text-[1.5vw] font-poppins underline bg-transparent border-none p-0 m-0 text-left'
          >
            {personName}
          </button>
          <div className='flex flex-col lg:w-1/3 lg:gap-[4vw] gap-8'>
            <img
              src={img}
              alt="img"
              className='w-[8vw] h-[8vw] lg:w-[16vw] lg:h-[16vw] object-cover rounded-lg'
            />
            <p className='font-light text-sm lg:text-[1vw] lg:leading-[1.5vw] font-poppins'>
              {testimonialText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;