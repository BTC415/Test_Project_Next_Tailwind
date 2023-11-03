"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/dart-logo.png";

const Navigation = () => {
  const [activeElement, setActiveElement] = useState(null);

  const handleNavItemClick = (index) => {
    setActiveElement(index);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-lineargradient">
      <div className="w-[400px] h-[70px] flex p-[5px] gap-[22px] bg-mainBg bg-center bg-no-repeat bg-contain">
        <div className="flex items-center gap-3 justify-center w-1/2">
          <Image src={logo} width={50} alt="logo" />
          <h1 className=" text-[40px] font-semibold">Dart</h1>
        </div>
        <div className="flex w-1/2 items-center justify-center rounded-[15px] text-[16px] gap-1 font-bold duration-200">
          <div
            className={`nav-link flex w-1/2 items-center justify-center py-4 ${
              activeElement !== 0 && "hover:text-[#1769FF] hover:bg-[#E8EDFC]"
            } cursor-pointer rounded-[15px] text-[16px] font-bold ${
              activeElement === 0 && "active"
            }`}
            onClick={() => handleNavItemClick(0)}
          >
            Item 1
          </div>
          <div
            className={`nav-link flex w-1/2 items-center justify-center py-4 ${
              activeElement !== 1 && "hover:text-[#1769FF] hover:bg-[#E8EDFC]"
            } cursor-pointer rounded-[15px] text-[16px] font-bold ${
              activeElement === 1 && "active"
            }`}
            onClick={() => handleNavItemClick(1)}
          >
            Item 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
