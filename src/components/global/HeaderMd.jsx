import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../public/images/positive.png";
const HeaderMd = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full py-5 border-b border-r border-[#002121]/30">
      <div onClick={() => navigate("/")} className="ml-8 flex items-start cursor-pointer">
        <img src={logo} alt="Logo" className="w-4 h-4 object-contain mt-1" />
        <span className="text-white font-bold text-[30px] leading-none">Positive Luxury</span>
      </div>
    </header>
  );
};

export default HeaderMd;
