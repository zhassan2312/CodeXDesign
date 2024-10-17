import React from 'react'
import Button from './Button'
import OutlineButton from './OutlineButton'
import Eye from './Eye/Eye'
const Project = () => {
  return (
    <div className='relative w-full bg-[#CDEA68] flex-col items-center flex justify-center gap-[3vw] py-[4vw]'>
        <div className='flex flex-col text-zinc-900 items-center justify-center w-full mb-[3vw]'>
            <h1 className='text-[10vw] font-grotesk leading-[9vw] tracking-tighter font-extrabold uppercase '>
                Ready
            </h1>
            <h1 className='text-[10vw] font-grotesk leading-[9vw] tracking-tighter font-extrabold uppercase '>
                to  Start
            </h1>
            <h1 className='text-[10vw] font-grotesk leading-[9vw] tracking-tighter font-extrabold uppercase '>
                the  Project?
            </h1>
        </div>
            <Eye isPlay={false} isClass={true} className={'flex gap-[2vw]'}/>

        <Button text={'Start Project'} isWhite={false}/>
        <h1 className='text-[3vw] leading-none text-zinc-900 tracking-tighter font-poppins font-extralight uppercase'>OR</h1>
        <OutlineButton text={'zhassan2312@gmail.com'} />
    </div>
  )
}

export default Project