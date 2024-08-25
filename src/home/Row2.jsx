import React from 'react'
import image from '../image/yearicon.png'
import image1 from '../image/project.jpg'
import image2 from '../image/new2.jpg'
import image3 from '../image/new3.jpg'
import image4 from '../image/new4.jpg'
import { Link } from 'react-router-dom'

function Row2() {
  return (
    <div className=' bg-white h-[140vh] w-full grid items-center justify-center '>

      <div className='h-[120vh] w-[90vw] grid grid-rows-[29%_71%] gap-5'>

          <div className=' grid grid-cols-[1fr_0.8fr] gap-8'>

            <div className=' grid grid-cols-[0.7fr_1fr]'>
              <div className='bg-white bg-no-repeat bg-contain grid grid-rows-[1fr_0.5fr] 'style={{ backgroundImage: `url(${image})` }}>

                <div className=' items-end grid justify-center'>
                 <p className='text-8xl font-sans font-extrabold text-red-500 '> 35 </p>
                </div>

                <div className=' grid items-top justify-center '>
                 
                  <p className=' text-xl font-normal uppercase '>Stratify</p>
                </div>

              </div>

              <div className=' grid items-center pl-4 box-border '>
                <div>
                  <h2 className=' text-[36px] font-semibold leading-[44px] text-left '>
                  Years of Struggle — <br />Better Strategy With Quality Business
                  </h2>
                </div>
              </div>
                 
            </div>

            <div className='grid items-center p-2 box-border gap-0 h-full w-full grid-rows-[1fr_0.2fr]'>
              <div className='grid items-center h-full w-full'>
                <p className=' text-[16px] '>Beniam quis nostrud exercitation sed lamco 
                  laboris nis aliquip sed conseqa sed rure repreh 
                  derit luptate velit excepteur ocaan dcats ipsum aliquip 
                  eduis aute irure reprehy enderit dui voluptate ipsum velit 
                  esse cillum dolore ipsum.
                </p>
              </div>
              <div className='grid items-end h-full w-full '>
                  <Link to='/home' className=' grid items-end '>
                    <p className=' hover:text-red-500 transition-all duration-[0.7s] font-bold ' >Who we are?</p>
                  </Link>
                  </div>
            </div>

          </div>

          <div className='h-full w-full grid items-end justify-center'>
            <div className=' h-[70vh] w-[90vw] grid grid-cols-4 gap-4'>

                <div className=' grid grid-rows-[1fr_0.4fr]'>
                  <div className='bg-red-100 grid h-full w-full' >
                  <div className='bg-no-repeat bg-center bg-cover bg-blend-soft-light h-auto w-[100%]'  style={{ backgroundImage: `url(${image1})` }} ></div>
                  </div>
                  <div className=' grid h-full w-full'>
                      <div className=' h-[14vh] w-[18vw] bg-white absolute shadow-xl top-[210vh] left-[6.2vw] grid items-center justify-center '>
                        <p className='text-xl font-semibold'>Taxation Planning</p>
                      </div>
                  </div>
                </div>

                <div className=' grid grid-rows-[1fr_0.4fr]'>
                <div className='bg-red-100 grid h-full w-full' >
                  <div className='bg-no-repeat bg-center bg-cover bg-blend-soft-light h-auto w-[100%]'  style={{ backgroundImage: `url(${image2})` }} ></div>
                  </div>
                  <div className=' grid h-full w-full'>
                      <div className=' h-[14vh] w-[18vw] bg-white absolute shadow-xl top-[210vh] left-[29vw] grid items-center justify-center '>
                      <p className='text-xl font-semibold'>Customer Services</p>
                      </div>
                  </div>
                </div>

                <div className=' grid grid-rows-[1fr_0.4fr]'>
                <div className='bg-red-100 grid h-full w-full' >
                  <div className='bg-no-repeat bg-center bg-cover bg-blend-soft-light h-auto w-[100%]'  style={{ backgroundImage: `url(${image3})` }} ></div>
                  </div>
                  <div className=' grid h-full w-full'>
                      <div className=' h-[14vh] w-[18vw] bg-white absolute shadow-xl top-[210vh] left-[51.8vw] grid items-center justify-center '>
                      <p className='text-xl font-semibold'>Business Consultant</p>
                      </div>
                  </div>
                </div>

                <div className=' grid grid-rows-[1fr_0.4fr]'>
                <div className='bg-red-100 grid h-full w-full' >
                  <div className='bg-no-repeat bg-center bg-cover bg-blend-soft-light h-auto w-[100%]'  style={{ backgroundImage: `url(${image4})` }} ></div>
                  </div>
                  <div className=' grid h-full w-full'>
                      <div className=' h-[14vh] w-[18vw] bg-white absolute shadow-xl top-[210vh] left-[74.5vw] grid items-center justify-center '>
                      <p className='text-xl font-semibold'>Investment Planning</p>
                      </div>
                  </div>
                </div>

            </div>
          </div>

      </div>

    </div>
  )
}

export default Row2