import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Types from './Types';

const Card = ({ image, text, types, left, link }) => {
  const [hover, setHover] = useState(false);
  const h1Ref = useRef(null);

  useEffect(() => {
    if (hover) {
      gsap.fromTo(
        h1Ref.current.children,
        { y: '110%', opacity: 0 },
        { y: '5%', opacity: 1, duration: 0.4, stagger: 0.02, ease: 'power4.in' }
      );
    } else {
      gsap.fromTo(
        h1Ref.current.children,
        { y: '5%', opacity: 1 },
        { y: '110%', opacity: 0, duration: 0.4, stagger: 0.02, ease: 'power4.out' }
      );
    }
  }, [hover]);


  return (
    <div
       className={`cardContainer cursor-pointer relative w-full py-6 lg:py-[1vw] z-10 ${hover ? '!z-[60]' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        if (link) {
          window.open(link, '_blank');
        }
      }}
    >
      <h1
        ref={h1Ref}
        className={`absolute z-30 overflow-hidden text-[#CDEA68] uppercase font-bold ${left ? 'left-1/2 -translate-x-1/2 lg:left-full lg:-translate-x-1/2 ' : 'right-1/2 translate-x-1/2 lg:right-full lg:translate-x-1/2'} leading-none top-1/2 -translate-y-1/2 font-grotesk text-[8vw] text-nowrap`}
      
      >
        {text.split('').map((letter, index) => (
          <span key={index} className="inline-block">{letter}</span>
        ))}
      </h1>
      <div className='card w-full h-full flex flex-col gap-5 lg:gap-[1.2vw]  overflow-hidden'>
        <div className='flex gap-5 lg:gap-[1.2vw] items-center'>
          <div className='rounded-full h-3 w-3 lg:w-[0.8vw] lg:h-[0.8vw] bg-zinc-100'></div>
          <p className='font-grotesk text-xl lg:text-[1vw] tracking-tight'>
            {text}
          </p>
        </div>
        <img
          src={image}
          className={`rounded-2xl lg:rounded-[1.5vw] h-[80vh] md:h-[50vh]  lg:h-[70vh] object-cover transition-transform ease-linear duration-300 ${hover ? 'transform scale-95' : 'transform scale-100'}`}
          alt={text}
        />
        <Types types={types}/>
      </div>
    </div>
  );
};

export default Card;