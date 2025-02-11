"use client";

import { SIDEBAR_ITEMS } from "@/config/content";
import { SidebarMainItem } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function Sidebar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState("intro");

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    router.push(`/#${stage}`)
  }, [stage])
 
  const handleLinkClick = (linkLabel: string) => {
    setIsOpen(false);
    setStage(linkLabel)
  }

  const MainItems = () => {
    return (
      <ul className="space-y-1 h-[300px]">
        {SIDEBAR_ITEMS.mainItems?.map((link: SidebarMainItem, idx: number) => (
          <li className="flex items-center gap-2 cursor-pointer" key={idx}>
            <Link onClick={() => handleLinkClick(link.label)} 
            href={`#${link.label}`}>
              <span className={`${stage === link.label ? "text-dark-main" : "text-neutral-400"} capitalize font-medium`}>
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <>
      <header className="flex md:hidden p-5 fixed w-full justify-between z-[20]">
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
          <div className="flex fixed justify-end right-0 top-0 bg-white w-full h-[100vh]">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <MainItems />
            </div>
          </div>
        )}
      </header>

      <div id="sidebar" className="hidden md:block z-[20] fixed h-[100vh]">
        <div className="p-10">
          <div className="font-semibold text-2xl">J.</div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center px-10 mt-[100px]">
            <MainItems />
            <ul className="space-y-4">
              {SIDEBAR_ITEMS.externalLinks.map((link: any, idx: number) => (
                <li key={idx}>
                  <Link href={link.href} target="_blank">
                    <span className="flex items-center gap-1">
                      {link.label}
                      <GoArrowUpRight />
                    </span>
                    <div className="w-full mt-[1px] bg-[#000] h-[1px]"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
