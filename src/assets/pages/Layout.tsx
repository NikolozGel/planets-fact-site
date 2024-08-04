import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";

const navigationLinks: string[] = [
  "/Mercury",
  "/Venus",
  "/Earth",
  "/Mars",
  "/Jupiter",
  "/Saturn",
  "/Uranus",
  "/Neptune",
];

export default function Layout() {
  const location = useLocation();
  const pathname = location.pathname;

  const navigate = useNavigate();
  useEffect(() => {
    if (navigationLinks.includes(pathname)) {
      navigate(pathname);
    } else {
      navigate("/Earth");
    }
  }, []);
  return (
    <>
      <div className="bg-bg-img bg-cover bg-center bg-[#070724] overflow-x-hidden  h-screen">
        <Header />
      </div>
    </>
  );
}
