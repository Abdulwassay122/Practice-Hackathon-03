import React from 'react'

export default function Loading() {
  return (
    <div className='flex gap-6'>
      <div className='w-[300px] h-[393px] flex flex-col gap-5'>
        <div className='w-[300px] h-[300px] bg-[#E5E5E5] rounded-md'>

        </div>
        <div className='w-[300px] h-[73px] flex flex-col justify-between'>
            <div className='w-[300px] h-[20px] bg-[#E5E5E5] rounded-md'></div>
            <div className='w-[300px] h-[20px] bg-[#E5E5E5] rounded-md'></div>
            <div className='w-[300px] h-[20px] bg-[#E5E5E5] rounded-md'></div>
        </div>
      </div>

      <div className='w-[300px] h-[393px] flex flex-col gap-5'>
        <div className='w-[300px] h-[300px] bg-[#E5E5E5] rounded-md'>

        </div>
        <div className='w-[300px] h-[73px] flex flex-col justify-between'>
            <div className='w-[300px] h-[20px] bg-[#E5E5E5] rounded-md'></div>
            <div className='w-[300px] h-[20px] bg-[#E5E5E5] rounded-md'></div>
            <div className='w-[300px] h-[20px] bg-[#E5E5E5] rounded-md'></div>
        </div>
      </div>
    </div>
  )
}
