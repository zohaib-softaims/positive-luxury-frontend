import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 mb-16">
      <div className="bg-[#4AA6A4]/14 text-[#F9FAFB] px-4 py-2 rounded-lg text-sm mb-8">This should take ~5 minutes.</div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-center">
        Empowering Luxury <br />
        <span className="text-white">
          Brands <span className="text-[#4aa6a4]">Through ESG Excellence.</span>
        </span>
      </h1>

      <p className="text-[#eeeeee]/41 max-w-2xl">
        We help brands navigate the complexities of ESG with clarity, confidence, and credibility—building trust with stakeholders and
        shaping a more sustainable future.
      </p>
    </div>
  );
};

export default HeroSection;
