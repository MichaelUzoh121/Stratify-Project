// import React from "react";
// import image from "../image/logo2.png";
// import { FaUser } from "react-icons/fa";
// import { FaEnvelope } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";
// import { IoLocationOutline } from "react-icons/io5";
// import { CiMail } from "react-icons/ci";
// import { CiPhone } from "react-icons/ci";

// function Footer() {
//   return (
//     <div className=" min-h-[200vh] lg:h-[120vh] bg-black w-full grid  lg:grid-rows-[0.8fr_3fr]">
//       <div className=" min-h-[35vh] lg:h-full bg-gradient-to-r from-red-800 to-black grid items-center justify-items-center  ">
//         <div className=" min-h-[25vh] w-[85%] md:w-[90%] lg:w-[90%] grid grid-rows-[2fr_1.5fr] lg:grid-cols-[3fr_0.7fr] lg:grid-rows-none ">
//           <div className=" grid items-center ">
//             <p className=" text-3xl md:text-3xl lg:text-3xl font-bold text-white  ">
//               We help you to unlock & unleash the power within.
//             </p>
//           </div>
//           <div className=" grid items-center ">
//             <button className=" lg:h-[12vh] h-[9vh] w-[45vw] md:h-[10vh] md:w-[30vw] lg:w-[15vw] hover:bg-red-500 border-4 transition-all duration-[0.5s] border-white grid items-center justify-center  ">
//               <p className=" text-md uppercase font-bold text-white ">
//                 Get In touch
//               </p>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className=" bg-white grid h-full w-full ">
//         <div className="  bg-[#0A1C2D] grid-rows-[1fr_2fr_0.2fr] gap-3  md:grid-rows-[0.7fr_2fr_0.3fr]   grid lg:grid-rows-[0.7fr_2fr_0.5fr] ">
//           <div className="  grid lg:grid-cols-[0.2fr_1fr_1fr_1fr_1fr_0.2fr] md:grid-cols-2 ">
//             <div className=" hidden lg:grid border-b border-b-slate-700 border-r border-r-slate-700"></div>
//             <div className=" lg:border-b border-b-slate-700 lg:border-r gap-2 border-r-slate-700 flex flex-col items-center justify-center">
//               <p className=" text-5xl text-white font-bold ">298</p>
//               <p className=" text-slate-500 ">Expert Consultant</p>
//             </div>
//             <div className=" lg:border-b border-b-slate-700 lg:border-r gap-2 border-r-slate-700 flex flex-col items-center justify-center">
//               <p className=" text-5xl text-white font-bold ">973</p>
//               <p className=" text-slate-500 ">Our Trusted Clients</p>
//             </div>
//             <div className=" lg:border-b md:border-b border-b-slate-700 lg:border-r gap-2 border-r-slate-700 flex flex-col items-center justify-center">
//               <p className=" text-5xl text-white font-bold ">560</p>
//               <p className=" text-slate-500 ">Orders in Queue</p>
//             </div>
//             <div className=" border-b border-b-slate-700 lg:border-r gap-2 border-r-slate-700 flex flex-col items-center justify-center">
//               <p className=" text-5xl text-white font-bold ">800</p>
//               <p className=" text-slate-500 ">Projects Delivered</p>
//             </div>
//             <div className=" hidden lg:grid border-b border-b-slate-700 border-r border-r-slate-700"></div>
//           </div>

