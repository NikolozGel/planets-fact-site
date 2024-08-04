import hamburger from "/assets/icon-hamburger.svg";
import Planet from "./Planet";
import { useState } from "react";
import PlanetsMenu from "./PlanetsMenu";
import { Link } from "react-router-dom";

const navigation: string[] = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="lg:flex lg:justify-between lg:items-center">
        <div className="py-[16px] px-[24px] flex items-center justify-between md:justify-center">
          <h1 className="text-white font-antonio text-[28px] tracking-[-1.05px] md:mb-[20px] lg:mb-[0px]">
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
            <ul className="hidden md:flex justify-evenly mb-[27px] lg:mb-[0px]">
              {navigation.map((planet) => {
                return (
                  <li
                    key={planet}
                    className="text-white opacity-[0.6] lg:mr-[33px]"
                  >
                    <Link to={planet}>{planet}</Link>
                  </li>
                );
              })}
            </ul>
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
          <Planet />
        </div>
      ) : (
        <div>
          <PlanetsMenu />
        </div>
      )}
    </div>
  );
}
