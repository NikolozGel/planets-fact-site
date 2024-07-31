import Planets from "./Planets";
import hamburger from "/images/icon-hamburger.svg";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        <Planets />
      </div>
    </>
  );
}