//           <div className=" bg-[#0A1C2D] grid items-center justify-items-center h-[130vh] w-full lg:h-full   ">
//             <div className="   grid lg:grid-cols-[1.3fr_2fr_1fr] gap-3 h-[120vh]  lg:h-[50vh] w-[90vw] ">
//               <div className=" grid  grid-rows-[1fr_1fr_1.5fr] lg:h-fit ">
//                 <div className=" grid h-full w-full items-center lg:justify-center  ">
//                   <img src={image} className=" h-[90px] w-54 text-white " />
//                 </div>
//                 <div className=" grid items-center ">
//                   <p className=" text-sm text-justify p-2 text-slate-200 ">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Quasi distinctio temporibus accusantium nostrum nisi, beatae
//                     nemo voluptatum dicta?
//                   </p>
//                 </div>
//                 <div className=" grid grid-rows-[2fr_1fr] ">
//                   <div className=" grid grid-rows-3 ">
//                     <div className=" flex items-center gap-4 ">
//                       <div className=" text-red-500 grid items-center justify-center ">
//                         <IoLocationOutline />
//                       </div>
//                       <div className=" grid items-center   ">
//                         <p className=" text-sm text-white ">
//                           29 Ogbodu Street, Festac Town, Lagos.
//                         </p>
//                       </div>
//                     </div>
//                     <div className=" flex items-center gap-4 ">
//                       <div className=" text-red-500 grid items-center justify-center ">
//                         <CiMail />
//                       </div>
//                       <div className=" flex items-center gap-2  ">
//                         <p className=" text-sm text-white ">Email:</p>
//                         <p className=" text-sm text-white hover:text-red-500 transition-all duration-[0.5s] ">
//                           <a href="">stratifygroup@info.com</a>
//                         </p>
//                       </div>
//                     </div>
//                     <div className=" flex items-center gap-4 ">
//                       <div className=" text-red-500 grid items-center justify-center ">
//                         <CiPhone />
//                       </div>
//                       <div className=" flex gap-2 items-center   ">
//                         <p className=" text-sm text-white ">Phone:</p>
//                         <p className=" text-sm text-white hover:text-red-500 transition-all duration-[0.5s] ">
//                           <a href="">+1 (212) 689-439-8539</a>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex gap-2 items-center ">
//                     <div className=" h-8 w-8 rounded-full text-slate-300 grid items-center justify-center ">
//                       <FaGithub />
//                     </div>
//                     <div className=" h-8 w-8 rounded-full text-slate-300 grid items-center justify-center ">
//                       <FaFacebook />
//                     </div>
//                     <div className=" h-8 w-8 rounded-full text-slate-300 grid items-center justify-center ">
//                       <FaXTwitter />
//                     </div>
//                     <div className=" h-8 w-8 rounded-full text-slate-300 grid items-center justify-center ">
//                       <FaLinkedin />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="  grid lg:grid-cols-2 grid-rows-2 gap-3 lg:h-[50vh] ">
//                 <div className="grid items-center lg:justify-items-center ">
//                   <div className=" grid grid-rows-[0.5fr_2fr] lg:h-[45vh] w-[80%]">
//                     <div className="   flex gap-3 items-center">
//                       <p className=" text-xl text-white ">Useful Link</p>
//                       <div className="inline h-1 w-10 bg-red-500"></div>
//                     </div>
//                     <div className=" flex flex-col justify-center text-white text-base ">
//                       <p>Home</p>
//                       <p>Home</p>
//                       <p>Home</p>
//                       <p>Home</p>
//                       <p>Home</p>
//                       <p>Home</p>
//                       <p>Home</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="grid items-center lg:justify-items-center ">
//                   <div className=" grid grid-rows-[0.5fr_2fr] lg:h-[45vh] w-[80%]">
//                     <div className="   flex gap-3 items-center">
//                       <p className=" text-xl text-white ">What We Do</p>
//                       <div className="inline h-1 w-10 bg-red-500"></div>
//                     </div>
//                     <div className=" flex flex-col justify-center text-white text-base ">
//                       <p>Home</p>
//                       <p>Home</p>
//                       <p>Home</p>
//                       <p>Home</p>
//                       <p>Home</p>
//                       <p>Home</p>
//                       <p>Home</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className=" grid items-center lg:justify-items-center pt-3 lg:pt-0 lg:h-fit ">
//                 <div className=" lg:h-[45vh] w-[90%] grid grid-rows-[0.5fr_2fr] ">
//                   <div className="   flex gap-3 items-center lg:justify-center">
//                     <p className=" text-xl text-white uppercase ">Newsletter</p>
//                     <div className="inline h-1 w-10 bg-red-500"></div>
//                   </div>
//                   <div className=" grid ">
//                     <div className=" flex flex-col gap-5 ">
//                       <p className=" text-white ">
//                         Get in your inbox the latest News
//                       </p>

//                       <div className="flex items-center border border-gray-500 focus-within:border-red-500 rounded-md">
//                         <FaUser className="text-gray-400 ml-2" />
//                         {/* Icon with styling */}
//                         <input
//                           type="text"
//                           placeholder="Your Name"
//                           className="bg-transparent p-3 text-sm outline-none text-gray-400 h-10 w-full"
//                         />
//                       </div>

//                       <div className="flex items-center border border-gray-500 focus-within:border-red-500  rounded-md">
//                         <FaEnvelope className="text-gray-400 ml-2" />
//                         {/* Icon with styling */}
//                         <input
//                           type="email"
//                           placeholder="Email Address"
//                           className="bg-transparent focus:outline text-sm p-3 outline-none text-gray-400 h-10 w-full"
//                         />
//                       </div>

//                       <div>
//                         <button className=" text-white h-[7vh] w-[25vw] md:h-[5vh] lg:h-[8vh] md:w-[20vw] lg:w-[10vw] rounded-lg hover:bg-red-600 border border-stone-700 transition-all duration-[0.5s] bg-slate-800 ">
//                           Subscribe
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className=" border-t-slate-700 tracking-wider bg-[#0A1C2D] border-t text-center text-slate-200 grid items-center justify-center ">
//             &copy; 2024 STRATIFY - Business & Consulting. All Rights Reserved.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;


// import React from "react";

