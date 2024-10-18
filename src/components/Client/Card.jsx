import React from 'react'
import {logo, Upwork} from '../../utils'
import MiniButton from '../buttons/MiniButton'

const Card = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-12 mt-[4vw] px-[3vw]">
            {/* First Block */}
            <div className="h-[300px] lg:h-[20vw] lg:w-[30vw] md:h-[380px] rounded relative bg-[#004d43] text-green-100 sm:col-span-12 lg:col-span-4 laptop:col-span-6">
              <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center p-5">
                <picture className="relative">
                  <img  src={logo} className='w-32 h-32 lg:w-[8vw] lg:h-[8vw]' />
                </picture>
              </div>
              <div className="absolute left-0 right-0 bottom-0 p-5 flex flex-wrap lg:m-[0.5vw] ">
                  <MiniButton text={'2019-22'} className={'text-sm lg:text-[1vw] lg:px-[1vw] lg:py-[0.8vw] px-4 py-1'} />
              </div>
            </div>

            {/* Second Block */}
            <a href="#Upwork"
              className="h-[300px] md:h-[380px] lg:h-[20vw] lg:w-[30vw] rounded relative reward-block bg-gray-900 text-white sm:col-span-6 lg:col-span-4 laptop:col-span-3">
              <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center p-5">
                <picture className="relative">
                  <img src={Upwork} className='w-32 h-32 lg:w-[8vw] lg:h-[8vw]' />
                </picture>
              </div>
              <div className="absolute left-0 right-0 bottom-0 p-5 flex flex-wrap lg:m-[0.5vw]">
                  <MiniButton text={'5.0 Rating on Upwork'} className={'text-sm lg:text-[1vw] lg:px-[1vw] lg:py-[0.8vw] px-4 py-1'} />
              </div>
            </a>

            {/* Third Block */}
            <a href="https://thefutur.com/alumni"
              className="h-[300px] md:h-[380px] lg:h-[20vw] lg:w-[30vw] rounded relative reward-block bg-black text-white sm:col-span-6 lg:col-span-4 laptop:col-span-3">
              <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center p-5">
                <picture className="relative rounded-full">
                  <img src="https://yt3.googleusercontent.com/z7rxLPyEEAR9a4ha-QwGLZW3q7RlRdUU0iJBa5ozm047zB877XaCJAZ-jmxH0ScExLvY_hIE5nA=s160-c-k-c0x00ffffff-no-rj" className='w-32 h-32 lg:w-[8vw] lg:h-[8vw]' />
                </picture>
              </div>
              <div className="absolute left-0 right-0 bottom-0 p-5 lg:p-[2vw] flex flex-wrap lg:m-[0.5vw] ">
                  <MiniButton text={'Senior Designer At Re Design'} className={'text-sm lg:text-[1vw] lg:px-[1vw] lg:py-[0.8vw] px-4 py-1'} />
              </div>
            </a>
          </div>
  )
}

export default Card