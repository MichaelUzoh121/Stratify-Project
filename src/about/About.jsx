// import React from 'react'

// function About() {
//   return (
//     <div className='h-[100vh] w-full bg-slate-700'>About</div>
//   )
// }

// export default About

// import React, { useState, useEffect } from 'react';
// import image1 from '../image/image1.jpg'
// import image2 from '../image/image2.jpg'
// import image3 from '../image/image3.jpg'


// const images = [
//     image1, image2, image3
// ];

// const Menu = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             nextSlide();
//         }, 3000);
//         return () => clearInterval(timer);
//     }, [currentIndex]);

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//     };

//     return (
//         <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg h-[100vh]">
//             <div
//                 className="flex transition-transform duration-500 ease-in-out"
//                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//                 {images.map((image, index) => (
//                     <div key={index} className="flex-shrink-0 w-full">
//                         <img
//                             src={image}
//                             alt={`Slide ${index + 1}`}
//                             className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-110"
//                         />
//                     </div>
//                 ))}
//             </div>
//             <button
//                 onClick={prevSlide}
//                 className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//             >
//                 &#10094;
//             </button>
//             <button
//                 onClick={nextSlide}
//                 className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//             >
//                 &#10095;
//             </button>
//         </div>
//     );
// };

// export default Menu;

// import React, { useState, useEffect } from 'react';
// import image1 from '../image/image1.jpg'
// import image2 from '../image/image2.jpg'
// import image3 from '../image/image3.jpg'

// const images = [image1, image2, image3];

// const Menu = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 3000);
//     return () => clearInterval(timer);
//   }, [currentIndex]);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg h-[100vh]">
//       <div
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((image, index) => (
//           <div key={index} className="flex-shrink-0 w-full">
//             <img
//                 src={image}
//                 alt={`Slide ${index + 1}`}
//                 className={`w-full h-auto object-cover transition-transform duration-500 ${
//                 index === currentIndex ? 'scale-110' : 'scale-100'
//                 }`}
//             />
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//       >
//         &#10094;
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//       >
//         &#10095;
//       </button>
//     </div>
//   );
// };

// export default Menu;



import React, { useState, useEffect } from 'react';
import image1 from '../image/image1.webp';
import image2 from '../image/image2.jpg';
import image3 from '../image/image3.webp';

const images = [image1, image2, image3];

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg h-[100vh]">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={`w-full h-auto object-cover transition-transform duration-700 ${
                index === currentIndex ? 'animate-zoom' : ''
              }`}
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Menu;
