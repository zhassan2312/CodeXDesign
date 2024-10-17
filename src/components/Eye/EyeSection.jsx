import React from 'react';
import Eye from './Eye';
const EyeSection = () => {
  

  return (
    <div className='w-full h-screen eyes overflow-hidden'>
      <div
        className='w-full h-full relative'
        style={{
          backgroundImage: 'url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Eye isPlay={true}/>
      </div>
    </div>
  );
};

export default EyeSection;