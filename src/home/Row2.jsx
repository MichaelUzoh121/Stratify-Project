import React from 'react'
import image from '../image/yearicon.png'
import image1 from '../image/project.jpg'
import image2 from '../image/new2.jpg'
import image3 from '../image/new3.jpg'
import image4 from '../image/new4.jpg'
import { Link } from 'react-router-dom'

function Row2() {
  return (
    <div className=' bg-white h-[250vh] md:h-[120vh] lg:h-[140vh] lg:w-full grid items-center justify-center w-[100vw]  '>

      <div className=' h-[240vh] w-[90vw] md:h-[110vh] md:w-[90vw] lg:h-[120vh] lg:w-[90vw] grid grid-rows-[0.5fr_1fr] md:grid-rows-[30%_70%] lg:grid-rows-[30%_70%] gap-5  '>

          <div className=' grid  grid-rows-[1fr_0.7fr] w-full lg:grid-cols-[1fr_0.8fr] md:grid-rows-2  md:h-[40vh] md:gap-5 lg:gap-0 '>

            <div className=' grid md:h-[20vh] lg:h-[40vh] w-full grid-rows-2 md:grid-cols-[0.7fr_1fr] lg:grid-cols-[0.7fr_1fr]'>
              <div className='  md:h-[20vh] lg:h-[40vh] bg-no-repeat bg-contain lg:grid grid-rows-[1fr_0.5fr] 'style={{ backgroundImage: `url(${image})` }}>

                <div className=' md:p-[20px_0px_0px_60px] p-[30px_0px_0px_60px] lg:p-0 lg:items-center lg:justify-center box-border grid'>
                 <p className='md:text-8xl lg:text-8xl text-8xl font-sans font-extrabold text-red-500 '> 35 </p>
                </div>

                <div className=' grid md:p-[20px_0px_0px_70px] p-[15px_0px_0px_70px] lg:p-0 lg:items-start lg:justify-center md:items-center'>                
                  <p className=' md:text-2xl lg:text-xl font-normal uppercase text-xl '>Stratify</p>
                </div>

              </div>

              <div className=' grid md:pl-3 lg:pl-3 lg:items-center box-border md:h-[20vh] lg:h-[35vh] w-full md:items-center items-end '>
                <div className='grid '>
                  <h2 className=' md:text-[36px] lg:text-[36px] text-[30px] font-semibold leading-[44px] text-left'>
                  Years of Struggle — <br />Better Strategy With Quality Business
                  </h2>
                </div>
              </div>
                 
            </div>

            <div className=' md:grid lg:grid lg:items-center grid lg:p-2 box-border gap-0 w-full grid-rows-[1fr_0.5fr] lg:grid-rows-[1fr_0.2fr] md:grid-rows-[1fr_1fr] lg:h-[40vh] md:h-[15vh] '>
              <div className='grid lg:items-center items-center h-full w-full '>
                <p className=' text-[16px] '>Beniam quis nostrud exercitation sed lamco 
                  laboris nis aliquip sed conseqa sed rure repreh 
                  derit luptate velit excepteur ocaan dcats ipsum aliquip 
                  eduis aute irure reprehy enderit dui voluptate ipsum velit 
                  esse cillum dolore ipsum.
                </p>
              </div>
              <div className='grid lg:items-end md:items-top items-center h-full w-full'>
                  <Link to='/home' className=' grid lg:items-end md:items-center '>
                    <p className=' hover:text-red-500 transition-all duration-[0.7s] font-bold ' >Who we are?</p>
                  </Link>
              </div>
            </div>

          </div>

          <div className='h-full w-full grid items-end justify-center '>
            <div className=' h-[158vh] w-[90vw] md:h-[72vh] md:w-[90vw] lg:h-[70vh] lg:w-[90vw] gap-0 grid grid-rows-4 md:gap-9 md:grid-cols-2 lg:grid-cols-4 lg:gap-4'>

                <div className=' grid grid-rows-[1fr_0.4fr] md:h-[35vh] lg:h-[68vh] w-full h-[38vh] '>
                  <div className=' grid h-full w-full' >
                  <div className='bg-no-repeat bg-center bg-cover bg-blend-soft-light h-auto w-[100%]'  style={{ backgroundImage: `url(${image1})` }} ></div>
                  </div>
                  <div className=' grid h-full w-full'>
                      <div className=' h-[8vh] w-[80vw] left-[10vw] top-[225vh] lg:h-[14vh] md:h-[8vh] md:w-[40vw] lg:w-[18vw] bg-white absolute shadow-xl lg:top-[210vh] md:top-[180vh] lg:left-[6.2vw] md:left-[6.2vw] grid items-center justify-center '>
                        <p className='text-xl font-semibold'>Taxation Planning</p>
                      </div>
                  </div>
                </div>

                <div className=' grid grid-rows-[1fr_0.4fr] mt-[0px] md:m-0 lg:m-0 h-[38vh] md:h-[35vh] lg:h-[68vh] w-full'>
                <div className='bg-red-100 grid h-full w-full' >
                  <div className='bg-no-repeat bg-center bg-cover bg-blend-soft-light h-auto w-[100%]'  style={{ backgroundImage: `url(${image2})` }} ></div>
                  </div>
                  <div className=' grid h-full w-full'>
                      <div className=' h-[8vh] w-[80vw] left-[10vw] top-[265vh] lg:h-[14vh] lg:w-[18vw] bg-white absolute shadow-xl lg:top-[210vh] md:w-[40vw] md:h-[8vh] md:top-[180vh] md:left-[53.5vw] lg:left-[29vw] grid items-center justify-center '>
                      <p className='text-xl font-semibold'>Customer Services</p>
                      </div>
                  </div>
                </div>

                <div className=' grid md:mt-[180px] lg:m-0 grid-rows-[1fr_0.4fr] mt-[0px] h-[38vh] md:h-[35vh] lg:h-[68vh] w-full '>
                <div className='bg-red-100 grid h-full w-full' >
                  <div className='bg-no-repeat bg-center bg-cover bg-blend-soft-light h-auto w-[100%]'  style={{ backgroundImage: `url(${image3})` }} ></div>
                  </div>
                  <div className=' grid h-full w-full'>
                      <div className=' h-[8vh] w-[80vw] left-[10vw] top-[304vh] lg:h-[14vh] lg:w-[18vw] bg-white absolute shadow-xl lg:top-[210vh] md:top-[217vh] md:w-[40vw] md:h-[8vh] lg:left-[51.8vw] md:left-[6.2vw] grid items-center justify-center '>
                      <p className='text-xl font-semibold'>Business Consultant</p>
                      </div>
                  </div>
                </div>

                <div className=' grid md:mt-[180px] lg:m-0 grid-rows-[1fr_0.4fr] mt-[0px] h-[38vh]  md:h-[35vh] lg:h-[68vh] w-full'>
                <div className='bg-red-100 grid h-full w-full' >
                  <div className='bg-no-repeat bg-center bg-cover bg-blend-soft-light h-auto w-[100%]'  style={{ backgroundImage: `url(${image4})` }} ></div>
                  </div>
                  <div className=' grid h-full w-full'>
                      <div className=' h-[8vh] w-[80vw] left-[10vw] top-[344vh] lg:h-[14vh] lg:w-[18vw] bg-white absolute shadow-xl lg:top-[210vh] md:w-[40vw] md:h-[8vh] md:left-[53.5vw] lg:left-[74.5vw] md:top-[217vh] grid items-center justify-center '>
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