// const Footer = () => {
//   return (  
//     <div>
//     <div className=" min-h-[40vh] lg:h-full bg-gradient-to-r from-red-800 to-black grid items-center justify-items-center  ">
//          <div className=" min-h-[25vh] w-[85%] md:w-[90%] lg:w-[90%] grid grid-rows-[2fr_1.5fr] lg:grid-cols-[3fr_0.7fr] lg:grid-rows-none ">
//            <div className=" grid items-center ">
//              <p className=" text-3xl md:text-3xl lg:text-3xl font-bold text-white  ">
//                We help you to unlock & unleash the power within.
//              </p>
//            </div>
//            <div className=" grid items-center ">
//              <button className=" lg:h-[12vh] h-[9vh] w-[45vw] md:h-[10vh] md:w-[30vw] lg:w-[15vw] hover:bg-red-500 border-4 transition-all duration-[0.5s] border-white grid items-center justify-center  ">
//                <p className=" text-md uppercase font-bold text-white ">
//                  Get In touch
//                </p>
//              </button>
//            </div>
//          </div>
//        </div>
//     <footer className="bg-slate-900 text-white grid py-12">
      
//       {/* Main container */}
//       <div className="container mx-auto px-4">
//         {/* Statistics Section */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
//           {[
//             { count: "298", label: "Expert Consultants" },
//             { count: "973", label: "Our Trusted Clients" },
//             { count: "560", label: "Orders in Queue" },
//             { count: "800", label: "Projects Delivered" },
//           ].map((stat, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <p className="text-3xl md:text-4xl font-bold">{stat.count}</p>
//               <p className="text-slate-500 text-sm md:text-base">{stat.label}</p>
//             </div>
//           ))}
//         </div>

//         {/* Newsletter Section */}
//         <div className="bg-slate-800 p-6 rounded-lg text-center md:text-left flex flex-col md:flex-row items-center justify-between">
//           <div>
//             <h3 className="text-2xl font-bold mb-4">Join Our Newsletter</h3>
//             <p className="text-slate-400 text-sm md:text-base">
//               Subscribe to get the latest updates and offers.
//             </p>
//           </div>
//           <form className="mt-6 md:mt-0 flex flex-col md:flex-row items-center gap-4">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full md:w-auto px-4 py-2 rounded-lg text-black"
//             />
//             <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg">
//               Subscribe
//             </button>
//           </form>
//         </div>

//         {/* Links Section */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
//           {[
//             {
//               title: "About Us",
//               links: ["Our Story", "Team", "Careers", "Blog"],
//             },
//             {
//               title: "Services",
//               links: ["Consulting", "Support", "Customization", "Integration"],
//             },
//             {
//               title: "Support",
//               links: ["Help Center", "FAQs", "Terms", "Privacy"],
//             },
//             {
//               title: "Contact Us",
//               links: ["Email", "Phone", "Address", "Social Media"],
//             },
//           ].map((section, index) => (
//             <div key={index}>
//               <h4 className="text-xl font-bold mb-4">{section.title}</h4>
//               <ul>
//                 {section.links.map((link, i) => (
//                   <li key={i} className="text-slate-400 text-sm md:text-base mb-2">
//                     {link}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Footer Bottom Section */}
//         <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
//           <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//     </div>
//   );
// };

// export default Footer;


// import React from "react";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   return (
//       <div>
//      <div className=" min-h-[40vh] lg:h-full bg-gradient-to-r from-red-800 to-black grid items-center justify-items-center  ">
//           <div className=" min-h-[25vh] w-[85%] md:w-[90%] lg:w-[90%] grid grid-rows-[2fr_1.5fr] lg:grid-cols-[3fr_0.7fr] lg:grid-rows-none ">
//             <div className=" grid items-center ">
//               <p className=" text-3xl md:text-3xl lg:text-3xl font-bold text-white  ">
//                 We help you to unlock & unleash the power within.
//               </p>
//             </div>
//             <div className=" grid items-center ">
//               <button className=" lg:h-[12vh] h-[9vh] w-[45vw] md:h-[10vh] md:w-[30vw] lg:w-[15vw] hover:bg-red-500 border-4 transition-all duration-[0.5s] border-white grid items-center justify-center  ">
//                 <p className=" text-md uppercase font-bold text-white ">
//                   Get In touch
//                 </p>
//               </button>
//             </div>
//           </div>
//         </div>
    
//     <footer className="bg-slate-900 text-white py-12">
//       {/* Main container */}
//       <div className="container mx-auto px-4">
//         {/* Statistics Section */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
//           {[
//             { count: "298", label: "Expert Consultants" },
//             { count: "973", label: "Our Trusted Clients" },
//             { count: "560", label: "Orders in Queue" },
//             { count: "800", label: "Projects Delivered" },
//           ].map((stat, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <p className="text-3xl md:text-4xl font-bold">{stat.count}</p>
//               <p className="text-slate-500 text-sm md:text-base">{stat.label}</p>
//             </div>
//           ))}
//         </div>

