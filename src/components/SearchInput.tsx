"use client";
import * as React from 'react'
import { useRouter } from "next/navigation";
import InputExt from "@/components/_uiext/InputExt";
import ButtonExt from './_uiext/ButtonExt';

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getData, getSearch, setSearch } from "@/redux/features/searchSlice";
import { setPage } from "@/redux/features/switchSlice";

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(getData);
  const keyword = useAppSelector(getSearch);
  const router = useRouter();
  let selected = "";
  data.selected.forEach(element => {
    selected += element + ", ";
  });
  selected = selected.slice(0, -2);
  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearch(e.target.value));
    };
  const handleGoClick = () => {
    dispatch(setPage('/result'));
    router.push('/result');
  }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
        <path d="M11.8717 11.0373H11.1292L10.866 10.7836C11.8189 9.67829 12.3427 8.26723 12.3416 6.8079C12.3416 5.59962 11.9833 4.41848 11.312 3.41383C10.6408 2.40918 9.68664 1.62615 8.57033 1.16377C7.45403 0.701377 6.22568 0.580396 5.04062 0.816119C3.85556 1.05184 2.76701 1.63368 1.91263 2.48807C1.05824 3.34245 0.476403 4.431 0.24068 5.61606C0.00495617 6.80112 0.125938 8.02947 0.588326 9.14577C1.05071 10.2621 1.83374 11.2162 2.83839 11.8875C3.84304 12.5588 5.02418 12.9171 6.23246 12.9171C7.74565 12.9171 9.13666 12.3625 10.2081 11.4415L10.4619 11.7046V12.4471L15.1612 17.1371L16.5616 15.7367L11.8717 11.0373ZM6.23246 11.0373C3.89218 11.0373 2.00304 9.14818 2.00304 6.8079C2.00304 4.46762 3.89218 2.57848 6.23246 2.57848C8.57274 2.57848 10.4619 4.46762 10.4619 6.8079C10.4619 9.14818 8.57274 11.0373 6.23246 11.0373Z" fill="black" />
      </svg>
      <InputExt type='text' value={keyword}
        className="border-none rounded-none h-[40px] md:h-[48px] text-[#000000] bg-[#F9F9F9] focus-visible:outline-[#F9F9F9] focus-visible:border-[#F9F9F9]"
        placeholder='Who or what are you looking for?' onChange={handleChange('search')} />
      <ButtonExt onClick={handleGoClick} className="rounded-full w-[68px] h-[60px] p-2">
        <img src='/images/send.svg' />
      </ButtonExt>
    </>
  )
}

export default SearchInput