import hamburger from "/images/icon-hamburger.svg";
import earth from "/images/planet-mars.svg";
import source from "/images/icon-source.svg";

export default function Header() {
  return (
    <>
      <div className="md:mt-[16px]">
        <div className="xl:flex xl:items-center xl:justify-between">
          <div className="flex items-center justify-between pt-4 px-6 mb-4  md:justify-between">
            <h1 className="text-white text-[28px] tracking-[-1.05px] font-antonio md:mb-[23px]">
              THE PLANETS
            </h1>
            <img
              src={hamburger}
              alt="hamburgerImg"
              className="cursor-pointer  md:hidden"
            />
          </div>
          <div className="mb-[64px] md:mb-[130px] xl:mb-[0px]">
            <hr className="opacity-[0.2] md:hidden" />
            <div className="hidden md:flex justify-between mb-[20px] px-[51px]">
              <h3 className="text-white text-[11px] font-bold leading-[25px] tracking-[1px] opacity-[0.7] font-spartan">
                mercury
              </h3>
              <h3 className="text-white text-[11px] font-bold leading-[25px] tracking-[1px] opacity-[0.7] font-spartan">
                venus
              </h3>
              <h3 className="text-white text-[11px] font-bold leading-[25px] tracking-[1px] opacity-[0.7] font-spartan">
                earth
              </h3>
              <h3 className="text-white text-[11px] font-bold leading-[25px] tracking-[1px] opacity-[0.7]">
                mars
              </h3>
              <h3 className="text-white text-[11px] font-bold leading-[25px] tracking-[1px] opacity-[0.7] font-spartan">
                jupiter
              </h3>
              <h3 className="text-white text-[11px] font-bold leading-[25px] tracking-[1px] opacity-[0.7] font-spartan">
                saturn
              </h3>
              <h3 className="text-white text-[11px] font-bold leading-[25px] tracking-[1px] opacity-[0.7] font-spartan">
                uranus
              </h3>
              <h3 className="text-white text-[11px] font-bold leading-[25px] tracking-[1px] opacity-[0.7]">
                neptune
              </h3>
            </div>
            <div className="flex py-4 px-6 justify-between h-[50px] md:hidden">
              <p className="text-white text-[9px] font-bold tracking-[1.929px] opacity-[0.5] uppercase font-spartan hover:opacity-[1] hover:border-b-[4px] border-[#419EBB] h-[35px] cursor-pointer">
                OVERVIEW
              </p>
              <p className="text-white text-[9px] font-bold tracking-[1.929px] opacity-[0.5] uppercase hover:opacity-[1] hover:border-b-[4px] border-[#419EBB] h-[35px] cursor-pointer font-spartan">
                Structure
              </p>
              <p className="text-white text-[9px] font-bold tracking-[1.929px] opacity-[0.5] uppercase font-spartan hover:opacity-[1] hover:border-b-[4px] border-[#419EBB] h-[35px] cursor-pointer">
                Surface
              </p>
            </div>

            <hr className="opacity-[0.2] xl:hidden" />
          </div>
        </div>

        <hr className="opacity-[0.2] hidden xl:block xl:mb-[130px]" />
        <div className="flex justify-center mb-[80px] md:mb-[115px]">
          <img src={earth} alt="" className="h-[173px] w-[173px]" />
        </div>
        <div className="md:flex md:items-center md:justify-between md:mb-[21px]">
          <div className="ml-[19px]">
            <h1 className="text-center text-white font-antonio text-[40px] font-normal uppercase mb-4 md:text-[48px] md:text-left md:ml-4">
              JUPITER
            </h1>
            <p className="text-white text-[11px] font-normal leading-[22px] px-[24px] opacity-[0.7] w-[327px] text-center m-auto mb-[32px] md:w-[339px] md:text-left">
              Venus is the second planet from the Sun. It is named
              after the Roman goddess of love and beauty. As the
              brightest natural object in Earth's night sky after the
              Moon, Venus can cast shadows and can be, on rare
              occasions, visible to the naked eye in broad daylight.
            </p>
            <div className="flex items-center text-white justify-center mb-[28px]">
              <p className="text-[12px] font-normal leading-[25px] opacity-[0.7]">
                Source :{" "}
                <span className="mr-1 border-b-[1px]">Wikipedia</span>
              </p>
              <img src={source} alt="sourceImg" />
            </div>
          </div>

          <div className="hidden md:block md:mr-10">
            <div className="w-[281px] h-[40px] flex border-gray-500 border-[1px] mb-4 py-2 pl-5">
              <span className="text-white mr-[17px]">01</span>
              <p className="text-white">OVERVIEW</p>
            </div>
            <div className="w-[281px] h-[40px] border-gray-500 border-[1px] mb-4 flex py-2 pl-5">
              <span className="text-white mr-[14px]">02</span>
              <p className="text-white">Internal Structure</p>
            </div>
            <div className="w-[281px] h-[40px] border-gray-500 border-[1px] flex py-2 pl-5">
              <span className="text-white mr-[14px]">03</span>
              <p className="text-white">Surface Geology</p>
            </div>
          </div>
        </div>

        <div className="px-[24px] flex flex-col items-center md:flex-row md:items-baseline md:justify-around">
          <div className="w-[327px] h-[48px] border border-white border-opacity-[0.2] mb-2 flex justify-between items-center px-[24px] md:w-[165px] md:h-[88px] md:block  md:pt-4 md:pb-[19px]">
            <p className="text-white text-[9px] font-bold leading-[16px] tracking-[0.727px] uppercase opacity-[0.5]">
              ROTATION TIME
            </p>
            <p className="text-white text-[20px] md:text-[24px] tracking-[-0.75px] uppercase">
              243 days
            </p>
          </div>
          <div className="w-[327px] h-[48px] border border-white border-opacity-[0.2]  mb-2 flex justify-between items-center px-[24px] md:w-[165px] md:h-[88px]  md:block  md:pt-4 md:pb-[19px]">
            <p className="text-white text-[9px]  font-bold leading-[16px] tracking-[0.727px] uppercase opacity-[0.5]">
              ROTATION TIME
            </p>
            <p className="text-white text-[20px] md:text-[24px] tracking-[-0.75px] uppercase">
              243 days
            </p>
          </div>
          <div className="w-[327px] h-[48px] border border-white border-opacity-[0.2]  mb-2 flex justify-between items-center px-[24px] md:w-[165px] md:h-[88px]  md:block  md:pt-4 md:pb-[19px]">
            <p className="text-white text-[9px] font-bold leading-[16px] tracking-[0.727px] uppercase opacity-[0.5] ">
              ROTATION TIME
            </p>
            <p className="text-white text-[20px] md:text-[24px] tracking-[-0.75px] uppercase">
              243 days
            </p>
          </div>
          <div className="w-[327px] h-[48px] border border-white border-opacity-[0.2] flex justify-between items-center px-[24px] md:w-[165px] md:h-[88px]  md:block md:pt-4 md:pb-[19px]">
            <p className="text-white text-[9px] font-bold leading-[16px] tracking-[0.727px] uppercase opacity-[0.5]">
              ROTATION TIME
            </p>
            <p className="text-white text-[20px] md:text-[24px] tracking-[-0.75px] uppercase">
              243 days
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
