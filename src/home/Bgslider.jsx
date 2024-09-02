
import React, { useState, useEffect } from 'react';
import image1 from '../image/image1.webp';
import image2 from '../image/image4.jpg';
import image3 from '../image/image6.webp';

const images = [
  {
    // filter: 'brightness(0.8)',
    src: image1,
    style: { transform: 'scale(1.1)', backgroundPosition: 'top' }, 
  },
  {
    // filter: 'sepia(0.4) brightness(0.9) contrast()',
    src: image2,
    style: { transform: 'scale(1.1)', backgroundPosition: 'center',  },
  },
  {
    src: image3,
    style: { transform: 'scale(1.1)', backgroundPosition: 'top' },
  },
];

const Bgslider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="absolute w-full overflow-hidden h-[100vh]">
      <div
        className=" inset-0 w-full h-full bg-no-repeat bg-cover transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${images[currentIndex].src})`,
          ...images[currentIndex].style,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-no-repeat bg-cover transition-transform duration-1000 ease-in-out ${
              index === currentIndex ? 'animate-zoom' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image.src})`,
              opacity: index === currentIndex ? 1 : 0,
              ...image.style,
            }}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 h-[50px] w-[50px] transform -translate-y-1/2 hover:bg-gray-400 transition-all duration-1000 text-white rounded-full z-20"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 h-[50px] w-[50px] transform -translate-y-1/2 hover:bg-gray-400 transition-all duration-1000 text-white rounded-full z-20"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Bgslider;
