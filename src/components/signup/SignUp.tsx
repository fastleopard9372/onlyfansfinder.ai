/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

"use client";

import { ROLES, SITE_TITLE } from "@/utils/constants";

import Logo from "@/components/_layout/Logo";

import { useAppSelector } from "@/redux/hooks";
import { getSignup } from "@/redux/features/signupSlice";

import CustomerSignupStep1 from "./CustomerSignupStep1";
import CustomerSignupStep2 from "./CustomerSignupStep2";
import CustomerSignupStep3 from "./CustomerSignupStep3";

import CreatorSignupStep1 from "./CreatorSignupStep1";
import CreatorSignupStep2 from "./CreatorSignupStep2";
import CreatorSignupStep3 from "./CreatorSignupStep3";
import CreatorSignupStep4 from "./CreatorSignupStep4";

export default function SignUp() {
  const signup = useAppSelector(getSignup);

  return (
    <section className="flex h-screen w-full overflow-x-hidden">
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

      {signup.data.role === ROLES.CUSTOMER && signup.stage === 1 && (
        <CustomerSignupStep1 />
      )}

      {signup.data.role === ROLES.CUSTOMER && signup.stage === 2 && (
        <CustomerSignupStep2 />
      )}

      {signup.data.role === ROLES.CUSTOMER && signup.stage === 3 && (
        <CustomerSignupStep3 />
      )}

      {signup.data.role === ROLES.CREATOR && signup.stage === 1 && (
        <CreatorSignupStep1 />
      )}

      {signup.data.role === ROLES.CREATOR && signup.stage === 2 && (
        <CreatorSignupStep2 />
      )}

      {signup.data.role === ROLES.CREATOR && signup.stage === 3 && (
        <CreatorSignupStep3 />
      )}

      {signup.data.role === ROLES.CREATOR && signup.stage === 4 && (
        <CreatorSignupStep4 />
      )}
    </section>
  );
}
