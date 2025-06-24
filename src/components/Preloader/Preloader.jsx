import React, { useEffect } from "react";
import { preLoaderAnim } from "./animation";
import { preLoader } from "../../constants";

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
        {preLoader[0]}
      </div>

      <div className="absolute top-[45vh] texts-container flex gap-3 items-center justify-center text-[2vw] text-black font-[Poppins] opacity-0">
        <span className="font-bold text-nowrap text-[#017263]">{preLoader[1]}</span>
        <span>{preLoader[2]}</span>
        <span>{preLoader[3]}</span>
        <span>{preLoader[4]}</span>
        <span>{preLoader[5]}</span>
        <span>{preLoader[6]}</span>
      </div>

      <div className="loader absolute top-[85vh] lg:top-[90vh] border-4 border-t-4 border-t-[#017263] border-white border-spacing-2 rounded-full w-10 h-10 animate-spin"></div>
    </div>
  );
};

export default PreLoader;
