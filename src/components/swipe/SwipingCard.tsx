import * as React from 'react'
import { ICreatorItem } from '@/types/interfaces';
const SwipingCard = (data: ICreatorItem) => {
  let include = '';
  data.include.forEach(element => {
    include += element + " > ";
  });
  include = include.slice(0, -3);
  return (
    <div className='relative rounded-2xl w-[380px] h-[500px] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(${data.avatar})` }}>
      <div className='w-full absolute bottom-0 text-white'>
        <div className='bg-gradient-to-t from-gray-900 to-transparent  p-4 space-y-4 rounded-2xl' >
          <div className=' rounded-2xl flex items-center'>
            <span className='text-[36px] font-black'>{data.name}</span>
            <span className='text-[36px] font-thin ml-5'>{data.age}</span>
            <span className='ml-5 bg-[#ecb35e] w-[80px] h-[28px] text-[13px] flex rounded-xl justify-center items-center'>
              <img src='/images/free1.svg' className='w-[15px] h-[15px]' />
              <p className='ml-2'>$5.00</p>
            </span>
          </div>
          <div className='flex space-x-2'>
            <span className='bg-[#444] rounded-full px-3'>{data.location}</span>
            <span className='bg-[#444] rounded-full px-3'>top</span>
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col justify-center items-center space-y-2'>
              <img src='/images/like_btn.svg' className='w-[56px] h-[56px]'></img>
              <p>less like this</p>
            </div>
            <div className='flex flex-col justify-center items-center space-y-2'>
              <img src='/images/dis_like_btn.svg' className='w-[56px] h-[56px]'></img>
              <p>more like this</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwipingCard