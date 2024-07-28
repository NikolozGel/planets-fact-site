import hamburger from "/images/icon-hamburger.svg";
import earth from "/images/planet-mars.svg";
import source from "/images/icon-source.svg";

export default function Header() {
  return (
    <>
      <div>
        <div className="flex items-center justify-between pt-4 px-6 mb-4  ">
          <h1 className="text-white text-[28px] tracking-[-1.05px] font-antonio">
            THE PLANETS
          </h1>
          <img
            src={hamburger}
            alt="hamburgerImg"
            className="cursor-pointer"
          />
        </div>
        <div className="mb-[64px]">
          <hr className="opacity-[0.2]" />
          <div className="flex py-4 px-6 justify-between h-[50px]">
            <p className="text-white text-[9px] font-bold tracking-[1.929px] opacity-[0.5] uppercase font-spartan hover:opacity-[1] hover:border-b-[4px] border-[#419EBB] h-[35px] cursor-pointer">
              OVERVIEW
            </p>
            <p className="text-white text-[9px] font-bold tracking-[1.929px] opacity-[0.5] uppercase font-spartan hover:opacity-[1] hover:border-b-[4px] border-[#419EBB] h-[35px] cursor-pointer">
              Structure
            </p>
            <p className="text-white text-[9px] font-bold tracking-[1.929px] opacity-[0.5] uppercase font-spartan hover:opacity-[1] hover:border-b-[4px] border-[#419EBB] h-[35px] cursor-pointer">
              Surface
            </p>
          </div>

          <hr className="opacity-[0.2]" />
        </div>
        <div className="flex justify-center mb-[80px]">
          <img src={earth} alt="" className="h-[173px] w-[173px]" />
        </div>

        <h1 className="text-center text-white font-antonio text-[40px] font-normal uppercase mb-4">
          JUPITER
        </h1>
        <p className="text-white text-[11px] font-normal leading-[22px] px-[24px] opacity-[0.7] w-[327px] text-center m-auto mb-[32px]">
          Venus is the second planet from the Sun. It is named after
          the Roman goddess of love and beauty. As the brightest
          natural object in Earth's night sky after the Moon, Venus
          can cast shadows and can be, on rare occasions, visible to
          the naked eye in broad daylight.
        </p>
        <div className="flex items-center text-white justify-center mb-[28px]">
          <p className="text-[12px] font-normal leading-[25px] opacity-[0.7]">
            Source :{" "}
            <span className="mr-1 border-b-[1px]">Wikipedia</span>
          </p>
          <img src={source} alt="sourceImg" />
        </div>

        <div className="px-[24px] flex flex-col items-center">
          <div className="w-[327px] h-[48px] border border-white border-opacity-[0.2] mb-2 flex justify-between items-center px-[24px]">
            <p className="text-white text-[9px] font-bold leading-[16px] tracking-[0.727px] uppercase opacity-[0.5]">
              ROTATION TIME
            </p>
            <p className="text-white text-[20px] tracking-[-0.75px] uppercase">
              243 days
            </p>
          </div>
          <div className="w-[327px] h-[48px] border border-white border-opacity-[0.2]  mb-2 flex justify-between items-center px-[24px]">
            <p className="text-white text-[9px] font-bold leading-[16px] tracking-[0.727px] uppercase opacity-[0.5]">
              ROTATION TIME
            </p>
            <p className="text-white text-[20px] tracking-[-0.75px] uppercase">
              243 days
            </p>
          </div>
          <div className="w-[327px] h-[48px] border border-white border-opacity-[0.2]  mb-2 flex justify-between items-center px-[24px]">
            <p className="text-white text-[9px] font-bold leading-[16px] tracking-[0.727px] uppercase opacity-[0.5]">
              ROTATION TIME
            </p>
            <p className="text-white text-[20px] tracking-[-0.75px] uppercase">
              243 days
            </p>
          </div>
          <div className="w-[327px] h-[48px] border border-white border-opacity-[0.2] flex justify-between items-center px-[24px]">
            <p className="text-white text-[9px] font-bold leading-[16px] tracking-[0.727px] uppercase opacity-[0.5]">
              ROTATION TIME
            </p>
            <p className="text-white text-[20px] tracking-[-0.75px] uppercase">
              243 days
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
