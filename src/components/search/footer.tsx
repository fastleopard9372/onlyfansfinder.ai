import * as React from 'react'

function Footer() {
  const data = [
    {
      url: "/images/cup.svg",
      title: '#1 search engine <br/> OnlyFans tool'
    }, {
      url: "/images/ai.svg",
      title: 'Use AI to scout out <br/>top performers'
    }, {
      url: "/images/free1.svg",
      title: 'Completely <br/>FREE'
    }
  ]
  return (
    <div className="flex flex-row items-center justify-center text-center text-white space-x-3 md:space-x-10 mt-24  px-2 bg-[#00AFF0]">
      {data.map((value, index) => (
        <div key={index} className='flex flex-col justify-center items-center py-14'>
          <div className='flex justify-center items-center rounded-full bg-transparent border-2 border-white w-[60px] h-[60px] md:w-[75px] md:h-[75px]'>
            <img src={value.url} />
          </div>
          <div className='text-[14px] md:text-[22px]' dangerouslySetInnerHTML={{ __html: value.title }}>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Footer