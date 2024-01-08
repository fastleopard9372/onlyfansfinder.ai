import * as React from 'react'
import Link from 'next/link';
const Rating = (data: any) => {
  let include = '';
  let flag = 1;
  data.include.forEach(element => {
    include += element + " > ";
  });
  include = include.slice(0, -3);
  let clsName = "md:max-w-[200px] md:h-[200px]";
  let clsName1 = "space-x-4 flex-row";
  let font = 20;
  if (flag === 0) {
    clsName = "md:max-w-[100px] md:h-[100px]";
    clsName1 = "space-y-4 flex-col";
    font = 16;
  }
  return (
    <div className="flex flex-col md:flex-row max-md:space-y-2 md:space-x-6  mt-10 w-full overflow-x-hidden max-md:rounded-lg max-md:shadow-lg">
      <div className='max-md:flex-grow'>
        <img src={data.avatar} className={`rounded-lg md:rounded-full max-md:w-full ${clsName}`}></img>
      </div>
      <div className='flex flex-col flex-grow max-md:px-3'>
        <div className={`flex  ${clsName1}`}>
          <div>
            <Link href={'/'} className={`text-[#00AEEF] font-semibold text-[${font}px] underline`}>{data.name}
            </Link>
            <span>{data.item.map((value, index) => (
              value
            ))}</span>
          </div>
          {flag == 1 && <div>|</div>}
          <div>
            {include}
          </div>
        </div>
        <div className={`flex flex-row flex-wrap text-[${font}px] font-extralight text-[#515151] mt-2`}>
          <div className='flex flex-row space-x-2 mr-6'>
            <img src='/images/like.svg' width={font} height={font}></img>
            <div>{data.like}</div>
          </div>
          <div className='flex flex-row space-x-2 mr-6'>
            <img src='/images/digital.svg' width={font} height={font}></img>
            <div>{data.show}</div>
          </div>
          <div className='flex flex-row space-x-2 mr-6'>
            <img src='/images/camera.svg' width={font} height={font}></img>
            <div>{data.camera}</div>
          </div>
          <div className='flex flex-row space-x-2 mr-6'>
            <img src='/images/free.svg' width={font} height={font}></img>
            <div className='bg-[#ECB35E] rounded-md text-white px-4'>{data.kind}</div>
          </div>
        </div>
        {
          flag == 1 &&
          <div className='text-[18px] w-full mt-3 md:line-clamp-3 line-clamp-5'>
            {data.content}
          </div>
        }
        {
          flag == 1 &&
          <div className='flex flex-row space-x-8 my-3'>
            {data.share.map((value, index) => (
              <a href={value.path} key={index}><img src={value.icon} /></a>
            ))}
          </div>
        }
      </div>
    </div>
  )
}

export default Rating