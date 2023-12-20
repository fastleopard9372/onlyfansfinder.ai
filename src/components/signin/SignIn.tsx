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
    <section className="flex h-screen w-full overflow-x-hidden">
      <div className="hidden flex-1 flex-col items-center bg-[#00AFF0] bg-[url('/images/signin/bg.png')] bg-left-bottom bg-no-repeat md:flex">
        <div className="mt-[132px] flex flex-wrap justify-center gap-[16px]">
          <Logo />
          <h1 className="font-bc text-[30px] font-[500] text-[#FFFFFF] lg:text-[50px]">
            Onlyfansfinder.ai
          </h1>
        </div>

        <div className="font-ms mt-[40px] px-[32px] text-[20px] font-[500] text-[#FFFFFF] lg:text-[30px]">
          The best online creators in one place
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-[24px]">
        <div className="mx-[24px] flex w-full flex-col md:w-[450px]">
          <div className="flex justify-center gap-[16px] md:hidden">
            <Logo />
            <h1 className="font-bc text-[38px] font-[500] text-[#00AFF0]">
              Onlyfansfinder.ai
            </h1>
          </div>

          <div className="font-ms mt-[80px] block px-[48px] text-center text-[20px] font-[500] text-[#00AFF0] md:hidden">
            The best online{" "}
            {user.data.role === ROLES.CUSTOMER ? "customers" : "creators"} in
            one place
          </div>

          <div className="mt-[80px] text-center text-[18px] font-[500] text-[#1A1A1A] md:hidden">
            Log in
          </div>

          <div className="hidden text-[25px] font-[400] text-[#1A1A1A] md:block">
            {user.data.role === ROLES.CUSTOMER
              ? "Customer sign-in"
              : "Creator sign-in"}
          </div>

          <div className="mt-[24px]">
            <Input
              type="email"
              className="h-[48px] md:h-[72px]"
              placeholder="Email"
            />
          </div>

          <div className="mt-[36px]">
            <Input
              type="password"
              className="h-[48px] md:h-[72px]"
              placeholder="Password"
            />
          </div>

          <div className="mt-[36px]">
            <Button className="font-ms h-[48px] w-full bg-[#00AFF0] text-center text-[20px] font-[500] text-[#FFFFFF] md:h-[60px]">
              Login
            </Button>
          </div>

          <div className="mt-[32px] flex justify-center gap-[8px] text-[16px] font-[400] text-[#00AFF0] md:justify-between md:text-[20px]">
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
