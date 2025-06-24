import React from 'react';
import Eye from './Eye';
import assets from '../../utils/assets';

const EyeSection = () => {
  return (
    <div 
      data-scroll
      data-scroll-speed='-0.6'
      data-scroll-offset='-40%,-40%'
    
      className='w-full h-screen -mt-[20%] mb-[10%] eyes overflow-hidden z-10'>
      <div
        data-scroll 
        data-scroll-section 
        data-scroll-speed='-0.2'  // Slow scroll speed
        className='w-full h-full relative'
        style={{
          backgroundImage: `url(${assets.eyeSection})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Eye
           // Fast scroll speed
          isPlay={true} isClass={true} className={'absolute top-[35%]  left-[35%] -translate-x-1/2 -translate-y-1/2 flex gap-[2vw]'} />
      </div>
    </div>
  );
};

export default EyeSection;