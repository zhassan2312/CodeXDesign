import React from 'react'
import {aboutText1,aboutText2,aboutText3,socialMediaLinks,aboutExpect} from '../constants/index'
const About = () => {
  return (
    <div className='w-full py-[6vw] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-poppins px-[3vw] font-regular text-[4vw] leading-[5vw] tracking-tight'>
        {aboutText1}
      </h1>
      <div className='w-full h-[1px] bg-[#889a45] mt-[8vw] mb-[3vw]'></div>
      <div className='aboutMiddleSection flex justify-between items-start text-xl px-[3vw]'>
        <p>
          {aboutExpect}
        </p>
        <ul className='gap-[2vw] flex flex-col w-[45vw] pl-[15vw] box-border'>
          <li>{aboutText2}</li>
          <li>{aboutText3}</li>
        </ul>
        <p className='flex flex-col gap-[0.5vw]'>
          {socialMediaLinks.map((link,index)=>
            <span key={index} className={`mr-[1vw] ${index===0 ?'mb-[3vw]':'underline underline-offset-[0.5vw]'}`}>
              {link}
            </span>
          )}
        </p>
      </div>
    </div>
  )
}

export default About