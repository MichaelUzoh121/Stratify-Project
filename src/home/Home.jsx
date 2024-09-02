import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Row4 from "./Row4";
import Row5 from "./Row5";
import Row6 from "./Row6";
import Row7 from "./Row7";
import Row8 from "./Row8";
import Row9 from "./Row9";
import Row10 from "./Row10";
import image from "../image/image7.jpg";

function Home() {
  return (
    <div
      className="grid w-full h-full bg-no-repeat bg-fixed bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row6 />
      <Row7 />
      <Row8 />
      <Row9 />
      <Row10 />
    </div>
  );
}

export default Home;
