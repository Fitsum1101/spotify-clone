import { NavLink } from "react-router-dom";
import { logo } from "../assets";
import { FaChartPie, FaHome } from "react-icons/fa";
import { FaPeopleGroup, FaPhotoFilm } from "react-icons/fa6";

const navbarItems = [
  { to: "/", icon: <FaHome />, label: "Discover" },
  { to: "/around-you", icon: <FaPhotoFilm />, label: "Around You" },
  { to: "/top-artists", icon: <FaPeopleGroup />, label: "Top Artists" },
  { to: "/top-charts", icon: <FaChartPie />, label: "Top Charts" },
];

const navs = () => {
  return (
    <ul className="mt-14 flex flex-col gap-8">
      {navbarItems.map((nav) => (
        <li
          key={nav.to}
          className="list-none text-gray-400 items-center flex gap-2 font-bold "
        >
          <p className="text-xl">{nav.icon}</p>
          <NavLink className="hover:text-[#22D3EE] text-[1rem]" to={nav.to}>
            {nav.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  return (
    <div className="">
      <div className="flex  justify-center mt-10 items-center">
        <img src={logo} className="w-24" alt="logo" />
      </div>
      <div className="md:block p-3">{navs()}</div>
    </div>
  );
};

export default Navbar;
