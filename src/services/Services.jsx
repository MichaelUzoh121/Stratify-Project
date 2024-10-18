import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="h-[100vh] fixed w-full bg-black grid grid-rows-[1fr_0.5fr] ">
      <div className=" grid items-center justify-center">
      <p className=" text-red-600 text-4xl uppercase font-bold animate-pulse font-mono ">
        Maintenance Ongoing
      </p>
      </div>
      <div className="grid justify-center items-center">
        <Link to='/'>
          <button className=" shadow-md text-white border-2 h-10 w-20 border-red-200 ">Go Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Services;
