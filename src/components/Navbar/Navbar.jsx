import React, { useState, useEffect } from 'react';
import { logo1 } from '../../utils/index';
import { navBarLinks } from '../../constants';
import { MdMenu } from 'react-icons/md';
import Dropdown from './Dropdown';
import Link from './Link';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (isVisible) {
      gsap.to('.navbar', { y: 0, duration: 0.5, ease: 'power2.out' });
    } else {
      gsap.to('.navbar', { y: '-100%', duration: 0.5, ease: 'power2.out' });
    }
  }, [isVisible]);

  return (
    <div className='navbar fixed z-[1000] w-full px-[3vw] py-4 lg:py-[2vw] bg-white bg-opacity-0 backdrop-filter backdrop-blur-lg'>
      {/* Navbar content aligned with flexbox */}
      <div className='flex justify-between items-center'>
        {/* Logo at the leftmost side */}
        <div className='logo'>
          <img src={logo1} alt="Logo" className='w-[8vw]' />
        </div>

        {/* Links - Hidden on smaller screens */}
        <div className='hidden lg:flex items-center'>
          {navBarLinks.map((link, index) => (
            <Link 
              key={index} 
              isNavbar={true} 
              text={link} 
              href={'#'} 
              className={`font-regular mx-[2vw] ${index === 4 ? 'ml-[16vw]' : ''}`}
            />
          ))}
        </div>

        {/* Menu icon - Visible on smaller screens */}
        <div className='lg:hidden'>
          <MdMenu className='text-[5vw] cursor-pointer' onClick={toggleDropdown} />
        </div>
      </div>

      {/* Dropdown component for mobile menu */}
      <Dropdown isOpen={isDropdownOpen} onClose={toggleDropdown} />
    </div>
  );
};

export default Navbar;