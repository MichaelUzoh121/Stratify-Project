import React, { useState } from "react";
import Slider from "react-slick";
import Face1 from '../image/Face1.jpg';
import Face2 from '../image/Face2.jpg';
import Face3 from '../image/Face3.jpg';

const testimonials = [
  {
    text: "The services provided were exceptional. I highly recommend this team!",
    name: "Christine Eva",
    role: "Senior Manager",
    image: Face1,
  },
  {
    text: "Working with them has been a transformative experience for our business.",
    name: "John Doe",
    role: "Project Manager",
    image: Face2,
  },
  {
    text: "Amazing quality and attention to detail. Will definitely work with them again.",
    name: "Joseph Ola",
    role: "CEO",
    image: Face3,
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active slide index

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setActiveIndex(next), // Update the active index before each change
  };

  return (
    <div className="w-full max-w-[80vw] lg:max-w-3xl md:max-w-2xl lg:mx-auto lg:p-4 text-center lg:h-[60vh] ">
      {/* Testimonial slider */}
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6">
            <p className="text-lg text-gray-700 lg:mb-6">{testimonial.text}</p>
            <div className="flex flex-col items-center">
              {/* Background image div instead of <img> */}
              <div
                style={{ backgroundImage: `url(${testimonial.image})` }}
                className="w-24 h-24 rounded-full bg-center bg-cover mb-4"
              />
              <h4 className="font-semibold text-lg text-gray-900">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Client images below the testimonial text */}
      <div className="flex justify-center mt-6 space-x-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)} // Change to the clicked slide
            style={{
              backgroundImage: `url(${testimonial.image})`,
            }}
            className={`w-12 h-12 rounded-full cursor-pointer bg-center bg-cover transition-opacity duration-300 ${
              activeIndex === index ? "opacity-100" : "opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
