import React, { useEffect, useState } from 'react'
import Menu from '../new/Menu';
import logo from '../image/logoo.png'
import { Link } from 'react-router-dom';

function Header() {
  let [for_opacity,setOpacity] = useState(0)
  let [hh,setHH] = useState("0px")

  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHH('13vh');
        setOpacity('1');
      } else {
        setHH('0');
        setOpacity('0');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <>
     <div className=' lg:bg-white none lg:z-30 lg:shadow-2xl lg:text-black lg:fixed lg:top-0 lg:w-full lg:grid lg:grid-cols-[0.6fr_1fr]' style={{height:hh,opacity:for_opacity,transition:"0.5s"}}>
      
      <div className='grid items-center justify-center'>
        <div className=' '>
         <Link to='/'>
         <img src={logo} className=' h-[12vh] w-[12vw] ' />
         </Link>
        </div>
      </div>
      
      <div className='grid items-center justify-center'>
        <Menu/>
      </div>

     </div>
    </>
   

  )
}

export default Header