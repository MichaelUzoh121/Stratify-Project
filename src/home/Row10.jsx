// import React from 'react'
// import image1 from '../image/clients1.png'
// import image2 from '../image/clients2.png'
// import image3 from '../image/clients3.png'
// import image4 from '../image/clients4.png'
// // import image5 from '../image/clients5.png'
// import image5 from '../image/clients5.png'

// function Row10() {
//   return (
//     <div className=' h-[45vh] w-full bg-white  grid items-center justify-center '>
//       <div className=' h-[35vh] w-[90vw] grid grid-cols-5 '>
//       <div className=' bg-white grid  p-10 '>
//           <div className=' bg-no-repeat bg-cover' style={{ backgroundImage: `url(${image1})` }}></div>
//         </div>
//         <div className=' bg-white grid  p-10 '>
//           <div className=' bg-no-repeat bg-cover' style={{ backgroundImage: `url(${image2})` }}></div>
//         </div>
//         <div className=' bg-white grid  p-10 '>
//           <div className=' bg-no-repeat bg-cover' style={{ backgroundImage: `url(${image3})` }}></div>
//         </div>
//         <div className=' bg-white grid  p-10 '>
//           <div className=' bg-no-repeat bg-cover' style={{ backgroundImage: `url(${image4})` }}></div>
//         </div>
//         <div className=' bg-white grid  p-10 '>
//           <div className=' bg-no-repeat bg-cover' style={{ backgroundImage: `url(${image5})` }}></div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Row10



import React, { useEffect, useRef } from 'react';
import image1 from '../image/clients1.png';
import image2 from '../image/clients2.png';
import image3 from '../image/clients3.png';
import image4 from '../image/clients4.png';
import image5 from '../image/clients5.png';

function Row10() {
  const images = [image1, image2, image3, image4, image5];
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let position = 0;

    const autoSlide = () => {
      position += slider.offsetWidth;
      if (position >= slider.scrollWidth) {
        position = 0; // Reset position to the start
      }
      slider.scrollTo({
        left: position,
        behavior: 'smooth', // Smooth scrolling
      });
    };

    const interval = setInterval(autoSlide, 3000); // 3-second interval
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className=" h-[25vh] md:h-[30vh]  lg:h-[40vh] w-full bg-white overflow-hidden flex items-center justify-center">
      {/* Slider container */}
      <div
        ref={sliderRef}
        className="flex w-[80vw] h-[35vh] overflow-x-scroll scrollbar-hide"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[27vw]  h-full bg-contain bg-center bg-no-repeat "
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Row10;
