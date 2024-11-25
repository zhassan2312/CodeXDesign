import React, { useEffect } from "react";
import { preLoaderAnim } from "./animation";

const PreLoader = ({ onComplete }) => {
  useEffect(() => {
    preLoaderAnim().then(() => {
      if (onComplete) {
        onComplete();
      }
    });
  }, []);

  return (
    <div className="preloader fixed inset-0 z-[5000] flex flex-col items-center justify-between bg-white overflow-hidden">
      <div className="absolute top-[5vh] text-center text-md text-black font-medium font-[Poppins]">
        Portfolio @2024
      </div>

      <div className="absolute top-[45vh] texts-container flex gap-3 items-center justify-center text-[2vw] text-black font-[Poppins] opacity-0">
        <span className="font-bold text-nowrap text-[#017263]">Zohaib Hassan</span>
        <span>is</span>
        <span>a</span>
        <span>Developer,</span>
        <span>Designer,</span>
        <span>and Researcher</span>
      </div>

      <div className="loader absolute top-[85vh] lg:top-[90vh] border-4 border-t-4 border-t-[#017263] border-white border-spacing-2 rounded-full w-10 h-10 animate-spin"></div>
    </div>
  );
};

export default PreLoader;
