"use client";
import * as React from 'react'
import Link from 'next/link'
import Article from "@/components/article";
// import { ChevronDown, ChevronUp } from "lucide-react"

// import InputExt from "@/components/_uiext/InputExt";
// import ButtonExt from '../_uiext/ButtonExt';
// import CheckboxExt from '../_uiext/CheckboxExt';
// import SelectExt from '../_uiext/SelectExt';
// import AccordionExt from '../_uiext/AccordionExt';
// import ScrollAreaExt from '../_uiext/ScrollAreaExt';
// import { SelectGroup } from "@/components/ui/select";
import * as types from '@/types/interfaces';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getData } from "@/redux/features/articleSlice";
const Body = () => {
  const data = useAppSelector(getData);
  const dispatch = useAppDispatch();
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='text-[18px] font-normal text-left px-4 py-10 lg:px-20'>
        <div className='opacity-85'>About 2,546 result</div>
        <div className='text-[#1796D4]'>
          <Link href="/" className='underline'>Onlyfans</Link>&nbsp;>&nbsp;
          <Link href="/" className='underline'>Top</Link>&nbsp;>&nbsp;
          <Link href="/" className='underline'>profiles</Link>
        </div>
        <div className='text-[35px] text-[#1a1a1a] mt-10'>🔥 50 Best Free trial, Today in 2023</div>
        <div className='text-[16px] text-[#515151]'>Last updated: October 12, 2023</div>
        <div className='my-10'>
          {
            data.map((value, index) => (
              <Article {...{ ...value, flag: 1 }} key={index} />
            ))
          }
        </div>
      </div>
    </div >
  )
}

export default Body