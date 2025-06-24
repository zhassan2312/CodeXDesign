import React, { useState, useEffect } from 'react';
import assets from '../../utils/assets';
import { navBarLinks } from '../../constants';
import { MdMenu } from 'react-icons/md';
import Dropdown from './Dropdown';
import Link from './Link';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const navigate=useNavigate()

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
    <div className='navbar fixed z-[1000] w-full px-[3vw] py-[1vw] lg:py-[2vw] bg-white bg-opacity-0 backdrop-filter backdrop-blur-lg'>
      {/* Navbar content aligned with flexbox */}
      <div className='flex justify-between items-center'>
        {/* Logo at the leftmost side */}
        <div className='logo' onClick={()=>navigate()}>
          <img src={assets.logo1} alt="Logo" className='w-[10vw] md:w-[10vw] hover:scale-125 duration-500 transition-transform ease-in-out cursor-pointer' />
        </div>

        {/* Links - Hidden on smaller screens */}
        <div className='hidden lg:flex items-center'>
          {navBarLinks.map((link, index) => (
            <Link
              key={index}
              isNavbar={true}
              text={link}
              href={
                index === 0
                  ? '#featured'
                  : index === 1
                  ? '#about'
                  : index === 2
                  ? 'https://www.calendly.com/zhassan2312/project-discussion'
                  : ''
              }
              target={`${index === 2 ? '_blank' : ''}`}
              className={`font-regular mx-[2vw] ${index === 2 ? 'ml-[35vw]' : ''}`}
            />
          ))}
        </div>

        {/* Menu icon - Visible on smaller screens */}
        <div className='lg:hidden'>
          <MdMenu className='text-[5vw] cursor-pointer hover:scale-125 duration-500 transition-transform ease-in-out ' onClick={toggleDropdown} />
        </div>
      </div>

      {/* Dropdown component for mobile menu */}
      <Dropdown isOpen={isDropdownOpen} onClose={toggleDropdown} />
    </div>
  );
};

export default Navbar;