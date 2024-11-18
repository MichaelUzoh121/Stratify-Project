import React from "react";
import Testimonial from "../new/Testimonial";

function Row8() {
  return (
    <div className=" lg:h-[120vh] md:h-[120vh] h-[130vh] lg:w-full md:w-full w-full bg-[#ecf1f1ec] grid items-center justify-items-center ">
      <div className=" lg:w-[90vw] md:w-[90vw] w-[90%] lg:h-[100vh] md:h-[100vh] h-[110vh] grid grid-rows-[1fr_2fr]">
        <div className="grid items-center justify-items-center ">
          <div className=" lg:h-[22vh] md:h-[22vh] h-[35vh] w-[90%] grid grid-rows-[1fr_2fr] gap-2">
            <div className="  grid lg:grid-cols-2">
              <p className=" flex gap-3 items-center justify-center lg:justify-end lg:pr-12 text-xl uppercase ">
                <div className=" inline h-1 w-10 bg-red-500 "></div>
                testimonials
              </p>
            </div>
            <div className=" grid lg:grid-cols-2 grid-rows-2 gap-5 ">
              <div className=" border-red-400 lg;pr-10 lg:border-r flex flex-col items-center lg:items-end justify-center ">
                <p className=" text-4xl font-bold ">What Our Loving</p>
                <p className=" text-4xl font-bold ">Clients Say</p>
              </div>
              <p className=" lg:px-10 md:px-10 box-border text-justify grid items-center text-md ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
                maxime mollitia earum delectus asperiores distinctio modi ipsam
                a rerum, fuga minus. Ullam labore iste beatae
              </p>
            </div>
          </div>
        </div>
        <div className=" grid items-center justify-center">
          <Testimonial />
        </div>
      </div>
    </div>
  );
}

export default Row8;
