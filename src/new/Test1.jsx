import React from "react";
import image1 from "../image/image88.jpg";
import { FaTrophy } from "react-icons/fa";

const Test1 = () => {
  return (
    <div className="relative lg:w-[40vw] md:w-[100%] md:h-[90vh] h-[62vh] w-[100%] lg:h-[90vh] flex items-center justify-center">
      {/* Background Image with Curved Clip Path */}
      <div
        className="w-full h-full bg-cover bg-center  bg-no-repeat"
        style={{
          backgroundImage: `url(${image1})`,
          clipPath: "polygon(0 0, 100% 0%, 100% 85%, 50% 92%, 0% 100%)",
        }}
      ></div>

      {/* Circular Badge with Overlapping Effect */}
      <div className="absolute bottom-[0px]  left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="relative h-[18vh] w-[40vw] md:w-[30vw] md:h-[22vh] lg:w-[12vw] lg:h-[25vh] rounded-full bg-gradient-to-r from-red-500 to-purple-500 flex items-center justify-center border-8 border-white">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-2">
            <FaTrophy className="text-white text-4xl" />
            <p className="text-sm font-semibold">Financial & Consulting</p>
            <p className="text-xs font-light">Award 2019-2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test1;
