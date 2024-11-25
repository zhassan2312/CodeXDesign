import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navBarLinks } from "../../constants";
import Link from "./Link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBehance, FaGithub } from "react-icons/fa";

const Dropdown = ({ isOpen, onClose }) => {
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed left-0 top-0 w-full h-screen origin-top bg-black text-white p-[2vw] pr-[3vw]"
        >
          <div className="flex h-full flex-col">
            <div className="flex justify-between">
              <h1 className="text-lg text-white font-bold font-[Poppins] ">CODE X DESIGN</h1>
              <p
                className="cursor-pointer text-md text-white"
                onClick={onClose}
              >
                <span className="text-[3vw]">X</span>
              </p>
            </div>
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col h-full justify-center font-[Poppins] items-center gap-4 "
            >
              <div className="flex flex-col absolute left-[3vw] gap-[2vw] ml-[3vw]">
              {navBarLinks.map((link, index) => (
                <Link 
                  key={index} 
                  isNavbar={true} 
                  text={link} 
                  href={'#'} 
                  className={`text-[3vw]`}
                />
              ))}
              </div>

              <div className="flex absolute left-[3vw] bottom-[2vw] mt-[1vw] gap-[2vw]">
                <a href="https://behance.com/zhassan2312" target="_blank" rel="noreferrer">
                  <FaBehance className="text-white text-[3vw] transition-colors hover:text-[#889a45]" />
                </a>
                <a href="https://github.com/zhassan2312" target="_blank" rel="noreferrer">
                  <FaGithub className="text-white text-[3vw] transition-colors  hover:text-[#889a45]" />
                </a>
                <a href="https://instagram.com/zhassan2312" target="_blank" rel="noreferrer">
                  <FaInstagram className="text-white text-[3vw] transition-colors  hover:text-[#889a45]" />
                </a>
                <a href="https://linkedin.com/in/zhassan2312" target="_blank" rel="noreferrer">
                  <FaLinkedin className="text-white text-[3vw] transition-colors  hover:text-[#889a45]" />
                </a>
              </div>
              
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dropdown;

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
