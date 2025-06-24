import React, { useRef } from 'react';
import MiniButton from '../buttons/MiniButton';

const Types = ({types}) => {
    

  return (
    <div className='flex items-center gap-2 flex-wrap'>
          {types.map((type, index) => (
            <MiniButton text={type} key={index} className={'text-sm lg:text-[1vw] lg:px-[1vw] lg:py-[0.8vw] px-4 py-1'}  />
          ))}
        </div>
  )
}

export default Types