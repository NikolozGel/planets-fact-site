import hamburger from "/images/icon-hamburger.svg";
import Planets from "./Planets";
import { useState } from "react";
import PlanetsMenu from "./PlanetsMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="h-screen">
        <div className="py-[16px] px-[24px] flex items-center justify-between">
          <h1
            className="text-white font-antonio text-[28px]
          tracking-[-1.05px]"
          >
            THE PLANETS
          </h1>
          <img
            src={hamburger}
            alt="hamburgerImg"
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        <div className="mb-[50px]">
          <hr className="opacity-[0.2]" />
          <div className="flex justify-between py-[20px] px-[24px]">
            <p className="text-white text-[11px] font-bold tracking-[1.929px] w-[80px] opacity-[0.5]">
              OVERVIEW
            </p>
            <p className="text-white  text-[11px] font-bold tracking-[1.929px] w-[80px] opacity-[0.5]">
              STRUCTURE
            </p>
            <p className="text-white  text-[11px] font-bold tracking-[1.929px] w-[59px] opacity-[0.5]">
              SURFACE
            </p>
          </div>
          <hr className="opacity-[0.2]" />
        </div>
        {isOpen ? <Planets /> : <PlanetsMenu />}
      </div>
    </>
  );
}
