import React, { useRef } from 'react';
import { gsap } from 'gsap';

const Types = ({types}) => {
    
  const handleHover = (index, isHovering) => {
    if (isHovering) {
      gsap.fromTo(
        h2Refs.current[index],
        {
          backgroundColor: 'transparent',
          color: 'white'
        },
        {
          backgroundColor: 'white',
          color: 'black',
          duration: 0.2,
          ease: 'power4.in'
        }
      );
    } else {
      gsap.fromTo(
        h2Refs.current[index],
        {
          backgroundColor: 'white',
          color: 'black'
        },
        {
          backgroundColor: 'transparent',
          color: 'white',
          duration: 0.2,
          ease: 'power4.out'
        }
      );
    }
  };
  const h2Refs = useRef([]);


  return (
    <div className='flex items-center gap-5 flex-wrap'>
          {types.map((type, index) => (
            <div
              ref={(el) => (h2Refs.current[index] = el)}
              key={index}
              className='rounded-full border py-2 px-4 flex-shrink-0 cursor-pointer transition-colors ease-linear'
              onMouseEnter={() => handleHover(index, true)}
              onMouseLeave={() => handleHover(index, false)}
            >
              <p className='text-md font-poppins tracking-tight'>
                {type}
              </p>
            </div>
          ))}
        </div>
  )
}

export default Types