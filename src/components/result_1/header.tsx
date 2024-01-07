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
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
            <path d="M11.8717 11.0373H11.1292L10.866 10.7836C11.8189 9.67829 12.3427 8.26723 12.3416 6.8079C12.3416 5.59962 11.9833 4.41848 11.312 3.41383C10.6408 2.40918 9.68664 1.62615 8.57033 1.16377C7.45403 0.701377 6.22568 0.580396 5.04062 0.816119C3.85556 1.05184 2.76701 1.63368 1.91263 2.48807C1.05824 3.34245 0.476403 4.431 0.24068 5.61606C0.00495617 6.80112 0.125938 8.02947 0.588326 9.14577C1.05071 10.2621 1.83374 11.2162 2.83839 11.8875C3.84304 12.5588 5.02418 12.9171 6.23246 12.9171C7.74565 12.9171 9.13666 12.3625 10.2081 11.4415L10.4619 11.7046V12.4471L15.1612 17.1371L16.5616 15.7367L11.8717 11.0373ZM6.23246 11.0373C3.89218 11.0373 2.00304 9.14818 2.00304 6.8079C2.00304 4.46762 3.89218 2.57848 6.23246 2.57848C8.57274 2.57848 10.4619 4.46762 10.4619 6.8079C10.4619 9.14818 8.57274 11.0373 6.23246 11.0373Z" fill="black" />
          </svg>
          <InputExt type='text'
            className="border-none rounded-none text-[#000000] h-[40px] md:h-[48px] bg-[#F9F9F9] focus-visible:outline-[#F9F9F9] focus-visible:border-[#F9F9F9]"
            placeholder='Who or what are you looking for?' onChange={handleChange('search')} />
          <ButtonExt onClick={handleClick} className="rounded-full w-[68px] h-[60px] p-2">
            <img src='/images/send.svg' />
          </ButtonExt>
        </div>
        <div className='flex flex-row flex-wrap space-x-2 pt-4'>
          {
            selected.map((value, item) => (
              <div className='border-[#EEEEEE] border-2 rounded-sm p-2 mt-2'>{value}</div>
            ))
          }
        </div>
      </div>
      <div className='flex-grow max-md:hidden'></div>
      <div className='flex items-start justify-end pt-[20px]  max-md:order-2'>
        <SwitchExt label='switch' checked={state} onCheckChange={() => handleCheckChange(state)} />
      </div>
    </div>

  )
}

export default Header