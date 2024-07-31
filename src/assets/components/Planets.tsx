import earth from "/images/planet-venus.svg";
import source from "/images/icon-source.svg";

export default function Planets() {
  return (
    <div>
      <div className="lg:flex justify-evenly items-center">
        <div className="flex justify-center mb-[50px] mt-[70px] md:mt-[90px]">
          <img
            src={earth}
            alt="earthImg"
            className="w-[111px] md:mb-[100px]"
          />
        </div>
        <div className="md:flex items-center justify-center lg:flex-col">
          <div className="flex flex-col items-center mb-[32px] md:mr-[69px] lg:mt-[50px]">
            <div className="text-center md:text-left">
              <h1 className="text-white text-[40px] font-antonio mb-4 md:text-left">
                MERCURY
              </h1>

              <p className="text-white w-[327px] text-center text-[13px] opacity-[0.6] leading-[22px] md:text-left">
                Mercury is the smallest planet in the Solar System and
                the closest to the Sun. Its orbit around the Sun takes
                87.97 Earth days, the shortest of all the Sun's
                planets. Mercury is one of four terrestrial planets in
                the Solar System, and is a rocky body like Earth.
              </p>

              <div className="mt-4 flex items-center justify-center md:justify-start">
                <p className="text-white text-[12px] leading-[25px] opacity-[0.5] mr-1 font-spartan ">
                  Source :{" "}
                  <span className="underline cursor-pointer">
                    Wikipedia
                  </span>
                </p>
                <img src={source} alt="sourceImg" />
              </div>
            </div>
          </div>
          <div className="hidden md:block lg:mr-[111px] lg:mb-[80px]">
            <div className="w-[281px] h-[40px] border flex items-center mb-4 md:hover:bg-[#EDA249] cursor-pointer hover:border-none">
              <p className="text-white md:ml-[20px]">01</p>
              <p className="text-white md:ml-[17px]">OVERVIEW</p>
            </div>
            <div className="w-[281px] h-[40px] border flex items-center mb-4 md:hover:bg-[#EDA249] cursor-pointer hover:border-none">
              <p className="text-white md:ml-[20px]">01</p>
              <p className="text-white  md:ml-[17px]">OVERVIEW</p>
            </div>
            <div className="w-[281px] h-[40px] border flex items-center md:hover:bg-[#EDA249] cursor-pointer hover:border-none">
              <p className="text-white md:ml-[20px]">01</p>
              <p className="text-white  md:ml-[17px]">OVERVIEW</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-center">
        <div className="w-[327px] h-[48px] border-[1px] border-[white] border-opacity-[0.3] flex justify-between items-center pt-[16px] pb-[16px] px-[24px] mb-[8px] md:w-[164px] md:h-[88px] md:mr-[11px] md:block">
          <p className="text-white text-[9px] opacity-[0.5] font-spartan md:mb-1">
            ROTATION TIME
          </p>
          <p className="text-white">
            <span className="text-white text-[20px] font-antonio">
              58.6 days
            </span>
          </p>
        </div>
        <div className="w-[327px] h-[48px] border-[1px] border-[white] border-opacity-[0.3] flex justify-between items-center pt-[16px] pb-[16px] px-[24px] mb-[8px] md:w-[164px] md:h-[88px] md:mr-[11px] md:block ">
          <p className="text-white text-[9px] opacity-[0.5] font-spartan md:mb-1">
            REVOLUTION TIME
          </p>
          <p className="text-white">
            <span className="text-white text-[20px] font-antonio">
              58.6 days
            </span>
          </p>
        </div>
        <div className="w-[327px] h-[48px] border-[1px] border-[white] border-opacity-[0.3] flex justify-between items-center pt-[16px] pb-[16px] px-[24px] mb-[8px] md:w-[164px] md:h-[88px] md:mr-[11px] md:block">
          <p className="text-white text-[9px] opacity-[0.5] font-spartan md:mb-1">
            RADIUS
          </p>
          <p className="text-white">
            <span className="text-white text-[20px] font-antonio">
              58.6 days
            </span>
          </p>
        </div>
        <div className="w-[327px] h-[48px] border-[1px] border-[white] border-opacity-[0.3] flex justify-between items-center pt-[16px] pb-[16px] px-[24px] mb-[8px] md:w-[164px] md:h-[88px] md:mr-[11px] md:block">
          <p className="text-white text-[9px] opacity-[0.5] font-spartan md:mb-1">
            AVERAGE TEMP.
          </p>
          <p className="text-white">
            <span className="text-white text-[20px] font-antonio">
              58.6 days
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
