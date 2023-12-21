/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

"use client";

import { useRouter } from "next/navigation";

import { LuChevronLeft } from "react-icons/lu";

import { getSignup, setStage } from "@/redux/features/signupSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { SITE_TITLE } from "@/utils/constants";

import Logo from "@/components/_layout/Logo";
import InputExt from "@/components/_uiext/InputExt";
import ButtonExt from "@/components/_uiext/ButtonExt";

export default function CustomerSignupStep3() {
  const router = useRouter();
  const signup = useAppSelector(getSignup);
  const dispatch = useAppDispatch();

  const handleGoBackClick = () => {
    if (signup.stage === 1) {
      router.push("/signin");
    } else {
      dispatch(setStage(signup.stage - 1));
    }
  };

  const handleContinueClick = () => {
    if (signup.stage < signup.totalStage) {
      dispatch(setStage(signup.stage + 1));
    }
  };

  return (
    <div className="flex flex-1 flex-col justify-between px-[24px] py-[64px]">
      <div
        className="flex cursor-pointer items-center"
        onClick={handleGoBackClick}
      >
        <LuChevronLeft className="text-[28px] text-[#737373]" />
        <span className="text-[16px] font-[400] text-[#737373]">Go back</span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex w-full flex-col md:w-[450px]">
          <div className="mb-[36px] flex justify-center gap-[16px] md:hidden">
            <Logo />
            <h1 className="font-bc text-[38px] font-[500] text-[#00AFF0]">
              {SITE_TITLE}
            </h1>
          </div>

          <div className="text-center text-[16px] font-[400] text-[#1A1A1A] md:text-[20px]">
            Create your password and start viewing your favorite content
          </div>

          <div className="mt-[52px]">
            <InputExt type="text" placeholder="Your Name" />
          </div>

          <div className="mt-[24px]">
            <InputExt type="email" placeholder="Email" />
          </div>

          <div className="mt-[24px]">
            <InputExt type="text" placeholder="Phone number" />
          </div>

          <div className="mt-[24px]">
            <InputExt type="text" placeholder="Your age" />
          </div>

          <div className="mt-[24px]">
            <InputExt type="text" placeholder="Where do you live?" />
          </div>

          <div className="mt-[40px]">
            <ButtonExt onClick={handleContinueClick}>Continue</ButtonExt>
          </div>
        </div>
      </div>

      <div className="relative h-[8px] w-full rounded-[2px] bg-[#EBEBEB]">
        <div
          className="absolute bottom-0 left-0 top-0 bg-[#ECB35E]"
          style={{ width: `${(signup.stage * 100) / signup.totalStage}%` }}
        />
      </div>
    </div>
  );
}
