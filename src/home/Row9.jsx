import React from "react";
import image1 from "../image/blog1.jpg";
import image2 from "../image/blog2.jpg";
import image3 from "../image/blog3.jpg";


function Row9() {
  return (
    <div className=" h-[245vh] md:h-[150vh] lg:h-[130vh] w-full bg-[#F0F5F9] grid items-center justify-items-center ">
      <div className=" h-[225vh] md:h-[130vh] lg:h-[110vh] w-[90vw] md:grid-rows-[10%_80%]  grid lg:grid-rows-[0.6fr_2fr] gap-5 ">
        <div className="grid items-center justify-center">
          <div className=" flex flex-col gap-2 ">
            <div className="flex gap-3 items-center justify-center">
              <div className="inline h-1 w-10 bg-red-500"></div>
              <p className="text-lg grid uppercase text-center">
                Read the articles
              </p>
              <div className="inline h-1 w-10 bg-red-500"></div>
            </div>
            <p className="text-4xl font-bold">What’s Happening</p>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          <div className=" grid grid-rows-[1.2fr_1fr] ">
            <div
              className="bg-no-repeat bg-cover "
              style={{ backgroundImage: `url(${image1})` }}
            ></div>
            <div className=" grid grid-rows-[1fr_1.5fr_2fr_1fr] ">
              <div className=" grid grid-cols-[2fr_1fr] ">

                <div className="  flex items-center justify-start gap-4 ">
                  <p>By Stratify</p>
                  <div className=" h-3 w-[0.5px] bg-black "></div>
                  <p>January 31, 2024</p>
                </div>
                <div></div>
              </div>
              <div className=" items-center grid">
                <p className=" text-2xl font-bold ">
                  Take Action For Benefits Of Your Business
                </p>
              </div>
              <div className=" grid items-center ">
                <p className=" text-justify ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum deserunt, repellendus eius magnam qui laudantium eveniet
                  
                </p>
              </div>
              <div className=" grid items-center ">
                <p className=" text-sm ">Read more</p>
              </div>
            </div>
          </div>

          <div className=" grid grid-rows-[1.2fr_1fr] ">
            <div
              className="bg-no-repeat bg-cover "
              style={{ backgroundImage: `url(${image2})` }}
            ></div>
            <div className=" grid grid-rows-[1fr_1.5fr_2fr_1fr] ">
              <div className=" grid grid-cols-[2fr_1fr] ">
                
                <div className="  flex items-center justify-start gap-4 ">
                  <p>By Stratify</p>
                  <div className=" h-3 w-[0.5px] bg-black "></div>
                  <p>May 3, 2024</p>
                </div>
                <div></div>
              </div>
              <div className=" items-center grid">
                <p className=" text-2xl font-bold ">
                Improve Your Investment Through Money
                </p>
              </div>
              <div className=" grid items-center ">
                <p className=" text-justify ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum deserunt, repellendus eius magnam qui laudantium eveniet
                  
                </p>
              </div>
              <div className=" grid items-center ">
                <p className=" text-sm ">Read more</p>
              </div>
            </div>
          </div>

          <div className=" grid grid-rows-[1.2fr_1fr] ">
            <div
              className="bg-no-repeat bg-cover "
              style={{ backgroundImage: `url(${image3})` }}
            ></div>
            <div className=" grid grid-rows-[1fr_1.5fr_2fr_1fr] ">
              <div className=" grid grid-cols-[2fr_0.5fr]  lg:grid-cols-[2fr_1fr] md:grid-cols-[2fr_1fr]  ">
                
                <div className="  flex items-center justify-start gap-4 ">
                  <p>By Stratify</p>
                  <div className=" h-3 w-[0.5px] bg-black "></div>
                  <p>November 31, 2024</p>
                </div>
                <div></div>
              </div>
              <div className=" items-center grid">
                <p className=" text-2xl font-bold ">
                Isolate & Reframe Beliefs For The Future
                </p>
              </div>
              <div className=" grid items-center ">
                <p className=" text-justify ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum deserunt, repellendus eius magnam qui laudantium eveniet
                  
                </p>
              </div>
              <div className=" grid items-center ">
                <p className=" text-sm ">Read more</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Row9;
