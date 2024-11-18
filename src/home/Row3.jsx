import React from "react";
import Test from "../new/Test";
import image from "../image/statistic.png";
import image2 from "../image/user-profiles.png";

function Row3() {
  return (
    <div className="md:h-[100vh] lg:h-[100vh] w-full bg-[#F0F5F9] grid items-center justify-center h-[170vh]">
      <div className=" lg:h-[80vh] lg:w-[90vw] w-[90vw] md:h-[90vh] md:w-[90vw] h-[150vh]  grid-rows-2 grid md:grid-rows-2 lg:grid-cols-2 gap-6 ">
        <div className="grid lg:h-[80vh] w-full">
          <Test />
        </div>

        <div className="lg:h-[80vh] w-full grid  ">
          <div className="grid">
            <div className="grid grid-rows-[0.3fr_0.6fr_0.5fr_0.8fr_0.8fr] h-full w-full gap-3 ">
              <div className=" uppercase flex gap-3 items-center ">
                <p className="text-xl">About Stratify</p>
                <div className=" inline h-1 w-10 bg-red-500 "></div>
                {/* <p></p> */}
              </div>
              <div className=" grid ">
                <p className=" text-3xl font-bold ">
                  Largest Demand Partnership Buidling Financial Experts
                </p>
              </div>
              <div className="grid justify-center text-justify items-center lg:items-start ">
                <p className=" ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  necessitatibus autem non distinctio.
                </p>
              </div>
              <div className=" grid grid-cols-[0.3fr_1fr] gap-3 ">
                <div className="">
                  <div className=" flex items-center justify-center h-full ">
                    <img src={image} className="h-20" />
                  </div>
                </div>
                <div className="grid items-center">
                  <p className="text-xl font-bold ">Support On Raising Funds</p>
                  <p>
                    Veniam quis nostrud exercitason ullamco ipsum laboris sed ut
                    perspiciatis unde omnis iste natus.
                  </p>
                </div>
              </div>
              <div className=" grid grid-cols-[0.3fr_1fr] gap-3 ">
                <div className="">
                  <div className=" flex items-center justify-center h-full ">
                    <img src={image2} className="h-20" />
                  </div>
                </div>
                <div className="grid items-center">
                  <p className="text-xl font-bold ">
                    Outsourced Consulting Business
                  </p>
                  <p>
                    Veniam quis nostrud exercitason ullamco ipsum laboris sed ut
                    perspiciatis unde omnis iste natus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row3;
