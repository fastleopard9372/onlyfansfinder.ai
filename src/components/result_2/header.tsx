"use client";
import * as React from 'react'
import { useRouter } from "next/navigation";
// import link from 'next/link';
import { ROLES, SITE_TITLE } from "@/utils/constants";
import SwitchExt from "@/components/_uiext/SwitchExt";
import Logo from "@/components/_layout/Logo";
import InputExt from "@/components/_uiext/InputExt";
import ButtonExt from '../_uiext/ButtonExt';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getState, setState } from "@/redux/features/switchSlice";
import { getData } from "@/redux/features/searchSlice";
const Header = () => {
  const router = useRouter();
  const selected = useAppSelector(getData).selected;
  console.log('sd', selected);
  const state = useAppSelector(getState);
  const dispatch = useAppDispatch();
  const handleCheckChange = (_state: boolean) => {
    dispatch(setState(!_state));
  }
  const handleClick = () => {

  }
  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {

    };
  return (
    <div className='flex justify-between  w-full max-md:flex-wrap space-x-2 px-3 pt-4 pb-10 md:px-10 z-10 text-[#00AFF0]'>
      <div className="flex flex-wrap justify-center items-start gap-[16px] pt-[10px]">
        <div className='pt-[10px]'>
          <Logo />
        </div>
        <h1 className="font-bc text-[24px] max-md:pt-4 font-[500] lg:text-[40px]">
          {SITE_TITLE}
        </h1>
      </div>
      <div className='flex-grow max-md:hidden'></div>
      <div className='flex items-start justify-end pt-[20px]'>
        <SwitchExt label='switch' checked={state} onCheckChange={() => handleCheckChange(state)} />
      </div>
    </div>

  )
}

export default Header