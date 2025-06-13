import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../public/images/positive.png";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-[#030d13] sticky top-0 z-50 w-full py-5 border-b border-[#024544]/30">
      <div onClick={() => navigate("/")} className="ml-8 flex items-start cursor-pointer">
        <img src={logo} alt="Logo" className="w-4 h-4 object-contain mt-1" />
        <span className="text-white font-bold text-[30px] leading-none">Positive Luxury</span>
      </div>
    </header>
  );
};

export default Header;