//         {/* Newsletter Section */}
//         <div className="bg-slate-800 p-6 rounded-lg text-center md:text-left flex flex-col md:flex-row items-center justify-between">
//           <div>
//             <h3 className="text-2xl font-bold mb-4">Join Our Newsletter</h3>
//             <p className="text-slate-400 text-sm md:text-base">
//               Subscribe to get the latest updates and offers.
//             </p>
//           </div>
//           <form className="mt-6 md:mt-0 flex flex-col md:flex-row items-center gap-4">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full md:w-auto px-4 py-2 rounded-lg text-black"
//             />
//             <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg">
//               Subscribe
//             </button>
//           </form>
//         </div>

//         {/* Links Section */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
//           {[
//             {
//               title: "About Us",
//               links: ["Our Story", "Team", "Careers", "Blog"],
//             },
//             {
//               title: "Services",
//               links: ["Consulting", "Support", "Customization", "Integration"],
//             },
//             {
//               title: "Support",
//               links: ["Help Center", "FAQs", "Terms", "Privacy"],
//             },
//             {
//               title: "Contact Us",
//               links: ["Email: info@example.com ", "Phone: +123 456 7890", "Address", "Social Media"],
//             },
//           ].map((section, index) => (
//             <div key={index}>
//               <h4 className="text-xl font-bold mb-4">{section.title}</h4>
//               <ul>
//                 {section.links.map((link, i) => (
//                   <li key={i} className="text-slate-400 text-sm md:text-base mb-2">
//                     {link}
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-6 md:mt-0 flex gap-4 text-2xl">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 hover:text-white"
//             >
//               <FaFacebook />
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-400 hover:text-white"
//             >
//               <FaTwitter />
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:text-white"
//             >
//               <FaLinkedin />
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-pink-500 hover:text-white"
//             >
//               <FaInstagram />
//             </a>
//           </div>
//             </div>
//           ))}
//         </div>


//         {/* Footer Bottom Section */}
//         <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
//           <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//     </div>
//   );
// };

// export default Footer;



import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="min-h-[40vh] lg:h-full bg-gradient-to-r from-red-800 to-black grid items-center justify-items-center">
        <div className="min-h-[25vh] w-[85%] md:w-[90%] lg:w-[90%] grid grid-rows-[2fr_1.5fr] lg:grid-cols-[3fr_0.7fr] lg:grid-rows-none">
          <div className="grid items-center">
            <p className="text-3xl md:text-3xl lg:text-3xl font-bold text-white">
              We help you to unlock & unleash the power within.
            </p>
          </div>
          <div className="grid items-center">
            <button className="lg:h-[12vh] h-[9vh] w-[45vw] md:h-[10vh] md:w-[30vw] lg:w-[15vw] hover:bg-red-500 border-4 transition-all duration-[0.5s] border-white grid items-center justify-center">
              <p className="text-md uppercase font-bold text-white">Get In Touch</p>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          {/* Statistics Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
            {[
              { count: "298", label: "Expert Consultants" },
              { count: "973", label: "Our Trusted Clients" },
              { count: "560", label: "Orders in Queue" },
              { count: "800", label: "Projects Delivered" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <p className="text-3xl md:text-4xl font-bold">{stat.count}</p>
                <p className="text-slate-500 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="bg-slate-800 p-6 rounded-lg text-center md:text-left flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Join Our Newsletter</h3>
              <p className="text-slate-400 text-sm md:text-base">
                Subscribe to get the latest updates and offers.
              </p>
            </div>
            <form className="mt-6 md:mt-0 flex flex-col md:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-auto px-4 py-2 rounded-lg text-black"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg">
                Subscribe
              </button>
            </form>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              {
                title: "About Us",
                links: ["Our Story", "Team", "Careers", "Blog"],
              },
              {
                title: "Services",
                links: ["Consulting", "Support", "Customization", "Integration"],
              },
              {
                title: "Support",
                links: ["Help Center", "FAQs", "Terms", "Privacy"],
              },
              {
                title: "Contact Us",
                links: [
                  "Email: info@example.com",
                  "Phone: +123 456 7890",
                  "Address: 123 Business St, City",
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h4 className="text-xl font-bold mb-4">{section.title}</h4>
                <ul>
                  {section.links.map((link, i) => (
                    <li
                      key={i}
                      className="text-slate-400 text-sm md:text-base mb-2"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
                {/* Add Social Media Icons only under Contact Us */}
                {section.title === "Contact Us" && (
                  <div className="mt-6 flex gap-4 text-2xl">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-white"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-white"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-white"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:text-white"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
            <p>
              © {new Date().getFullYear()} Dt. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
