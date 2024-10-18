
import React from 'react';
import { blackLogo } from '../utils';
import { socialMediaLinks,address, address1,mail, navBarLinks } from '../constants';
import Link from './Navbar/Link';

const Footer = () => {
  return (
    <div className="w-full bg-zinc-100 flex font-poppins justify-between items-start px-[3vw] py-[4vw] text-black">
        <div className='box1 flex flex-col justify-between items-start h-full'>
          <h1 className='font-poppins leading-none font-bold text-[4vw] lg:text-[6vw] tracking-tighter uppercase'>
            Eye-<br />
            Catching
          </h1>
          <img className='mt-[110vh] lg:mt-[65vh] lg:w-[12vw]' src={blackLogo} alt="darkLogo" />
        </div>
        <div className='box-2 flex flex-col justify-between items-start gap-[3vw]'>
          <h1 className='font-poppins font-bold text-[4vw] lg:text-[6vw] tracking-tighter uppercase'>
              Interfaces
          </h1>
          <p className='flex flex-col gap-[1vw]'>
              <span className='mr-[1vw] text-sm leading-none lg:text-[1vw] mb-[2.5vw]'>
                      S:
              </span>
            {socialMediaLinks.map((link, index) => (
              <Link text={link} isBlack={true} isNavbar={false} key={index}>
                
              </Link>
            ))}
          </p>
          <p className='flex flex-col gap-[1vw]'>
          <span className='mr-[1vw] mb-[2.5vw] text-sm leading-none lg:text-[1vw]'>
                      L:
              </span>
            {address.map((link, index) => (
              <Link text={link} isBlack={true} isNavbar={false} key={index}>
                
              </Link>
            ))}
          </p>
          <p className='flex flex-col gap-[1vw]'>
            {address1.map((link, index) => (
              <Link text={link} isBlack={true} isNavbar={false} key={index}>
                
              </Link>
            ))}
          </p>
          <p className='flex flex-col gap-[1vw]'>
            <span className='mr-[1vw] mb-[2.5vw] text-sm leading-none lg:text-[1vw]'>
                      E:
              </span>
            {mail.map((link, index) => (
              <Link text={link} isBlack={true} isNavbar={false} key={index}>
                
              </Link>
            ))}
          </p>

        </div>
        <div className='flex items-center justify-center my-[35vh]'>
        <p className='flex flex-col gap-[1vw]'>
              <span className='mr-[1vw] mb-[3vw] text-sm leading-none lg:text-[1vw]'>
                      N:
              </span>
            {navBarLinks.map((link, index) => (
              <Link text={link} isBlack={true} isNavbar={false} key={index}>
                
              </Link>
            ))}
          </p>

        </div>
    </div>
  );
};

export default Footer;
