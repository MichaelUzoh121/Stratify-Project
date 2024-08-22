import React from 'react'
import Header from '../new/Header';
import BackgroundSlider from './Bgslider'; 

function Row1() {
  return (
    <div className=" h-[100vh] w-full ">
        <BackgroundSlider />

      <div className="relative z-10 grid grid-rows-[0.16fr_1fr] ">
        <div>
          <Header />
        </div>
      </div>
    </div>
  )
}

export default Row1