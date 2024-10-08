/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LuChevronLeft, LuEye, LuEyeOff } from "react-icons/lu";

import { error, success } from "@/lib/utils";
import { getSignup, setData, setStage } from "@/redux/features/signupSlice";
import { register } from "@/redux/actions/auth";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { SITE_TITLE } from "@/utils/constants";

import Logo from "@/components/_layout/Logo";
import ButtonExt from "@/components/_uiext/ButtonExt";
import InputIconExt from "@/components/_uiext/InputIconExt";

export default function CreatorSignupStep3() {
  const router = useRouter();
  const signup = useAppSelector(getSignup);
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [r_password, setR_password] = useState<string>("");
  const handleGoBackClick = () => {
    if (signup.stage === 1) {
      router.push("/signin");
    } else {
      dispatch(setStage(signup.stage - 1));
    }
  };

  const handleStartNowClick = () => {
    if (signup.data.password.length <= 4) {
      error("Password Length are more 4");
    } else if (signup.data.password !== r_password) {
      error("Password Confirm is wrong");
    } else {
      dispatch(register(signup.data, router));
      //dispatch(setStage(1));
      // router.push("/signin");
    }
  };

  const handleFieldChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (field === "password") {
        dispatch(
          setData({
            [field]: e.target.value
          })
        );
      } else if (field === "r_password") {
        setR_password(e.target.value);
      }
    };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
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
            Create your password and start sharing your content
          </div>

          <div className="mt-[52px]">
            <InputIconExt
              type={!showPassword ? "password" : "text"}
              placeholder="New Password"
              icon={
                !showPassword ? (
                  <LuEye className="text-[20px] text-[#737373]" />
                ) : (
                  <LuEyeOff className="text-[20px] text-[#737373]" />
                )
              }
              onInputChange={handleFieldChange("password")}
              onIconClick={handleShowPassword}
            />
          </div>

          <div className="mt-[24px]">
            <InputIconExt
              type={!showPassword ? "password" : "text"}
              placeholder="Repeat Password"
              icon={
                !showPassword ? (
                  <LuEye className="text-[20px] text-[#737373]" />
                ) : (
                  <LuEyeOff className="text-[20px] text-[#737373]" />
                )
              }
              onInputChange={handleFieldChange("r_password")}
              onIconClick={handleShowPassword}
            />
          </div>

          <div className="mt-[40px]">
            <ButtonExt onClick={handleStartNowClick}>
              <span className="hidden md:block">
                Create password and start now!
              </span>
              <span className="block md:hidden">Start now</span>
            </ButtonExt>
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
