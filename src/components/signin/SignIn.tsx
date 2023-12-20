/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

"use client";

import Link from "next/link";
import Logo from "@/components/_layout/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getUser, setRole } from "@/redux/features/userSlice";
import { ROLES } from "@/utils/constants";

export default function SignIn() {
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const handleCreatorSignInClick = () => {
    dispatch(
      setRole(user.data.role === ROLES.CREATOR ? ROLES.CUSTOMER : ROLES.CREATOR)
    );
  };

  return (
    <section className="flex min-h-screen w-full">
      <div className="flex w-[45%] flex-col bg-[#00AFF0] bg-[url('/images/signin/bg.png')] bg-left-bottom bg-no-repeat">
        <div className="mt-[132px] flex justify-center gap-[16px]">
          <Logo />
          <h1 className="font-bc text-[50px] font-[500] text-[#FFFFFF]">
            Onlyfansfinder.ai
          </h1>
        </div>

        <div className="font-ms mt-[40px] text-center text-[30px] font-[500] text-[#FFFFFF]">
          The best online creators in one place
        </div>
      </div>

      <div className="flex w-[55%] flex-col justify-center">
        <div className="ml-[104px] flex w-[450px] flex-col">
          <div className="text-[25px] font-[400] text-[#1A1A1A]">
            {user.data.role === ROLES.CUSTOMER ? "Log in" : "Creator sign-in"}
          </div>

          <div className="mt-[24px]">
            <Input className="h-[72px]" placeholder="Email" />
          </div>

          <div className="mt-[36px]">
            <Input className="h-[72px]" placeholder="Password" />
          </div>

          <div className="mt-[36px]">
            <Button className="font-ms h-[60px] w-full bg-[#00AFF0] text-center text-[20px] font-[500] text-[#FFFFFF]">
              Login
            </Button>
          </div>

          <div className="mt-[32px] flex justify-between text-[20px] font-[400] text-[#00AFF0]">
            <div className="cursor-pointer" onClick={handleCreatorSignInClick}>
              {user.data.role === ROLES.CUSTOMER
                ? "Creator Sign-In"
                : "Customer Sign-In"}
            </div>
            <span>|</span>
            <Link href="/forget">Forgotten password?</Link>
            <span>|</span>
            <span className="cursor-pointer">Sign up</span>
          </div>
        </div>
      </div>
    </section>
  );
}
