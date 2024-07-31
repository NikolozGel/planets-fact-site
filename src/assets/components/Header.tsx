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
    <div>
      <div>
        <div className="py-[16px] px-[24px] flex items-center justify-between md:justify-center">
          <h1 className="text-white font-antonio text-[28px] tracking-[-1.05px] md:mb-[20px]">
            THE PLANETS
          </h1>

          <img
            src={hamburger}
            alt="hamburgerImg"
            className="cursor-pointer  sm:hidden"
            style={{ opacity: isOpen ? "1" : "0.2487" }}
            onClick={toggleMenu}
          />
        </div>

        <div className="mb-[50px]">
          <div className="hidden md:flex justify-evenly mb-[27px]">
            <div className="text-white opacity-[0.6]">Mercury</div>
            <div className="text-white opacity-[0.6]">Venus</div>
            <div className="text-white opacity-[0.6]">Earth</div>
            <div className="text-white opacity-[0.6]">Mars</div>
            <div className="text-white opacity-[0.6]">Jupiter</div>
            <div className="text-white opacity-[0.6]">Saturn</div>
            <div className="text-white opacity-[0.6]">Uranus</div>
            <div className="text-white opacity-[0.6]">Neptune</div>
          </div>

          <hr className="opacity-[0.2] md:hidden" />
          <div className="flex justify-between py-[20px] px-[24px] md:hidden">
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
      </div>

      {isOpen ? (
        <div>
          <Planets />
        </div>
      ) : (
        <div>
          <PlanetsMenu />
        </div>
      )}
    </div>
  );
}
