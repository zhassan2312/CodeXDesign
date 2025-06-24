import React from 'react'
import assets from '../../utils/assets'
import MiniButton from '../buttons/MiniButton'

const Card = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-12 mt-[4vw] px-[3vw]">
            {/* First Block */}
            <div className="h-[300px] lg:h-[20vw] lg:w-[30vw] md:h-[380px] rounded relative bg-[#004d43] text-green-100 sm:col-span-12 lg:col-span-4 laptop:col-span-6">
              <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center p-5">
                <picture className="relative">
                  <img  src={assets.logo} className='w-32 h-32 lg:w-[8vw] lg:h-[8vw]' />
                </picture>
              </div>
              <div className="absolute left-0 right-0 bottom-0 p-5 flex flex-wrap lg:m-[0.5vw] ">
                  <MiniButton text={'2023-25'} className={'text-sm lg:text-[1vw] lg:px-[1vw] lg:py-[0.8vw] px-4 py-1'} />
              </div>
            </div>

            {/* Second Block */}
            <a href="https://www.upwork.com/freelancers/~01ed8e41a9e6f5d90e" target='_blank'
              className="h-[300px] md:h-[380px] lg:h-[20vw] lg:w-[30vw] rounded relative reward-block bg-gray-900 text-white sm:col-span-6 lg:col-span-4 laptop:col-span-3">
              <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center p-5">
                <picture className="relative">
                  <img src={assets.Upwork} className='w-32 h-32 lg:w-[8vw] lg:h-[8vw]' />
                </picture>
              </div>
              <div className="absolute left-0 right-0 bottom-0 p-5 flex flex-wrap lg:m-[0.5vw]">
                  <MiniButton text={'5.0 Rating on Upwork'} className={'text-sm lg:text-[1vw] lg:px-[1vw] lg:py-[0.8vw] px-4 py-1'} />
              </div>
            </a>

            {/* Third Block */}
            <a href="https://www.youtube.com/@redesignuxui"
              className="h-[300px] md:h-[380px] lg:h-[20vw] lg:w-[30vw] rounded relative reward-block bg-black text-white sm:col-span-6 lg:col-span-4 laptop:col-span-3">
              <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center p-5">
                <picture className="relative rounded-full">
                  <img src={assets.redesign2} className='w-32 h-32 lg:w-[8vw] lg:h-[8vw]' />
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