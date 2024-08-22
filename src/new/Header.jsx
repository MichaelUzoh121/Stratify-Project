import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from '../image/logoo.png'
import { Link } from 'react-router-dom';
import Menu from '../component/menu';

function Header() {
  return (
    <div className=' h-[26vh] w-full grid grid-rows-[25%_75%]  '>

        <div className='bg-[rgb(50_50_50)] grid justify-center'>

            <div className='w-[84vw] grid grid-cols-2'>
                <div className=' grid items-center'>
                    <p className='text-white'>29a Ogbodu Street, Festac Town, Lagos, Nigeria </p>
                </div>
                <div className=' grid items-center justify-end '>
                    <div className=' flex gap-3 0 '>
                    <p className='text-white hover:text-red-600 transition-all duration-[1s] cursor-pointer '><FaFacebookF /></p>
                    <p className='text-white hover:text-red-600 transition-all duration-[1s] cursor-pointer'><SiGmail /></p>
                    <p className='text-white hover:text-red-600 transition-all duration-[1s] cursor-pointer'><FaInstagram /></p>
                    <p className='text-white hover:text-red-600 transition-all duration-[1s] cursor-pointer'><FaXTwitter /></p>
                    </div>
                </div>
            </div>

        </div>

        <div className=' grid justify-center'>
            <div className='w-[84vw]  grid grid-cols-2 h-full'>
                <div className=' grid items-center '>
                    <Link to='/'>
                    <img src={logo} className=' h-[12vh] w-[12vw] ' />
                    </Link>
                </div>
                <div className=' grid items-center justify-center '>
                    <Menu />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header