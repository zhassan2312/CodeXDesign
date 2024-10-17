import React from 'react'
import {logo, Upwork} from '../../utils'

const Card = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-12 mt-[4vw] px-[3vw]">
            {/* First Block */}
            <div className="h-[300px] md:h-[380px] rounded relative reward-block pointer-events-none bg-[#004d43] text-green-100 sm:col-span-12 lg:col-span-4 laptop:col-span-6">
              <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center p-5">
                <picture className="relative">
                  <img  src={logo} height="150" width="150" alt="Logo" />
                </picture>
              </div>
              <div className="absolute left-0 right-0 bottom-0 p-5 lg:p-8 flex flex-wrap -mb-2">
                <div className="mb-2 mr-2">
                  <button className="btn btn--outline-green btn--small" type="button">
                    <span className="btn__text rounded-full p-[1vw] border border-green-100">©2023–2024</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Second Block */}
            <a href="#Upwork"
              className="h-[300px] md:h-[380px] rounded relative reward-block bg-gray-900 text-white sm:col-span-6 lg:col-span-4 laptop:col-span-3">
              <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center p-5">
                <picture className="relative">
                  <img src={Upwork} width="150" alt="Logo" />
                </picture>
              </div>
              <div className="absolute left-0 right-0 bottom-0 p-5 lg:p-8 flex flex-wrap -mb-2">
                <div className="mb-2 mr-2">
                  <button className="btn btn--outline-light btn--small" type="button">
                    <span className="btn__text  rounded-full p-[1vw] border border-white">Rating 5.0 on Upwork</span>
                  </button>
                </div>
              </div>
            </a>

            {/* Third Block */}
            <a href="https://thefutur.com/alumni"
              className="h-[300px] md:h-[380px] rounded relative reward-block bg-gray-900 text-white sm:col-span-6 lg:col-span-4 laptop:col-span-3">
              <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center p-5">
                <picture className="relative">
                  <img src="https://yt3.googleusercontent.com/z7rxLPyEEAR9a4ha-QwGLZW3q7RlRdUU0iJBa5ozm047zB877XaCJAZ-jmxH0ScExLvY_hIE5nA=s160-c-k-c0x00ffffff-no-rj" height="104" width="102" alt="Logo" />
                </picture>
              </div>
              <div className="absolute left-0 right-0 bottom-0 p-5 lg:p-8 flex flex-wrap -mb-2">
                <div className="mb-2 mr-2">
                  <button className="btn btn--outline-light btn--small" type="button">
                    <span className="btn__text rounded-full p-[1vw] border border-white">Redesign Senior Designer</span>
                  </button>
                </div>
              </div>
            </a>
          </div>
  )
}

export default Card