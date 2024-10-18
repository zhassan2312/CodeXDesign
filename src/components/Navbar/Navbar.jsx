import React, { useState } from 'react';
import { logo1 } from '../../utils/index';
import { navBarLinks } from '../../constants';
import { MdMenu } from 'react-icons/md';
import Dropdown from './Dropdown';
import Link from './Link';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='fixed z-[1000] w-full px-[3vw] py-4 lg:py-[2vw] font-poppins flex justify-between items-center bg-white bg-opacity-0 backdrop-filter backdrop-blur-lg'>
      <div className='logo'>
        <img src={logo1} alt="Logo" className='w-[8vw]'/>
      </div>

      <div className='hidden lg:flex links'>
        {
          navBarLinks.map((link, index) => 
          (
            <Link key={index} isNavbar={true} text={link} href={'#'} className={`font-regular mx-[2vw] ${index === 4 ? 'ml-[16vw]' : ''}`}></Link>
          ))
        }
      </div>

      <div className='lg:hidden'>
        <MdMenu className='text-[5vw] cursor-pointer' onClick={toggleDropdown} />
      </div>

      <Dropdown isOpen={isDropdownOpen} onClose={toggleDropdown} />
    </div>
  );
};

export default Navbar;