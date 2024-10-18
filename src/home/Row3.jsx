import React from 'react'
import Test from '../new/Test'

function Row3() {
  return (
    <div className='md:h-[100vh] lg:h-[120vh] w-full bg-[#F0F5F9] grid items-center justify-center h-[100vh]'>

      <div className=' lg:h-[90vh] lg:w-[90vw] w-[90vw] md:h-[90vh] md:w-[90vw] h-[90vh]  grid-rows-2 grid md:grid-rows-2 lg:grid-cols-2 gap-6 '>
          
          <div className='grid lg:h-[90vh] w-full'>
            <Test/>
          </div>

          <div className='lg:h-[90vh] w-full grid '>

           <div className='grid'>
              <div className='grid grid-rows-[0.3fr_0.6fr_0.5fr_1fr_1fr] h-full w-full gap-3 '>
                <div className=' uppercase '>
                  <p className='text-xl'>About Stratify</p>
                  <p></p>
                </div>
                <div  className=' grid '>
                  <p className=' text-3xl font-bold '>Largest Demand Partnership Buidling Financial Experts</p>
                </div>
                <div className='grid justify-center text-justify '>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt necessitatibus autem non distinctio.</p>
                </div>
                <div className=' bg-red-400 grid grid-cols-[0.25fr_1fr] gap-3 '>
                  <div className=''>
                    <div>
                    <i class="flaticon-computer-1"></i>
                    </div>
                  </div>
                  <div className='grid items-center '>
                    
                      <p className='text-xl font-bold '>Support On Raising Funds</p>
                      <p>Veniam quis nostrud exercitason ullamco ipsum laboris sed ut perspiciatis unde omnis iste natus.</p>
                    
                  </div>
                </div>
                <div className=' bg-red-400 '></div>
              </div>
           </div>
          </div>
      </div>

    </div>
  )
}

export default Row3