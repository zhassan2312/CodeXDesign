import React,{ useEffect, useState } from 'react'

const Eye = ({isPlay,isClass,className}) => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      const blackBoxes = document.querySelectorAll('.blackBox');
      blackBoxes.forEach((blackBox) => {
        const parentRect = blackBox.parentElement.getBoundingClientRect();
        const deltaX = (mouseX - parentRect.left - parentRect.width / 2) / 20;
        const deltaY = (mouseY - parentRect.top - parentRect.height / 2) / 20;
        blackBox.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      let angleDeg = (Math.atan2(deltaY, deltaX) * 180) / Math.PI - 180;
      setRotate(angleDeg);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div className={`${isClass ? className:'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-[2vw]'} `}>
          <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
            <div className='relative w-3/5 h-3/5 rounded-full bg-zinc-900 blackBox'>
              <div
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 line w-full h-[1.2vw] origin-center'
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
              >
                <div className='w-[1.2vw] h-[1.2vw] rounded-full bg-zinc-100'></div>
              </div>
            </div>
            <p className='absolute left-[23%] top-1/2 -translate-x-1/2 -translate-y-1/2 font-grotesk text-[2vw]'>
              {isPlay?'Play':''}
            </p>
          </div>
          <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
            <div className='relative w-3/5 h-3/5 rounded-full bg-zinc-900 blackBox'>
              <div
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 line w-full h-[1.2vw] origin-center'
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
              >
                <div className='w-[1.2vw] h-[1.2vw] rounded-full bg-zinc-100'></div>
              </div>
            </div>
            <p className='absolute right-[11%] top-1/2 -translate-x-1/2 -translate-y-1/2 font-grotesk text-[2vw]'>
            {isPlay?'Play':''}
            </p>
          </div>
        </div>
  )
}

export default Eye