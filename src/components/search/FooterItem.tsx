import React from 'react'
export interface type {
  url: string;
  title: string
}
const FooterItem = (value: type) => {
  const { url, title } = value;
  return (
    <div className='flex flex-col justify-center items-center py-14'>
      <div className='flex justify-center items-center rounded-full bg-transparent border-2 border-white w-[60px] h-[60px] md:w-[75px] md:h-[75px]'>
        <img src={url} />
      </div>
      <div className='text-[14px] md:text-[22px]' dangerouslySetInnerHTML={{ __html: title }}>
      </div>
    </div>
  )
}

export default FooterItem