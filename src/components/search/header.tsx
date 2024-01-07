"use client";
import * as React from 'react'
import { useRouter } from "next/navigation";
import { ROLES, SITE_TITLE } from "@/utils/constants";
import SwitchExt from "@/components/_uiext/SwitchExt";
import BigLogo from "@/components/_layout/BigLogo";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getState, setState } from "@/redux/features/switchSlice";
const Header = () => {
  const router = useRouter();
  const state = useAppSelector(getState);
  const dispatch = useAppDispatch();
  const handleCheckChange = (_state: boolean) => {
    dispatch(setState(!_state));
  }
  React.useEffect(() => {

  }, [state])
  return (
    <div className="flex flex-col items-center text-[#00AFF0]  px-2">
      <div className='flex justify-end w-full mt-3 px-3 md:mt-10 md:px-10'>
        <SwitchExt label='switch' checked={state} onCheckChange={() => handleCheckChange(state)} />
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

  )
}

export default Header