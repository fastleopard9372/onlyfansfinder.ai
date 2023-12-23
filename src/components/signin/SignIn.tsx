/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";

import { LuEye, LuEyeOff } from "react-icons/lu";

import Logo from "@/components/_layout/Logo";
import ButtonExt from "@/components/_uiext/ButtonExt";
import InputExt from "@/components/_uiext/InputExt";
import InputIconExt from "@/components/_uiext/InputIconExt";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { ROLES, SITE_TITLE } from "@/utils/constants";
import { getSignin, setData, setRole } from "@/redux/features/signinSlice";
import { setRole as setSignupRole } from "@/redux/features/signupSlice";

export default function SignIn() {
  const router = useRouter();
  const signin = useAppSelector(getSignin);
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const handleFieldChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        setData({
          [field]: e.target.value
        })
      );
    };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLoginClick = () => {
    router.push("/search");
  };

  const handleCreatorSignInClick = () => {
    dispatch(
      setRole(
        signin.data.role === ROLES.CREATOR ? ROLES.CUSTOMER : ROLES.CREATOR
      )
    );

    dispatch(
      setSignupRole(
        signin.data.role === ROLES.CREATOR ? ROLES.CUSTOMER : ROLES.CREATOR
      )
    );
  };

  return (
    <section className="flex min-h-screen w-full overflow-x-hidden">
      <div className="hidden flex-1 flex-col items-center bg-[#00AFF0] bg-[url('/images/signin/bg.png')] bg-left-bottom bg-no-repeat md:flex">
        <div className="mt-[132px] flex flex-wrap justify-center gap-[16px]">
          <Logo />
          <h1 className="font-bc text-[30px] font-[500] text-[#FFFFFF] lg:text-[50px]">
            {SITE_TITLE}
          </h1>
        </div>

        <div className="font-ms mt-[40px] px-[32px] text-[20px] font-[500] text-[#FFFFFF] lg:text-[30px]">
          The best online creators in one place
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-[24px]">
        <div className="flex w-full flex-col md:w-[450px]">
          <div className="flex justify-center gap-[16px] md:hidden">
            <Logo />
            <h1 className="font-bc text-[38px] font-[500] text-[#00AFF0]">
              {SITE_TITLE}
            </h1>
          </div>

          <div className="font-ms mt-[80px] block px-[48px] text-center text-[20px] font-[500] text-[#00AFF0] md:hidden">
            The best online{" "}
            {signin.data.role === ROLES.CUSTOMER ? "customers" : "creators"} in
            one place
          </div>

          <div className="mt-[80px] text-center text-[18px] font-[500] text-[#1A1A1A] md:hidden">
            Log in
          </div>

          <div className="hidden text-[25px] font-[400] text-[#1A1A1A] md:block">
            {signin.data.role === ROLES.CUSTOMER
              ? "Customer sign-in"
              : "Creator sign-in"}
          </div>

          <div className="mt-[12px] md:mt-[24px]">
            <InputExt
              type="email"
              placeholder="Email"
              onChange={handleFieldChange("email")}
            />
          </div>

          <div className="mt-[12px] md:mt-[36px]">
            <InputIconExt
              type={!showPassword ? "password" : "text"}
              placeholder="Password"
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

          <div className="mt-[28px] md:mt-[36px]">
            <ButtonExt onClick={handleLoginClick}>Login</ButtonExt>
          </div>

          <div className="mt-[20px] flex justify-between gap-[8px] text-[16px] font-[400] text-[#00AFF0] md:mt-[32px] md:text-[20px]">
            <div className="cursor-pointer" onClick={handleCreatorSignInClick}>
              {signin.data.role === ROLES.CUSTOMER
                ? "Creator Sign-In"
                : "Customer Sign-In"}
            </div>
            <span>|</span>
            <Link href="/forget">Forgotten password?</Link>
            <span>|</span>
            <Link href="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
