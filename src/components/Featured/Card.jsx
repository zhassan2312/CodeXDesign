import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Types from './Types';

const Card = ({ image, text, types, left }) => {
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
      className='cardContainer relative w-full md:w-1/2 py-6'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h1
        ref={h1Ref}
        className={`overflow-hidden text-[#CDEA68] uppercase font-bold absolute ${left ? 'left-full -translate-x-1/2' : 'right-full translate-x-1/2'} leading-none top-1/2 -translate-y-1/2 font-grotesk text-[8vw] z-10 text-nowrap`}
      >
        {text.split('').map((letter, index) => (
          <span key={index} className="inline-block">{letter}</span>
        ))}
      </h1>
      <div className='card w-full h-full flex flex-col gap-5 overflow-hidden'>
        <div className='flex gap-5 items-center'>
          <div className='rounded-full h-3 w-3 bg-zinc-100'></div>
          <p className='font-grotesk text-xl tracking-tight'>
            {text}
          </p>
        </div>
        <img
          src={image}
          className={`rounded-2xl h-[50vh] md:h-[70vh] object-cover transition-transform ease-linear duration-300 ${hover ? 'transform scale-95' : 'transform scale-100'}`}
          alt={text}
        />
        <Types types={types}/>
      </div>
    </div>
  );
};

export default Card;