import React from 'react';
import Eye from './Eye';

const EyeSection = () => {
  return (
    <div 
      data-scroll
      data-scroll-speed='-0.6'
      data-scroll-offset='-40%,-40%'
    
      className='w-full h-screen -mt-[20%] eyes overflow-hidden z-10'>
      <div
        data-scroll 
        data-scroll-section 
        data-scroll-speed='-0.2'  // Slow scroll speed
        className='w-full h-full relative'
        style={{
          backgroundImage: 'url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Eye
           // Fast scroll speed
          isPlay={true} />
      </div>
    </div>
  );
};

export default EyeSection;