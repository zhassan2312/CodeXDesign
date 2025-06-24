import React from 'react';
import assets from '../utils/assets';
import { socialMediaLinks, address, address1, mail, navBarLinks } from '../constants';
import Link from './Navbar/Link';

const Footer = () => {
  return (
    <div 
      data-scroll
      data-scroll-speed='0.6'
      data-scroll-position='start,start'
      data-scroll-offset='-30%,0'
      className="-mt-[23%] -mb-[22%] w-full bg-zinc-100 flex font-poppins justify-between items-start px-[3vw] py-[4vw] text-black"
    >
      <div className='box1 flex flex-col justify-between items-start h-full'>
        <h1 className='font-poppins leading-none font-bold text-[4vw] lg:text-[6vw] tracking-tighter uppercase'>
          Eye-<br />
          Catching
        </h1>
        <img className='mt-[65vh] lg:w-[12vw]' src={assets.blackLogo} alt="darkLogo" />
      </div>
      <div className='box-2 flex flex-col justify-between items-start gap-[3vw]'>
        <h1 className='font-poppins font-bold text-[4vw] lg:text-[6vw] tracking-tighter uppercase'>
            Interfaces
        </h1>
        <p className='flex flex-col gap-[1vw]'>
            <b className='mr-[1vw] text-sm leading-none lg:text-[1vw] mb-[2.5vw]'>
                    Social:
            </b>
          {socialMediaLinks.map((link, index) => (
            <Link target={"_blank"} href={link.to} text={link.name} isBlack={true} isNavbar={false} key={index} />
          ))}
        </p>
        <p className='flex flex-col gap-[1vw]'>
          <b className='mr-[1vw] mb-[2.5vw] text-sm leading-none lg:text-[1vw]'>
                    Location:
            </b>
          {address.map((link, index) => (
            <Link text={link} isBlack={true} isNavbar={false} key={index} />
          ))}
        </p>
        <p className='flex flex-col gap-[1vw]'>
          {address1.map((link, index) => (
            <Link  text={link} isBlack={true} isNavbar={false} key={index} />
          ))}
        </p>
        <p className='flex flex-col gap-[1vw]'>
          <b className='mr-[1vw] mb-[2.5vw] text-sm leading-none lg:text-[1vw]'>
                    Email:
            </b>
          {mail.map((link, index) => (
            <Link target={"_blank"} href={`mailto:${link}`} text={link} isBlack={true} isNavbar={false} key={index} />
          ))}
        </p>
      </div>
      <div className='flex items-center justify-center my-[35vh]'>
        <p className='flex flex-col gap-[1vw]'>
          <b className='mr-[1vw] mb-[3vw] text-sm leading-none lg:text-[1vw]'>
                  Navbar:
          </b>
          {navBarLinks.map((link, index) => (
            <Link text={link} isBlack={true} isNavbar={false} key={index} />
          ))}
        </p>
      </div>
    </div>
  );
};

export default Footer;
