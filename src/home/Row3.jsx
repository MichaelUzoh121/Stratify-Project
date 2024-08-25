import React from 'react'
import Test from '../new/Test'

function Row3() {
  return (
    <div className='md:h-[100vh] lg:h-[120vh] w-full bg-[#F0F5F9] grid items-center justify-center h-[100vh]'>

      <div className=' lg:h-[90vh] lg:w-[90vw] md:h-[90vh] md:w-[90vw] h-[90vh]  grid-rows-2 grid md:grid-rows-2 lg:grid-cols-2 gap-6 '>
          <div className='grid lg:h-[90vh] w-full'>
            <Test/>
          </div>
          <div className='bg-black lg:h-[90vh] w-full'></div>
      </div>

    </div>
  )
}

export default Row3