import * as React from 'react'
import { ROLES, SITE_TITLE } from "@/utils/constants";
import BigLogo from "@/components/_layout/BigLogo";
import SearchFilter from '../../element/searchFilter/SearchFilter';
import SearchInput from '../../element/searchInput/SearchInput';
import SwitchItem from '../../element/switchItem/SwitchItem';
import FooterItem from '../../element/footerItem/FooterItem';
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
const Search = () => {
  return (
    <section className="flex flex-col min-h-screen w-full overflow-x-hidden">
      {/* Header */}
      <div className="flex flex-col items-center text-[#00AFF0]  px-2">
        <div className='flex justify-end w-full mt-3 px-3 md:mt-10 md:px-10'>
          <SwitchItem />
        </div>
        <div className="mb-5 flex flex-wrap justify-center gap-[16px]">
          <BigLogo />
          <h1 className="font-bc text-[50px] font-[500] lg:text-[90px]">
            {SITE_TITLE}
          </h1>
        </div>

        <div className="font-ms px-[32px] text-[18px] font-[500] text-[#000000] text-center lg:text-[22px]">
          Find your ideal <span className='text-[#00AFF0]'>Onlyfans performer</span><br />
          in just a few seconds
        </div>
      </div>
      {/* Body */}
      <div className='flex flex-col justify-center items-center  px-2'>
        <div className="flex flex-row items-center  space-x-2 rounded-full shadow-lg py-2 px-2 bg-[#F9F9F9] w-full sm:w-2/3 md:w-1/2">
          <SearchInput />
        </div>
        <div className='flex flex-row items-center rounded-sm space-x-2 shadow-lg p-0 mt-4 border-[#DDD] border bg-[#F9F9F9] w-full sm:w-2/3 md:w-1/2'>
          <SearchFilter />
        </div>
      </div >
      { /* Footer */}
      <div className="flex flex-row items-center justify-center text-center text-white space-x-3 md:space-x-10 mt-24  px-2 bg-[#00AFF0]">
        {data.map((value, index) => (
          <FooterItem {...value} key={index} />
        ))}
      </div>
    </section >
  )
}

export default Search