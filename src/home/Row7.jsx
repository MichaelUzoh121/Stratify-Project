import React from "react";
import image from '../image/map.png';

function Row7() {
  return (
    <div className="h-[150vh] md:h-[140vh] w-full bg-[#F3F7FA] grid items-center justify-center">
      <div className="h-[120vh] w-[90vw] md:h-[125vh] grid grid-rows-[0.5fr_2fr] ">
        <div className="grid items-center justify-center">
          <div className=" grid grid-rows-2 ">
            <div className="flex md:gap-3 lg:gap-3 items-center justify-center p-2">
              <div className="inline h-1 w-10 bg-red-500"></div>
              <p className="lg:text-lg text-lg md:text-xl grid uppercase text-center">
                Globaly renowned & trusted
              </p>
              <div className="inline h-1 w-10 bg-red-500"></div>
            </div>
            <p className="lg:text-4xl text-2xl grid items-center md:text-[2.7rem] font-bold">Stratify’s Working Everywhere</p>
          </div>
        </div>
        
        {/* Map Container with Background Image and Markers */}
        <div
          className="relative h-full w-full bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        >
          
          <div className="absolute bg-red-500 h-4 w-4 rounded-full top-[2%] left-[6%] md:top-[5%] md:left-[12%] lg:top-[23%] lg:left-[12%] "></div>
         
          <div className="absolute bg-red-500 h-4 w-4 rounded-full top-[25%] left-[80%] "></div>
          
          <div className="absolute bg-red-500 h-4 w-4 rounded-full top-[70%] lg:left-[20%] md:left-[70%] left-[70%] "></div>

          <div className="absolute bg-red-500 h-4 w-4 rounded-full top-[45%] left-[30%] md:top-[45%] md:left-[55%] lg:top-[65%] lg:left-[55%] "></div>
      
        </div>
      </div>
    </div>
  );
}

export default Row7;

