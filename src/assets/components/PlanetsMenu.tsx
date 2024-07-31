import chevron from "/images/icon-chevron.svg";
export default function PlanetsMenu() {
  return (
    <div>
      <div className="px-[24px] relative">
        <ul>
          <div className="flex items-center  mb-4">
            <div className="w-[20px] h-[20px] rounded-full bg-[#DEF4FC]"></div>
            <li
              className="text-white ml-[25px] text-[15px]
            font-spartan font-bold leading-[25px] tracking-[1.364px]"
            >
              MERCURY
            </li>
            <img
              src={chevron}
              alt="chevronIcon"
              className="absolute right-10"
            />
          </div>
          <hr className="opacity-[0.2] mb-4" />
          <div className="flex items-center  mb-4">
            <div className="w-[20px] h-[20px] rounded-full bg-[#F7CC7F]"></div>
            <li
              className="text-white ml-[25px] text-[15px]
            font-spartan font-bold leading-[25px] tracking-[1.364px]"
            >
              VENUS
            </li>
            <img
              src={chevron}
              alt="chevronIcon"
              className="absolute right-10"
            />
          </div>
          <hr className="opacity-[0.2] mb-4" />
          <div className="flex items-center  mb-4">
            <div className="w-[20px] h-[20px] rounded-full bg-[#545BFE]"></div>
            <li
              className="text-white ml-[25px] text-[15px]
            font-spartan font-bold leading-[25px] tracking-[1.364px] "
            >
              EARTH
            </li>
            <img
              src={chevron}
              alt="chevronIcon"
              className="absolute right-10"
            />
          </div>
          <hr className="opacity-[0.2] mb-4" />
          <div className="flex items-center  mb-4">
            <div className="w-[20px] h-[20px] rounded-full bg-[#FF6A45]"></div>
            <li
              className="text-white ml-[25px] text-[15px]
            font-spartan font-bold leading-[25px] tracking-[1.364px] "
            >
              MARS
            </li>
            <img
              src={chevron}
              alt="chevronIcon"
              className="absolute right-10"
            />
          </div>
          <hr className="opacity-[0.2] mb-4" />
          <div className="flex items-center  mb-4">
            <div className="w-[20px] h-[20px] rounded-full bg-[#ECAD7A]"></div>
            <li
              className="text-white ml-[25px] text-[15px]
            font-spartan font-bold leading-[25px] tracking-[1.364px] "
            >
              JUPITER
            </li>
            <img
              src={chevron}
              alt="chevronIcon "
              className="absolute right-10"
            />
          </div>
          <hr className="opacity-[0.2] mb-4" />
          <div className="flex items-center  mb-4">
            <div className="w-[20px] h-[20px] rounded-full bg-[#FCCB6B]"></div>
            <li
              className="text-white ml-[25px] text-[15px]
            font-spartan font-bold leading-[25px] tracking-[1.364px]"
            >
              SATURN
            </li>
            <img
              src={chevron}
              alt="chevronIcon"
              className="absolute right-10"
            />
          </div>
          <hr className="opacity-[0.2] mb-4" />
          <div className="flex items-center  mb-4">
            <div className="w-[20px] h-[20px] rounded-full bg-[#65F0D5]"></div>
            <li
              className="text-white ml-[25px] text-[15px]
            font-spartan font-bold leading-[25px] tracking-[1.364px] "
            >
              URANUS
            </li>
            <img
              src={chevron}
              alt="chevronIcon"
              className="absolute right-10"
            />
          </div>
          <hr className="opacity-[0.2] mb-4" />
          <div className="flex items-center  mb-4">
            <div className="w-[20px] h-[20px] rounded-full bg-[#497EFA]"></div>
            <li
              className="text-white ml-[25px] text-[15px]
            font-spartan font-bold leading-[25px] tracking-[1.364px]"
            >
              NEPTUNE
            </li>
            <img
              src={chevron}
              alt="chevronIcon"
              className="absolute right-10"
            />
          </div>
          <hr className="opacity-[0.2] mb-4" />
        </ul>
      </div>
    </div>
  );
}
