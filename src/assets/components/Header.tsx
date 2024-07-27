import hamburger from "/images/icon-hamburger.svg";

export default function Header() {
  return (
    <>
      <div>
        <div className="flex items-center justify-between pt-4 px-6 mb-4  ">
          <h1 className="text-white text-[28px] font-normal tracking-[1.05px] uppercase">
            THE PLANETS
          </h1>
          <img src={hamburger} alt="hamburgerImg" />
        </div>
        <div>
          <hr />
          <div className="flex py-4 px-6">
            <p>OVERVIEW</p>
            <p>Structure</p>
            <p>Surface</p>
          </div>

          <hr />
        </div>
      </div>
    </>
  );
}
