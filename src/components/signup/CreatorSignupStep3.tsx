/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

"use client";

import { useRouter } from "next/navigation";

import { FaCheckCircle } from "react-icons/fa";
import { LuChevronLeft } from "react-icons/lu";

import { getSignup, setStage } from "@/redux/features/signupSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { SITE_TITLE } from "@/utils/constants";

import Logo from "@/components/_layout/Logo";
import ButtonExt from "@/components/_uiext/ButtonExt";
import { ISubscription } from "@/types/interfaces";

function SubscriptionCard(props: ISubscription) {
  const { periodMonth, description, price, totalPrice } = props;

  return (
    <div className="flex flex-1 flex-col justify-between rounded-[10px] p-[24px] shadow-[0px_41px_41px_0px_#00000017,0px_10px_22px_0px_#0000001A,0px_163px_65px_0px_#00000003,0px_255px_71px_0px_#00000000,0px_92px_55px_0px_#0000000D]">
      <div className="font-ms mb-[16px] text-center text-[30px] font-[500] text-[#1A1A1A]">
        {periodMonth} month
      </div>

      <div className="mb-[48px] text-center text-[18px] font-[400] text-[#1A1A1A]">
        {description}
      </div>

      <div className="mb-[32px] flex flex-col gap-[8px]">
        {["More visibility", "More fans", "More earnings", "Faster growth"].map(
          (f) => (
            <div key={f} className="flex items-center gap-[12px]">
              <FaCheckCircle className="text-[20px] text-[#ECB35E]" />
              {f}
            </div>
          )
        )}
      </div>

      <div className="flex gap-[8px] text-[18px] font-[600]">
        <span className="text-[#00ABEA]">${price} / month</span>
        <span className="text-[#5C5C5C]">(Total ${totalPrice})</span>
      </div>
    </div>
  );
}

export default function CreatorSignupStep3() {
  const router = useRouter();
  const signup = useAppSelector(getSignup);
  const dispatch = useAppDispatch();

  const subscriptions: ISubscription[] = [
    {
      id: 1,
      periodMonth: 1,
      description: "Perfect for getting started if you don't have content yet.",
      price: 99,
      totalPrice: 99
    },
    {
      id: 2,
      periodMonth: 3,
      description: "Ideal for those who already have content.",
      price: 79,
      totalPrice: 237
    }
  ];

  const handleGoBackClick = () => {
    if (signup.stage === 1) {
      router.push("/signin");
    } else {
      dispatch(setStage(signup.stage - 1));
    }
  };

  const handleAddPromotionClick = () => {
    if (signup.stage < signup.totalStage) {
      dispatch(setStage(signup.stage + 1));
    }
  };

  const handleAddPromotionLaterClick = () => {
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

          <div className="mb-[52px] text-center text-[16px] font-[400] text-[#1A1A1A] md:text-[20px]">
            Get more users to see your content
          </div>
        </div>
        <div className="w-full h-[450px] relative max-sm:overflow-x-scroll">
          <div className="absolute flex w-full justify-center gap-[32px] max-sm:w-[600px]">
            {subscriptions.map((s) => (
              <SubscriptionCard key={s.id} {...s} />
            ))}
          </div>
        </div>

        <div className="mt-[40px] flex w-full flex-col gap-[16px] md:w-[450px]">
          <ButtonExt onClick={handleAddPromotionClick}>Add promotion</ButtonExt>
          <div
            className="cursor-pointer text-center text-[16px] font-[400] text-[#9F9F9F] md:text-[20px]"
            onClick={handleAddPromotionLaterClick}
          >
            Add promotion later
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
