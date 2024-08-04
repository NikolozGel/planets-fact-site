import chevron from "/assets/icon-chevron.svg";
import { Link } from "react-router-dom";
// import data from "../../data.json";

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

export default function PlanetsMenu() {
  return (
    <div className="h-[100%] pt-[44px] pl-[24px] pr-[32px]">
      <ul>
        {navigation.map((planet) => {
          return (
            <li
              key={planet}
              className="text-white mb-[41px] flex items-center justify-between relative"
            >
              <div className="flex">
                <Link to={planet}>{planet}</Link>
              </div>
              <img
                src={chevron}
                alt="chevronImg"
                className="absolute top-[13.5%] right-[0%]"
              />

              <hr className="opacity-[0.2] mb-4" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
