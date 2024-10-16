import React, { useState } from 'react'
import {aboutText1,aboutText2,aboutText3,socialMediaLinks,aboutExpect} from '../constants/index'
import {myImage} from '../utils/index.js'
const About = () => 
{

  const [hover,setHover]=useState(false);
  const handleHover = (state) => {
    setHover(state);
  };
  return (
    <div className='w-full py-[6vw] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-poppins px-[3vw] font-regular text-[4vw] leading-[5vw] tracking-tight'>
        {aboutText1}
      </h1>
      <div className='w-full h-[1px] bg-[#889a45] mt-[8vw] mb-[2vw]'></div>
      <div className='aboutMiddleSection flex justify-between items-start text-xl px-[3vw]'>
        <p className='font-medium'>
          {aboutExpect}
        </p>
        <ul className='gap-[2vw] flex flex-col w-[45vw] pl-[15vw] box-border'>
          <li>{aboutText2}</li>
          <li>{aboutText3}</li>
        </ul>
        <p className='flex flex-col gap-[0.5vw]'>
          {socialMediaLinks.map((link,index)=>
            <span key={index} className={`mr-[1vw] ${index===0 ?'mb-[3vw] font-bold':'underline underline-offset-[0.5vw]'}`}>
              {link}
            </span>
          )}
        </p>
      </div>
      <div className='w-full h-[1px] bg-[#889a45] mt-[8vw] mb-[2vw]'></div>
      <div className='w-full aboutEndSection mx-[3vw] flex items-start justify-between overflow-hidden'>
          <div className='flex flex-col items-start w-auto'>
            <h1 className='text-[5vw]'>
              Our approach:
            </h1>
            <button 
              className='flex gap-5 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white justify-center'
              // onMouseEnter={handleHover(true)}
              // onMouseLeave={handleHover(false)}
            >
              Read More
              
              <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
            </button>
          </div>
          <img src={myImage} className='w-1/2 h-[70vh] rounded-2xl mr-[6vw] fill object-cover overflow-hidden'>
          </img>
      
      </div>
    </div>
  )
}

export default About