import React from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';
import { heroSectionText, heroSectionText1 } from '../constants';
import MiniButton from './buttons/MiniButton';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div 
      data-scroll
      data-scroll-speed='-0.4'
      data-scroll-position='start,middle'
    className='landingPage w-full pb-[6vw] bg-zinc-900 pt-[2vw] relative z-0'>
      <div className='textStructure mt-52 lg:mt-[10vw] px-[6vw]'>
        {heroSectionText.map((text, index) => {
          return (
            <div key={text} className="masker">
              <div className='flex items-end'>
                {index === 1 && 
                  <motion.div 
                    initial={{ width: '0' }} 
                    animate={{ width: '8vw' }} 
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} 
                    className='mr-[0.5vw] rounded-md h-[4.5vw] top-[0.8vw] relative bg-green-500'
                  ></motion.div>
                }
                <h1 className='pt-[2vw] text-nowrap -mb-[1vw] uppercase text-[6vw] tracking-tighter leading-[4.5vw] font-poppins font-bold'>
                  {text}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] lg:border-t-[0.2vw] border-zinc-800 mt-32 lg:mt-[6vw] pt-4 lg:pt-[1vw] flex flex-col items-start justify-start gap-5 lg:px-[6vw] px-20 md:flex-row md:items-center md:justify-between md:gap-0">
        {heroSectionText1.map((text) => (
          <p key={text} className="text-md lg:text-[1vw] font-light tracking-tight leading-none font-poppins">
            {text}
          </p>
        ))}
        <div className="start flex items-center gap-3 lg:gap-[1vw]">
          <MiniButton text={'Start Project'} className={'text-sm lg:text-[1vw] lg:px-[1vw] lg:py-[0.8vw] px-4 py-1'} />
          <MiniButton text={<FaArrowUpLong className="w-5 h-5 lg:w-[1vw] lg:h-[1vw] rotate-[45deg]" />} className={'px-2 py-2 lg:px-[0.5vw] lg:py-[0.5vw] leading-none'} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;