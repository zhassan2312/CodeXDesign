import React from 'react';
import Button from './buttons/Button';
import { aboutText1, aboutText2, aboutText3, socialMediaLinks, aboutExpect } from '../constants/index';
import { myImage } from '../utils/index.js';
import Link from './Navbar/Link.jsx';

const About = () => {
  return (
    <div 
      data-scroll
      data-scroll-speed='0.3'
      data-scroll-position='start,start'
      data-scroll-offset='-100%,0'
      className='about z-20 w-full py-[6vw] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black relative'
    >
      <h1 className='font-poppins px-[3vw] font-regular text-3xl md:text-[4.5vw] md:leading-[5vw] tracking-tight'>
        {aboutText1}
      </h1>
      <div className='w-full h-[1px] bg-[#b3c963] mt-16 mb-6 lg:mt-[2vw] lg:mb-[1vw]'></div>
      <div className='aboutMiddleSection flex flex-col justify-start items-start md:flex-row md:justify-between px-[3vw] gap-[3vw]'>
        <p className='font-medium text-sm lg:text-[1vw]'>
          {aboutExpect}
        </p>
        <ul className='gap-[2vw] text-sm lg:text-[1vw] lg:leading-[1.2vw] flex flex-col w-[45vw] pl-[2vw] sm:pl-0 md:pl-[10vw] lg:pl-[12vw] box-border'>
          <li>{aboutText2}</li>
          <li>{aboutText3}</li>
        </ul>
        <p className='flex flex-col gap-[1vw]'>
          <span className='mr-[1vw] mb-[3vw] text-sm lg:text-[1vw]'>
            S:
          </span>
          {socialMediaLinks.map((link, index) => (
            <Link className={' '} isBlack={true} text={link} key={index} isNavbar={false} />
          ))}
        </p>
      </div>
      <div className='w-full h-[1px] bg-[#889a45] mt-16 mb-8'></div>
      <div className='w-full aboutEndSection mx-[3vw] flex flex-col md:flex-row items-start justify-between gap-8 overflow-hidden'>
        <div className='flex flex-col items-start w-auto'>
          <h1 className='text-[3vw] mb-5 lg:mb-[1vw]'>
            My approach:
          </h1>
          <Button onClick={''} className={'pl-8 pr-16 lg:pl-[2vw] lg:pr-[4vw] py-[1vw]'} text={'See More'} isWhite={false} />
        </div>
        <img src={myImage} className='w-[93vw] md:w-1/2 h-[70vh] rounded-3xl md:mr-[6vw] fill object-cover overflow-hidden' alt="About" />
      </div>
    </div>
  );
};

export default About;
