"use client";
import * as React from 'react'
import CheckboxExt from '../../_uiext/CheckboxExt';
import SelectExt from '../../_uiext/SelectExt';
import AccordionExt from '../../_uiext/AccordionExt';
import ScrollAreaExt from '../../_uiext/ScrollAreaExt';
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SelectGroup } from "@/components/ui/select";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getData, setData } from "@/redux/features/searchSlice";
const SearchFilter = () => {
  const data = useAppSelector(getData);
  const dispatch = useAppDispatch();
  let selected = "";
  data.selected.forEach(element => {
    selected += element + ", ";
  });
  selected = selected.slice(0, -2);

  const handleClick = () => {

  }
  const handleCheckChange = (cat_no: number, list_no: number) => () => {
    dispatch(setData({ cat_no, list_no }))
  }
  return (
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
  )
}

export default SearchFilter