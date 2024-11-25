import React from 'react'
import Button from './buttons/Button'
import OutlineButton from './buttons/OutlineButton'
import Eye from './Eye/Eye'
const Project = () => {
  return (
    <div 
    data-scroll
    data-scroll-speed='0.8'
    data-scroll-position='start,start'
    data-scroll-offset='-100%,-100%'
    
        
        className='relative z-60 w-full bg-[#CDEA68] flex-col items-center flex justify-center gap-[2vw] lg:gap-[3vw] lg:py-[4vw] py-16'>
        <div className='flex flex-col text-zinc-900 items-center justify-center w-full mb-[3vw]'>
            <h1 className='text-[6vw] font-grotesk leading-[5.5vw] tracking-tighter font-extrabold uppercase '>
                Ready
            </h1>
            <h1 className='text-[6vw] font-grotesk leading-[5.5vw] tracking-tighter font-extrabold uppercase '>
                to  Start
            </h1>
            <h1 className='text-[6vw] font-grotesk leading-[5.5vw] tracking-tighter font-extrabold uppercase '>
                the  Project?
            </h1>
        </div>
            <Eye isPlay={false} isClass={true} className={'flex gap-[2vw] top-[25%]'}/>

        <Button href={'https://calendly.com/zhassan2312/project-discussion,_blank'} className={'pl-8 pr-16 lg:pl-[2vw] lg:pr-[4vw] py-[1vw] '} text={'Start Project'} isWhite={false} />
        <h1 className='text-[3vw] leading-none text-zinc-900 tracking-tighter font-poppins font-extralight uppercase'>OR</h1>
        <OutlineButton href={'mailto: zhassan2312@gmail.com'} className={'pl-8 pr-16 lg:pl-[2vw] lg:pr-[4vw] py-[1vw]'} text={'Drop me a Mail'} />
    </div>
  )
}

export default Project