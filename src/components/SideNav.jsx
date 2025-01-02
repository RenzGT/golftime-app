import { Link } from "react-router-dom";
export const SideNav = ({ currentPage }) => {
  return (
    <div className="hidden lg:flex flex-wrap w-1/5 content-start h-max border shadow">
      <div className="flex w-full p-5 border-b">
        <h1 className="text-xl font-bold uppercase text-green-950">{currentPage}</h1>
      </div>
      <div className="flex flex-wrap flex-col w-full text-sm">
        <Link
          to="/about"
          className="p-5 border-b transition-all duration-200 text-green-950 hover:bg-green-950 hover:text-white"
        >
          Company Profile
        </Link>
        <Link
          to="/about/mission"
          className="p-5 border-b transition-all duration-200 text-green-950 hover:bg-green-950 hover:text-white"
        >
          Our Mission
        </Link>
        <Link
          to="/about/vision"
          className="p-5 border-b transition-all duration-200 text-green-950 hover:bg-green-950 hover:text-white"
        >
          Our Vision
        </Link>
        <Link
          to="/contact"
          className="p-5 transition-all duration-200 text-green-950 hover:bg-green-950 hover:text-white"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};
