import React from 'react';
import { navBarLinks } from '../../constants';
import Link from './Link';

const Dropdown = ({ isOpen, onClose }) => {
  return (
    <div className={` fixed inset-0 bg-black bg-opacity-90 z-[999] ${isOpen ? 'block' : 'hidden'}`}>
      <div className='flex flex-col items-center w-full justify-center h-full px-20 pb-30 pt-120 mobile-menu__content'>
        <div className='outline-top h-full'>
          <div className='max-h-full overflow-y-auto' data-menu-scroller=''>
            <div className='menu-main-navigation-container'>
              <ul id='mobile' className='mobile-nav grid gap-15 py-15 mb-75'>
                {navBarLinks.map((link, index) => (
                  <li key={index} className='menu-item'>
                    <Link isNavbar={true} text={link} href={'#'} className={'link uppercase h1 mb-0 leading-negative font-bold text-[5vw] tracking-tighter main-nav__link'} onClick={onClose}>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='grid gap-30 mt-[10vw]'>
              <div>
                <div>
                  <p className='mb-15'>S:</p>
                  <ul className='social-list leading-loose social-list--default'>
                    <li className='social-list__item'><a className='social-list__link link link--underline' href='https://www.instagram.com/ochi_design/'>Instagram</a></li>
                    <li className='social-list__item'><a className='social-list__link link link--underline' href='https://www.behance.net/ochi_design'>Behance</a></li>
                    <li className='social-list__item'><a className='social-list__link link link--underline' href='https://www.facebook.com/OCHI-presentation-design-103605044779378/'>Facebook</a></li>
                    <li className='social-list__item'><a className='social-list__link link link--underline' href='https://www.linkedin.com/company/56403597'>Linkedin</a></li>
                  </ul>
                </div>
              </div>
              <div className='mt-[10vw]'>
                <div className='leading-loose'>
                  <p className='mb-15'>L:</p>
                  <address className='group not-italic m-0'>
                    <span className='link link--underline'>202-1965 W 4th Ave</span><br />
                    <span className='link link--underline'>Vancouver, Canada</span><br />
                    <span className='link link--underline'> </span><br />
                    <span className='link link--underline'>30 Chukarina St</span><br />
                    <span className='link link--underline'>Lviv, Ukraine</span><br />
                  </address>
                </div>
              </div>
              <div className='mt-[10vw]'>
                <div className='leading-loose'>
                  <p className='mb-15'>E:</p>
                  <a className='link link--underline' href='mailto:hello@ochi.design'>
                    hello@ochi.design
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;