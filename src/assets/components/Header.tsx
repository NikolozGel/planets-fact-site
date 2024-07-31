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
      <div className="lg:flex lg:justify-between lg:items-center">
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

        <div>
          <div>
            <div className="hidden md:flex justify-evenly mb-[27px]">
              <div className="text-white opacity-[0.6] lg:mr-[33px]">
                Mercury
              </div>
              <div className="text-white opacity-[0.6] lg:mr-[33px]">
                Venus
              </div>
              <div className="text-white opacity-[0.6] lg:mr-[33px]">
                Earth
              </div>
              <div className="text-white opacity-[0.6] lg:mr-[33px]">
                Mars
              </div>
              <div className="text-white opacity-[0.6] lg:mr-[33px]">
                Jupiter
              </div>
              <div className="text-white opacity-[0.6] lg:mr-[33px]">
                Saturn
              </div>
              <div className="text-white opacity-[0.6] lg:mr-[33px]">
                Uranus
              </div>
              <div className="text-white opacity-[0.6] lg:mr-[41px]">
                Neptune
              </div>
            </div>
          </div>
        </div>
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
