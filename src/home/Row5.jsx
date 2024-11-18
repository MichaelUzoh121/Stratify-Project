// import React from 'react'
// import image1 from '../image/project1.jpg'
// import image2 from '../image/project2.jpg'
// // import image3 from '../image/project3.jpg'

// function Row5() {
//   return (
//     <div className=' h-[40vh] w-full bg-black grid grid-cols-3 '>
//       <div className='grid items-center justify-center bg-cover bg-center bg-[#0009] bg-blend-darken ' style={{backgroundImage: `url(${image1})`}} >
//         <div>
//           <div className=' flex items-center gap-3 text-white '>
//           <p>Cooporate Management</p>
//           <div className="inline h-1 w-10 bg-red-500"></div>
//           </div>
//           <p className=' text-3xl text-white '>Global Management <br /> Apps</p>
//         </div>
//       </div>
//       <div className='grid items-center justify-center bg-cover bg-center bg-[#0009] bg-blend-darken ' style={{backgroundImage: `url(${image2})`}} >
//         <div>
//           <div className=' flex items-center gap-3 text-white '>
//           <p>Financial Initiatives</p>
//           <div className="inline h-1 w-10 bg-red-500"></div>
//           </div>
//           <p className=' text-3xl text-white '> Planning & Task <br /> Completion</p>
//         </div>
//       </div>
//       <div className='grid items-center justify-center bg-cover bg-center bg-[#0009] bg-blend-darken ' style={{backgroundImage: `url(${image2})`}} >
//         <div>
//           <div className=' flex items-center gap-3 text-white '>
//           <p>Cooporate Management</p>
//           <div className="inline h-1 w-10 bg-red-500"></div>
//           </div>
//           <p className=' text-3xl text-white '>Private Workshop <br /> Assistant</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Row5



// import React, { useEffect, useRef } from 'react';
// import image1 from '../image/project1.jpg';
// import image2 from '../image/project2.jpg';
// import image3 from '../image/project1.jpg';

// function Row5() {
//   const sliderRef = useRef(null);

//   // Set up the images and content
//   const images = [
//     { src: image1, title: "Global Management Apps", subtitle: "Corporate Management" },
//     { src: image2, title: "Planning & Task Completion", subtitle: "Financial Initiatives" },
//     { src: image3, title: "Private Workshop Assistant", subtitle: "Corporate Management" },
//   ];

//   useEffect(() => {
//     const slider = sliderRef.current;
//     const slideWidth = slider.clientWidth / images.length; // Calculate width of each slide
//     let position = 0;

//     const moveSlider = () => {
//       position += 1;
//       if (position >= slideWidth * images.length) {
//         position = 0; // Reset to the beginning to create infinite loop
//       }
//       slider.style.transform = `translateX(-${position}px)`;
//     };

//     const interval = setInterval(moveSlider, 20); // Adjust the speed by changing interval time
//     return () => clearInterval(interval); // Clean up interval on component unmount
//   }, [images.length]);

//   return (
//     <div className="h-[40vh] w-full overflow-hidden relative bg-black">
//       <div
//         ref={sliderRef}
//         className="flex"
//         style={{
//           width: `${images.length * 100}%`, // Set width for all slides in one row
//           animation: 'slide 20s linear infinite', // Infinite slide animation
//         }}
//       >
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 h-[40vh] w-[50vw] flex items-center justify-center bg-cover bg-center bg-[#0009] bg-blend-darken"
//             style={{ backgroundImage: `url(${image.src})` }}
//           >
//             <div className="text-center">
//               <div className="flex items-center justify-center gap-3 text-white">
//                 <p>{image.subtitle}</p>
//                 <div className="inline h-1 w-10 bg-red-500"></div>
//               </div>
//               <p className="text-3xl text-white">{image.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Row5;


import React, { useEffect, useRef } from 'react';
import image1 from '../image/project1.jpg';
import image2 from '../image/project2.jpg';
import image3 from '../image/project1.jpg';

function Row5() {
  const sliderRef = useRef(null);

  // Set up the images and content
  const images = [
    { src: image1, title: "Global Management Apps", subtitle: "Corporate Management" },
    { src: image2, title: "Planning & Task Completion", subtitle: "Financial Initiatives" },
    { src: image3, title: "Private Workshop Assistant", subtitle: "Corporate Management" },
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    let position = 0;

    const moveSlider = () => {
      position += 1;
      if (position >= slider.scrollWidth / 2) {
        position = 0; // Reset to the beginning for seamless looping
      }
      slider.style.transform = `translateX(-${position}px)`;
    };

    const interval = setInterval(moveSlider, 20); // Adjust the speed by changing interval time
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className=" h-[30vh]  lg:h-[40vh] w-full overflow-hidden relative bg-black">
      <div
        ref={sliderRef}
        className="flex"
        style={{
          width: `${images.length * 100}%`, // Double the width to account for duplicated slides
          display: 'flex',
        }}
      >
        {[...images, ...images].map((image, index) => ( // Duplicate images array for seamless looping
          <div
            key={index}
            className="flex-shrink-0 h-[40vh] w-[50%] md:w-[60vw] lg:w-[50vw]  flex items-center justify-center bg-cover bg-center bg-[#0009] bg-blend-darken"
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 text-white">
                <p>{image.subtitle}</p>
                <div className="inline h-1 w-10 bg-red-500"></div>
              </div>
              <p className="text-3xl text-white">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row5;
