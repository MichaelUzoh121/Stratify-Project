import React from 'react'
import Test from '../new/Test'

function Row3() {
  return (
    <div className='md:h-[100vh] lg:h-[120vh] w-full bg-[#F0F5F9] grid items-center justify-center h-[100vh]'>

      <div className=' lg:h-[90vh] lg:w-[90vw] md:h-[90vh] md:w-[90vw] h-[90vh]  grid-rows-2 grid md:grid-rows-2 lg:grid-cols-2 gap-6 '>
          <div className='grid lg:h-[90vh] w-full'>
            <Test/>
          </div>
          <div className='bg-black lg:h-[90vh] w-full grid grid-rows-[0.6fr_1fr]'>
            <div className='bg-slate-400 grid grid-rows-[0.2fr_1fr] h-full w-full '>
              <div className=' ml-3grid items-center '>
                <p className='text-2xl font-bold '>About Stratify</p>
              </div>
              <div className='grid items-center justify-center text-justify h-full w-full '>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt necessitatibus autem non distinctio. Suscipit quaerat numquam itaque laboriosam esse repellat quos reiciendis non culpa doloremque?</p>
              </div>
            </div>
            <div></div>
          </div>
      </div>

    </div>
  )
}

export default Row3