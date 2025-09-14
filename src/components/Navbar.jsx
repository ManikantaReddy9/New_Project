import React from "react";
import myImage from '../assets/logo2.jpg'
const Navbar = () => {
  return (
    <nav
      style={{ width: "1000px", borderRadius: "30px" }}
      className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center justify-between px-4 py-3 bg-gray-200 shadow-lg z-50"
    >
      <div style={{display:"flex"}}>
        <img style={{height:"20px",width:"20px",marginTop:"6px",marginRight:"5px",transform:"rotate(-45deg)"}} src={myImage} alt="logo" />
        <div className="text-2xl font-bold text-gray-800">Pareto</div>
      </div>
      {/* Links */}
      <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
        <li className="hover:text-black cursor-pointer">PRODUCT</li>
        <li className="hover:text-black cursor-pointer">FEATURES</li>
        <li className="hover:text-black cursor-pointer">PARTNERS</li>
      </ul>

      {/* Button */}
      <button className="px-4 py-2 rounded-full bg-green-300 text-black-100 font-semibold shadow-md hover:opacity-90">
        Enter App
      </button>
    </nav>
  );
};

export default Navbar;
