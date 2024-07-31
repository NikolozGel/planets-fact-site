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
    <div className="h-[100vh] relative">
      <div className="py-[16px] px-[24px] flex items-center justify-between">
        <h1 className="text-white font-antonio text-[28px] tracking-[-1.05px]">
          THE PLANETS
        </h1>
        <img
          src={hamburger}
          alt="hamburgerImg"
          className="cursor-pointer"
          style={{ opacity: isOpen ? "1" : "0.2487" }}
          onClick={toggleMenu}
        />
      </div>

      <div className="mb-[50px]">
        <hr className="opacity-[0.2]" />
        <div className="flex justify-between py-[20px] px-[24px]">
          <p className="text-white text-[11px] font-bold tracking-[1.929px] w-[80px] opacity-[0.5]">
            OVERVIEW
          </p>
          <p className="text-white text-[11px] font-bold tracking-[1.929px] w-[80px] opacity-[0.5]">
            STRUCTURE
          </p>
          <p className="text-white text-[11px] font-bold tracking-[1.929px] w-[59px] opacity-[0.5]">
            SURFACE
          </p>
        </div>
        <hr className="opacity-[0.2]" />
      </div>

      <div className="relative">
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0"
          } absolute top-0 left-0 w-full`}
        >
          <Planets />
        </div>
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          } absolute top-0 left-0 w-full`}
        >
          <PlanetsMenu />
        </div>
      </div>
    </div>
  );
}
