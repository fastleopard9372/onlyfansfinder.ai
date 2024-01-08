"use client";
import Link from 'next/link'
import * as React from 'react'
import { SITE_TITLE } from "@/utils/constants";
import Logo from "@/components/_layout/Logo";
import SearchInput from '../SearchInput';
import SwitchItem from '../SwitchToggleButton';
import Rating from "@/components/result/Rating";
import { useAppSelector } from "@/redux/hooks";
import { getData } from "@/redux/features/articleSlice";
import { getData as getSelected } from "@/redux/features/searchSlice";
const Result = () => {
  const selected = useAppSelector(getSelected).selected;
  const data = useAppSelector(getData);
  return (
    <section className="flex flex-col min-h-screen w-full overflow-x-hidden">
      {/* Header */}
      <div className='flex justify-between  w-full max-md:flex-wrap space-x-2 px-3 pt-16 pb-10 md:px-10 bg-[#00AFF0] text-[#FFFFFF]'>
        <div className="flex flex-wrap justify-center items-start gap-[16px] pt-[10px] max-md:order-1">
          <div className='pt-[10px]'>
            <Logo />
          </div>
          <h1 className="font-bc text-[24px] max-md:pt-4 font-[500] lg:text-[40px]">
            {SITE_TITLE}
          </h1>
        </div>
        <div className='flex flex-col w-full lg:w-[600px] max-md:order-3 max-md:mt-4'>
          <div className="flex flex-row items-center rounded-full shadow-lg py-2 px-2 bg-[#F9F9F9]">
            <SearchInput />
          </div>
          <div className='flex flex-row flex-wrap space-x-2 pt-4'>
            {
              selected?.map((value, item) => (
                <div className='border-[#EEEEEE] border-2 rounded-sm p-2 mt-2'>{value}</div>
              ))
            }
          </div>
        </div>
        <div className='flex-grow max-md:hidden'></div>
        <div className='flex items-start justify-end pt-[20px]  max-md:order-2'>
          <SwitchItem />
        </div>
      </div>

      {/* Body */}
      <div className='flex flex-col justify-center items-center'>
        <div className='text-[18px] font-normal text-left px-4 py-10 lg:px-20'>
          <div className='opacity-85'>About 2,546 result</div>
          <div className='text-[#1796D4]'>
            <Link href="/" className='underline'>Onlyfans</Link>&nbsp;&gt;&nbsp;
            <Link href="/" className='underline'>Top</Link>&nbsp;&gt;&nbsp;
            <Link href="/" className='underline'>profiles</Link>
          </div>
          <div className='text-[35px] text-[#1a1a1a] mt-10'>🔥 50 Best Free trial, Today in 2023</div>
          <div className='text-[16px] text-[#515151]'>Last updated: October 12, 2023</div>
          <div className='my-10'>
            {
              data.map((value, index) => (
                <Rating {...value} key={index} />
              ))
            }
          </div>
        </div>
      </div >
    </section>
  )
}

export default Result