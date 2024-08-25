import React from 'react';
import image1 from '../image/image1.webp';
import { FaPlay } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative w-[40vw] h-full flex items-center justify-center">
      {/* Background Image with Curved Clip Path */}
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image1})`, clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 90%)', }}></div>

      {/* Play Button with overlay */}
      <div className="absolute bottom-[-0px] left-12 cursor-pointer ">
        <div className="relative w-[150px] h-[150px] rounded-full outline outline-8 outline-white bg-red-900  flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full rounded-full opacity-[0.5] bg-cover grid items-center justify-center bg-no-repeat bg-center" style={{ backgroundImage: `url(${image1})`}} >
            <p className=' text-white font-black '><FaPlay /></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
