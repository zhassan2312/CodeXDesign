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
    <div className='fixed z-[1000] w-full px-20 py-8 font-poppins flex justify-between items-center'>
      <div className='logo'>
        <img src={logo1} alt="Logo" width={120}/>
      </div>

      <div className='hidden md:flex links'>
        {navBarLinks.map((link, index) => (
          
          <Link isNavbar={true} text={link} href={'#'} className={`text-md capitalize font-regular mx-4 ${index === 4 ? 'ml-[16vw]' : ''}`}>
                    </Link>
        ))}
      </div>

      <div className='md:hidden'>
        <MdMenu className='text-3xl cursor-pointer' onClick={toggleDropdown} />
      </div>

      <Dropdown isOpen={isDropdownOpen} onClose={toggleDropdown} />
    </div>
  );
};

export default Navbar;