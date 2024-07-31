import hamburger from "/images/icon-hamburger.svg";
import earth from "/images/planet-earth.svg";
import source from "/images/icon-source.svg";

export default function Header() {
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
          <img src={hamburger} alt="hamburgerImg" />
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
        <div className="flex justify-center mb-[50px]">
          <img src={earth} alt="earthImg" className="w-[111px]" />
        </div>

        <div className="flex flex-col items-center mb-[32px]">
          <h1 className="text-white text-[40px] font-antonio mb-4">
            MERCURY
          </h1>
          <p className="text-white w-[327px] text-center text-[13px] opacity-[0.6] leading-[22px]">
            Mercury is the smallest planet in the Solar System and the
            closest to the Sun. Its orbit around the Sun takes 87.97
            Earth days, the shortest of all the Sun's planets. Mercury
            is one of four terrestrial planets in the Solar System,
            and is a rocky body like Earth.
          </p>
        </div>
        <div className="flex items-center justify-center mb-5">
          <p className="text-white text-[12px] leading-[25px] opacity-[0.5] mr-1 font-spartan ">
            Source : <span className="underline">Wikipedia</span>
          </p>
          <img src={source} alt="sourceImg" />
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[327px] h-[48px] border-[1px] border-[white] opacity-[0.3] flex justify-between items-center pt-[16px] pb-[16px] px-[24px] mb-[8px]">
            <p className="text-white text-[9px] opacity-[0.8] font-spartan">
              ROTATION TIME
            </p>
            <p className="text-white">
              <span className="text-white text-[20px] font-antonio">
                58.6 days
              </span>
            </p>
          </div>
          <div className="w-[327px] h-[48px] border-[1px] border-[white] opacity-[0.3] flex justify-between items-center pt-[16px] pb-[16px] px-[24px] mb-[8px]">
            <p className="text-white text-[9px] opacity-[0.8] font-spartan">
              ROTATION TIME
            </p>
            <p className="text-white">
              <span className="text-white text-[20px] font-antonio">
                58.6 days
              </span>
            </p>
          </div>
          <div className="w-[327px] h-[48px] border-[1px] border-[white] opacity-[0.3] flex justify-between items-center pt-[16px] pb-[16px] px-[24px] mb-[8px]">
            <p className="text-white text-[9px] opacity-[0.8] font-spartan">
              ROTATION TIME
            </p>
            <p className="text-white">
              <span className="text-white text-[20px] font-antonio">
                58.6 days
              </span>
            </p>
          </div>
          <div className="w-[327px] h-[48px] border-[1px] border-[white] opacity-[0.3] flex justify-between items-center pt-[16px] pb-[16px] px-[24px] mb-[8px]">
            <p className="text-white text-[9px] opacity-[0.8] font-spartan">
              ROTATION TIME
            </p>
            <p className="text-white">
              <span className="text-white text-[20px] font-antonio">
                58.6 days
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
