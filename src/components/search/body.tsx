"use client";
import * as React from 'react'
import { useRouter } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react"

import InputExt from "@/components/_uiext/InputExt";
import ButtonExt from '../_uiext/ButtonExt';
import CheckboxExt from '../_uiext/CheckboxExt';
import SelectExt from '../_uiext/SelectExt';
import AccordionExt from '../_uiext/AccordionExt';
import ScrollAreaExt from '../_uiext/ScrollAreaExt';
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SelectGroup } from "@/components/ui/select";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getData, getSearch, setData, setSearch } from "@/redux/features/searchSlice";
import { getState } from "@/redux/features/switchSlice";
const Body = () => {
  const router = useRouter();
  const data = useAppSelector(getData);
  const state = useAppSelector(getState);
  const dispatch = useAppDispatch();
  let selected = "";
  data.selected.forEach(element => {
    selected += element + ", ";
  });
  selected = selected.slice(0, -2);
  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {

    };
  const handleClick = () => {

  }
  const handleGoClick = () => {
    if (state)
      router.push('/result_1');
    else
      router.push('/result_2');
  }
  const onSelectChange = () => {

  }
  const handleCheckChange = (cat_no: number, list_no: number) => () => {
    dispatch(setData({ cat_no, list_no }))
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="flex flex-row items-center  space-x-2 rounded-full shadow-lg py-2 px-2 bg-[#F9F9F9] w-full sm:w-2/3 md:w-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
          <path d="M11.8717 11.0373H11.1292L10.866 10.7836C11.8189 9.67829 12.3427 8.26723 12.3416 6.8079C12.3416 5.59962 11.9833 4.41848 11.312 3.41383C10.6408 2.40918 9.68664 1.62615 8.57033 1.16377C7.45403 0.701377 6.22568 0.580396 5.04062 0.816119C3.85556 1.05184 2.76701 1.63368 1.91263 2.48807C1.05824 3.34245 0.476403 4.431 0.24068 5.61606C0.00495617 6.80112 0.125938 8.02947 0.588326 9.14577C1.05071 10.2621 1.83374 11.2162 2.83839 11.8875C3.84304 12.5588 5.02418 12.9171 6.23246 12.9171C7.74565 12.9171 9.13666 12.3625 10.2081 11.4415L10.4619 11.7046V12.4471L15.1612 17.1371L16.5616 15.7367L11.8717 11.0373ZM6.23246 11.0373C3.89218 11.0373 2.00304 9.14818 2.00304 6.8079C2.00304 4.46762 3.89218 2.57848 6.23246 2.57848C8.57274 2.57848 10.4619 4.46762 10.4619 6.8079C10.4619 9.14818 8.57274 11.0373 6.23246 11.0373Z" fill="black" />
        </svg>
        <InputExt type='text'
          className="border-none rounded-none h-[40px] md:h-[48px] text-[#000000] bg-[#F9F9F9] focus-visible:outline-[#F9F9F9] focus-visible:border-[#F9F9F9]"
          placeholder='Who or what are you looking for?' onChange={handleChange('search')} />
        <ButtonExt onClick={handleGoClick} className="rounded-full w-[68px] h-[60px] p-2">
          <img src='/images/send.svg' />
        </ButtonExt>
      </div>
      <div className='flex flex-row items-center rounded-sm space-x-2 shadow-lg p-0 mt-4 border-[#DDD] border bg-[#F9F9F9] w-full sm:w-2/3 md:w-1/2'>
        <SelectExt onSelectChange={handleClick} className="w-full" label={
          <div className='flex flex-row justify-between items-center space-x-2 w-full h-[60px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11" fill="none">
              <path d="M6 9.75C6 9.55109 6.07902 9.36032 6.21967 9.21967C6.36032 9.07902 6.55109 9 6.75 9H11.25C11.4489 9 11.6397 9.07902 11.7803 9.21967C11.921 9.36032 12 9.55109 12 9.75C12 9.94891 11.921 10.1397 11.7803 10.2803C11.6397 10.421 11.4489 10.5 11.25 10.5H6.75C6.55109 10.5 6.36032 10.421 6.21967 10.2803C6.07902 10.1397 6 9.94891 6 9.75ZM3 5.25C3 5.05109 3.07902 4.86032 3.21967 4.71967C3.36032 4.57902 3.55109 4.5 3.75 4.5H14.25C14.4489 4.5 14.6397 4.57902 14.7803 4.71967C14.921 4.86032 15 5.05109 15 5.25C15 5.44891 14.921 5.63968 14.7803 5.78033C14.6397 5.92098 14.4489 6 14.25 6H3.75C3.55109 6 3.36032 5.92098 3.21967 5.78033C3.07902 5.63968 3 5.44891 3 5.25ZM0 0.75C0 0.551088 0.0790178 0.360322 0.21967 0.21967C0.360322 0.0790178 0.551088 0 0.75 0H17.25C17.4489 0 17.6397 0.0790178 17.7803 0.21967C17.921 0.360322 18 0.551088 18 0.75C18 0.948912 17.921 1.13968 17.7803 1.28033C17.6397 1.42098 17.4489 1.5 17.25 1.5H0.75C0.551088 1.5 0.360322 1.42098 0.21967 1.28033C0.0790178 1.13968 0 0.948912 0 0.75Z" fill="black" />
            </svg>
            <span className='flex-grow text-left flex-wrap'>{data.selected.length === 0
              ? 'Narrow your search using filters'
              : selected}</span>
          </div>
        }>
          <SelectGroup>
            <ScrollAreaExt>
              <AccordionExt className='w-full px-2' type="multiple">
                {data.select.map((t_value, t_index) => (
                  <AccordionItem value={`item-${t_index}`} key={t_index} >
                    <AccordionTrigger>{t_value.category}</AccordionTrigger>
                    <AccordionContent>
                      {t_value.list.map((value, index) => (
                        <div className='pt-2' key={index}>
                          <CheckboxExt checked={value.state} label={value.name} onCheckChange={handleCheckChange(t_index, index)} />
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </AccordionExt>
            </ScrollAreaExt>
          </SelectGroup>
        </SelectExt>
      </div>
    </div >
  )
}

export default Body