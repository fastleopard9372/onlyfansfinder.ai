
"use client";

import React, { useEffect } from 'react'
import { useRouter } from "next/navigation";
import SwitchExt from "@/components/_uiext/SwitchExt";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getState, setState, getPage } from "@/redux/features/switchSlice";
const SwitchItem = () => {
  const state = useAppSelector(getState);
  const page = useAppSelector(getPage);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleCheckChange = (_state: boolean) => {
    dispatch(setState(!_state));
  }
  useEffect(() => {
    if (state) {
      router.push(page);
    } else
      router.push('/swipe');
  }, [state])
  return (
    <SwitchExt label='switch' checked={state} onCheckChange={() => handleCheckChange(state)} />
  )
}

export default SwitchItem