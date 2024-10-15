import React from 'react'
import { marqueeText } from '../constants'
import { motion } from 'framer-motion'

const Marquee = () => {
  
  return (
    <div className='w-full bg-[#017263] rounded-tl-3xl rounded-tr-3xl py-[10vh] overflow-hidden'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-[5vw] overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease: 'linear', repeat:Infinity, duration: 20}} className='text-[16vw] tracking-tighter leading-none font-bold font-poppins uppercase py-2 '>
                {marqueeText}
            </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease: 'linear', repeat:Infinity, duration: 20}} className='text-[16vw] tracking-tighter leading-none font-bold font-poppins uppercase py-2'>
                {marqueeText}
            </motion.h1  >
            <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease: 'linear', repeat:Infinity, duration: 20}} className='text-[16vw] tracking-tighter leading-none font-bold font-poppins uppercase py-2'>
                {marqueeText}
            </motion.h1  >
        </div>
    </div>
  )
}

export default Marquee