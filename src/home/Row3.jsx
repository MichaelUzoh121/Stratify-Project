import React from 'react'
import Test from '../new/Test'

function Row3() {
  return (
    <div className='h-[120vh] w-full bg-[#F0F5F9] grid items-center justify-center'>

      <div className=' h-[90vh] w-[90vw] grid grid-cols-2 '>
          <div className='grid'>
            <Test/>
          </div>
          <div className='bg-black'></div>
      </div>

    </div>
  )
}

export default Row3