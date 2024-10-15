import React from 'react';
import { logo1 } from '../utils/index';
import { navBarLinks } from '../constants';

const Navbar = () => {
  return (
    <div className='fixed z-[1000] w-full px-20 py-8 font-poppins flex justify-between items-center'>
      <div className='logo'>
        <img src={logo1} alt="Logo" />
      </div>

      <div className='links'>
        {
          navBarLinks.map((link, index) => (
            <a key={index} href='#' className={`text-md capitalize font-regular mx-4 ${index === 4 ? 'ml-[16vw]' : ''}`}>{link}</a>
          ))
        }
      </div>
    </div>
  );
}

export default Navbar;