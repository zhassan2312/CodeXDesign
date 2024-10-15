import React from 'react'
import {FaArrowUpLong} from 'react-icons/fa6'
import {heroSectionText, heroSectionText1} from '../constants'
const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textStructure mt-52 px-20'>
            {heroSectionText.map((text,index) => {
              return <div key={text} className="masker">
                <div className='w-fit flex items-end'>
                  {
                    index===1 && <div className='mr-[1vw] w-[8vw] rounded-md h-[5.5vw] top-[0.4vw] relative bg-green-500'></div>
                  }
                  <h1 className='pt-[2vw] -mb-[1vw] uppercase text-[8vw] tracking-tighter leading-[6vw] font-poppins font-bold'>
                    {text}
                  </h1>
                </div>
                

              </div>
            }       
            )}
        </div>

        <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items center py-5 px-20">
             {heroSectionText1.map((text, index) => 
             {
              return <p key={text} className='text-md font-light tracking-tight leading-none font-poppins'>
                {text}
              </p>
             })}
             <div className="start flex items-center gap-5">
                <div className="px-5 py-2 border-[2px] border-zinc-500 font-light text-md uppercase rounded-full">
                  Start project
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center border-[2px] border-zinc-500">
                  <span className='rotate-[45deg]'>
                    <FaArrowUpLong />
                  </span>
                </div>
              
             </div>
        </div>
    </div>
  )
}

export default LandingPage