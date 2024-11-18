import React from "react";
import image from "../image/rocket.png";
import image1 from "../image/light-bulb.png";
import image2 from "../image/financial-profit.png";
import image3 from "../image/logical-thinking.png";
import image4 from "../image/value.png";
import image5 from "../image/interest-rate.png";

function Row4() {
  return (
    <div className=" h-[200vh] md:h-[150vh] lg:h-[130vh] w-full bg-white grid items-center justify-center ">
      <div className=" h-[190vh] md:h-[130vh]  lg:h-[110vh] w-[90vw] grid md:grid-rows-[1.2fr_3fr] lg:grid-rows-[1fr_3fr] gap-12 ">
        <div className="grid items-center justify-items-center h-full w-full ">
          <div className=" h-[40vh] md:h-[28vh] lg:h-[22vh] w-[90%] grid lg:grid-rows-[1fr_2fr] gap-2">
            <div className="  grid lg:grid-cols-2">
              <p className=" flex gap-3 items-center justify-center lg:justify-end lg:pr-12 text-xl uppercase ">
                <div className=" inline h-1 w-10 bg-red-500 "></div>
                What we provide
              </p>
            </div>
            <div className=" grid grid-rows-1 gap-4 md:gap-5 lg:gap-0 lg:grid-cols-2 ">
              <div className=" border-red-400 lg:pr-10 lg:border-r flex flex-col items-center lg:items-end lg:justify-center ">
                <p className=" text-3xl md:text-4xl lg:text-4xl font-bold ">Get Exceptional</p>
                <p className=" text-3xl md:text-4xl lg:text-4xl font-bold ">Service For Growth</p>
              </div>
              <p className=" lg:px-10 box-border text-center lg:text-justify grid items-center text-md ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
                maxime mollitia earum delectus asperiores distinctio modi ipsam
                a rerum, fuga minus. Ullam labore iste beatae?
              </p>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-3 lg:gap-3">
          <div className="  grid  items-center">
            <div className="  h-full w-full md:h-[90%] md:w-[80%] lg:h-[90%] lg:w-[80%] grid grid-rows-[0.5fr_2fr] gap-5 border-red-400 border-b ">
              <div className=" grid items-center ">
                <p className=" text-xl font-bold ">Planning Strategies</p>
              </div>
              <div className=" grid grid-cols-[1.2fr_2fr] ">
                <div className=" grid  justify-center text-red-500 ">
                  <img src={image} className=" h-14 mt-3 " />
                </div>
                <div className=" flex flex-col gap-3 ">
                  <p className=" text-sm text-justify ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, saepe.
                  </p>
                  <p className=" text-sm ">Read more</p>
                </div>
              </div>
            </div>
          </div>
          <div className="  grid  items-center">
            <div className=" h-full w-full md:h-[90%] md:w-[80%] lg:h-[90%] lg:w-[80%] grid grid-rows-[0.5fr_2fr] gap-5 border-red-400 border-b ">
              <div className=" grid items-center ">
                <p className=" text-xl font-bold ">Financial Advices</p>
              </div>
              <div className=" grid grid-cols-[1.2fr_2fr] ">
                <div className=" grid  justify-center text-red-500 ">
                  <img src={image1} className=" h-14 mt-3 " />
                </div>
                <div className=" flex flex-col gap-3 ">
                  <p className=" text-sm text-justify ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, saepe.
                  </p>
                  <p className=" text-sm ">Read more</p>
                </div>
              </div>
            </div>
          </div>
          <div className="  grid  items-center">
            <div className="  h-full w-full md:h-[90%] md:w-[80%] lg:h-[90%] lg:w-[80%] grid grid-rows-[0.5fr_2fr] gap-5 border-red-400 border-b ">
              <div className=" grid items-center ">
                <p className=" text-xl font-bold ">Manage Investment</p>
              </div>
              <div className=" grid grid-cols-[1.2fr_2fr] ">
                <div className=" grid  justify-center text-red-500 ">
                  <img src={image2} className=" h-14 mt-3 " />
                </div>
                <div className=" flex flex-col gap-3 ">
                  <p className=" text-sm text-justify ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, saepe.
                  </p>
                  <p className=" text-sm ">Read more</p>
                </div>
              </div>
            </div>
          </div>
          <div className="  grid  items-center">
            <div className="  h-full w-full md:h-[90%] md:w-[80%] lg:h-[90%] lg:w-[80%] grid grid-rows-[0.5fr_2fr] gap-5 border-red-400 border-b ">
              <div className=" grid items-center ">
                <p className=" text-xl font-bold ">Process Development</p>
              </div>
              <div className=" grid grid-cols-[1.2fr_2fr] ">
                <div className=" grid  justify-center text-red-500 ">
                  <img src={image3} className=" h-14 mt-3 " />
                </div>
                <div className=" flex flex-col gap-3 ">
                  <p className=" text-sm text-justify ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, saepe.
                  </p>
                  <p className=" text-sm ">Read more</p>
                </div>
              </div>
            </div>
          </div>
          <div className="  grid  items-center">
            <div className="  h-full w-full md:h-[90%] md:w-[80%] lg:h-[90%] lg:w-[80%] grid grid-rows-[0.5fr_2fr] gap-5 border-red-400 border-b ">
              <div className=" grid items-center ">
                <p className=" text-xl font-bold ">Wealth Marketing</p>
              </div>
              <div className=" grid grid-cols-[1.2fr_2fr] ">
                <div className=" grid  justify-center text-red-500 ">
                  <img src={image4} className=" h-14 mt-3 " />
                </div>
                <div className=" flex flex-col gap-3 ">
                  <p className=" text-sm text-justify ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, saepe.
                  </p>
                  <p className=" text-sm ">Read more</p>
                </div>
              </div>
            </div>
          </div>
          <div className="  grid  items-center">
            <div className="  h-full w-full md:h-[90%] md:w-[80%] lg:h-[90%] lg:w-[80%] grid grid-rows-[0.5fr_2fr] gap-5 border-red-400 border-b ">
              <div className=" grid items-center ">
                <p className=" text-xl font-bold ">Business Tax Reforms</p>
              </div>
              <div className=" grid grid-cols-[1.2fr_2fr] ">
                <div className=" grid  justify-center text-red-500 ">
                  <img src={image5} className=" h-14 mt-3 " />
                </div>
                <div className=" flex flex-col gap-3 ">
                  <p className=" text-sm text-justify ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, saepe.
                  </p>
                  <p className=" text-sm ">Read more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row4;
