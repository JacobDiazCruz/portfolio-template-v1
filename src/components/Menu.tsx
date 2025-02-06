"use client";

import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false); // Track whether the menu is open

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  const [menuItems, _] = useState([
    {
      label: "Intro",
      active: true
    },
    {
      label: "About",
      active: false
    },
    {
      label: "Works",
      active: false
    },
    {
      label: "Experience",
      active: false
    },
    {
      label: "Contact",
      active: false
    }
  ])

  return (
    <>
    <header className="flex md:hidden p-5 fixed w-full justify-between">
      <div
        id="hamburger-menu"
        className={`w-[25px] ml-auto cursor-pointer relative z-10`}
        onClick={handleHamburgerClick}
      >
        <div
          className={`h-[1px] bg-dark-main transition-transform duration-300 ease-in-out ${
            isOpen ? "transform rotate-45 translate-y-[11px]" : ""
          }`}
        ></div>
        <div
          className={`h-[1px] bg-dark-main mt-1 transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`h-[1px] bg-dark-main mt-1 transition-transform duration-300 ease-in-out ${
            isOpen ? "transform -rotate-45 -translate-y-[0px]" : ""
          }`}
        ></div>
      </div>
      
      {isOpen && (
        <div className="flex fixed justify-end right-0 top-0 z-3 bg-white w-full h-[100vh]">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <ul className="space-y-1 h-[400px]">
              {menuItems.map((item: any, idx: number) => (
                <li className="flex items-center gap-2 cursor-pointer" key={idx}>
                  {/* <div className="h-[1px] bg-neutral-300 w-[8px]"></div> */}
                  <span
                    className={`${item.active ? "text-dark-main" : "text-neutral-400"} font-medium`}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>

    <div id="sidebar" className="hidden md:block fixed h-[100vh]">
      <div className="p-10">
        <div className="font-semibold text-2xl">J.</div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center px-10 mt-[100px]">
          <ul className="space-y-1 h-[400px]">
            {menuItems.map((item: any, idx: number) => (
              <li className="flex items-center gap-2 cursor-pointer" key={idx}>
                {/* <div className="h-[1px] bg-neutral-300 w-[8px]"></div> */}
                <span className={`${item.active ? "text-dark-main" : "text-neutral-400"} font-medium`}>
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}
