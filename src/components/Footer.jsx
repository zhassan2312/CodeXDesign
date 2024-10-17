
import React from 'react';
import { blackLogo } from '../utils';
import { socialMediaLinks,address, address1,mail, navBarLinks } from '../constants';

const Footer = () => {
  return (
    <div className="w-full bg-zinc-100 flex justify-between items-start px-[3vw] py-[4vw] text-black">
        <div className='box1 flex flex-col justify-between items-start h-full'>
          <h1 className='font-poppins leading-none font-bold text-[6vw] tracking-tighter uppercase'>
            Eye-<br />
            Catching
          </h1>
          <img className='mt-[55vh]' src={blackLogo} alt="darkLogo" />
        </div>
        <div className='box-2 flex flex-col justify-between items-start gap-[3vw]'>
          <h1 className='font-poppins font-bold text-[6vw] tracking-tighter uppercase'>
              Interfaces
          </h1>
          <p className='flex flex-col gap-[0.5vw]'>
            {socialMediaLinks.map((link, index) => (
              <span key={index} className={`mr-[1vw] ${index === 0 ? 'mb-[3vw] font-bold' : 'underline underline-offset-[0.5vw]'}`}>
                {link}
              </span>
            ))}
          </p>
          <p className='flex flex-col gap-[0.5vw]'>
            {address.map((link, index) => (
              <span key={index} className={`mr-[1vw] ${index === 0 ? 'mb-[3vw] font-bold' : 'underline underline-offset-[0.5vw]'}`}>
                {link}
              </span>
            ))}
          </p>
          <p className='flex flex-col gap-[0.5vw]'>
            {address1.map((link, index) => (
              <span key={index} className={`mr-[1vw] underline underline-offset-[0.5vw]`}>
                {link}
              </span>
            ))}
          </p>
          <p className='flex flex-col gap-[0.5vw]'>
            {mail.map((link, index) => (
              <span key={index} className={`mr-[1vw] ${index === 0 ? 'mb-[3vw] font-bold' : 'underline underline-offset-[0.5vw]'}`}>
                {link}
              </span>
            ))}
          </p>

        </div>
        <div className='flex items-center justify-center my-[26vh]'>
        <p className='flex flex-col gap-[0.5vw]'>
              <span className='mr-[1vw] mb-[3vw]'>
                      S:
              </span>
            {navBarLinks.map((link, index) => (
              <span key={index} className={`mr-[1vw] underline underline-offset-[0.5vw]`}>
                {link}
              </span>
            ))}
          </p>

        </div>
    </div>
  );
};

export default Footer;
