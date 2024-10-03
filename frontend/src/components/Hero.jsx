import React from "react";
import falzAgbada from '../assets/falzAgbada1.jpg'
function Hero() {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2 ">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">Wanna Be A Yoruba Demon</p>
          </div>
          <h2 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            {" "}
          Check Out Our Latest  Arrivals
          </h2>
          <div className="flex items-center gap-2">
            <p className=" font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      
        <img src={falzAgbada} className="w-full sm:w-1/2" alt="" />

    </div>
  );
}

export default Hero;
