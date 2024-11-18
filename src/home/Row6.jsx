import React from "react";
import Test1 from "../new/Test1.jsx";

function Row6({ percentage }) {
  const radius = 40; // Radius of the circle
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className=" h-[200vh] md:h-[200vh] lg:h-[120vh] w-full  bg-white grid items-center justify-center">
      <div className=" h-[180vh] md:h-[180vh] lg:h-[100vh] w-[90vw] md:grid-rows-[2fr_1fr] lg:grid grid-cols-[1.3fr_1fr] gap-3 ">
        <div className="   grid grid-rows-[1.5fr_2fr]  md:grid-rows-[1fr_2fr] lg:grid-rows-[1.5fr_2fr]">
          <div className=" flex flex-col gap-5  ">
            <div className=" flex flex-col gap-4 ">
              <div className=" gap-3 items-center h-[7vh] flex ">
                <p className=" text-xl uppercase ">Annual Stats</p>
                <div className=" inline h-1 w-10 bg-red-500 "></div>
              </div>
              <div className=" ">
                <p className=" text-3xl md:text-4xl lg:text-4xl font-bold ">
                  Graph Shows Net Value <br /> Profit Assembling
                </p>
              </div>
            </div>

            <div>
              <p className=" text-md text-justify ">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
                commodi ut quibusdam fuga autem nemo, debitis tempora. Deserunt
                ipsa rem veniam eligendi, nam velit accusamus.Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Numquam aliquam fugit
                culpa eligendi animi consequuntur sit mollitia perspiciatis esse
                soluta?
              </p>
            </div>
          </div>
          <div className="  grid items-center justify-items-center  ">
            <div className=" md:h-[50vh] lg:h-[50vh] lg:w-[80%]  md:w-[90%] grid grid-cols-1 lg:grid-cols-2 ">
              <div className=" grid grid-rows-[2fr_1.3fr] ">
                <div className=" grid items-center justify-items-center ">
                  <div className="flex flex-col items-center">
                    <div className="relative w-40 h-40 ">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="50%"
                          cy="50%"
                          r="42%"
                          fill="none"
                          stroke="#E5E7EB" // light gray for the background circle
                          strokeWidth="18"
                        />
                        <circle
                          cx="50%"
                          cy="50%"
                          r="42%"
                          fill="none"
                          stroke="#1D4ED8" // dark blue for the progress
                          strokeWidth="18"
                          strokeDasharray="300.2" // 2 * Math.PI * r (approximate)
                          strokeDashoffset={300.2 - (300.2 * percentage) / 100}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-gray-800">
                        {/* {percentage}% */}
                        75%
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" ">
                  <p className="mt-2 text-center text-gray-700 text-xl">
                    Global Flexibility <br /> Investment
                  </p>
                  <p className="text-center text-gray-500 text-xl ">
                    {/* Up to {percentage}% Assets */}
                    Up to 75% Assets
                  </p>
                </div>
              </div>

              <div className=" grid grid-rows-[2fr_1.3fr] ">
                <div className=" grid items-center justify-items-center ">
                  <div className="flex flex-col items-center">
                    <div className="relative w-40 h-40 ">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="50%"
                          cy="50%"
                          r="40%"
                          fill="none"
                          stroke="#E5E7EB" // light gray for the background circle
                          strokeWidth="18"
                        />
                        <circle
                          cx="50%"
                          cy="50%"
                          r="40%"
                          fill="none"
                          stroke="#ff0000" // dark blue for the progress
                          strokeWidth="18"
                          strokeDasharray="200.2" // 2 * Math.PI * r (approximate)
                          strokeDashoffset={150.2 - (150.2 * percentage) / 100}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-gray-800">
                        {/* {percentage}% */}
                        50%
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" ">
                  <p className="mt-2 text-center text-gray-700 text-xl">
                    Security Financial <br /> Solutions
                  </p>
                  <p className="text-center text-gray-500 text-xl ">
                    {/* Up to {percentage}% Assets */}
                    Up to 50% Efficient
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" p-5 box-border ">
          <Test1 />
        </div>
      </div>
    </div>
  );
}

export default Row6;
