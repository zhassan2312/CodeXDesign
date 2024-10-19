import React from 'react';
import { marqueeText } from '../constants';
import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div    
      className='marquee w-full bg-[#017263] rounded-tl-3xl rounded-tr-3xl py-[10vh] overflow-hidden relative'
    >
      <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
        <motion.h1 
          initial={{x:0}} 
          animate={{x:'-100%'}} 
          transition={{ease: 'linear', repeat:Infinity, duration: 10}} 
          className='text-[16vw] pr-[5vw] tracking-tighter leading-none font-bold font-poppins uppercase py-2 lg:py-[1vw]'
        >
          {marqueeText}
        </motion.h1>
        <motion.h1 
          initial={{x:0}} 
          animate={{x:'-100%'}} 
          transition={{ease: 'linear', repeat:Infinity, duration: 10}} 
          className='text-[16vw] tracking-tighter leading-none font-bold font-poppins uppercase py-2 lg:py-[1vw]'
        >
          {marqueeText}
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
