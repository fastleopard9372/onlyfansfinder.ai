/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

"use client";

import { useRouter } from "next/navigation";

import { LuChevronLeft } from "react-icons/lu";

import { getSignup, setData, setStage } from "@/redux/features/signupSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { SITE_TITLE } from "@/utils/constants";

import Logo from "@/components/_layout/Logo";
import ButtonExt from "@/components/_uiext/ButtonExt";
import CheckboxExt from "@/components/_uiext/CheckboxExt";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function CustomerSignupStep2() {
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

  const handleCheckChange = (question: string, option: string) => () => {
    const { qa } = signup.data;
    let newQA = JSON.parse(JSON.stringify(qa));

    if (qa.findIndex((item) => item.question === question) > -1) {
      let qaItem = qa.find((item) => item.question === question);

      if (qaItem) {
        if (qaItem.answers?.indexOf(option) > -1) {
          const newAnswers = qaItem.answers.filter((item) => item !== option);
          qaItem = { ...qaItem, answers: newAnswers };
        } else {
          const newAnswers = [...qaItem.answers, option];
          qaItem = { ...qaItem, answers: newAnswers };
        }

        newQA = newQA.filter((item: any) => item.question !== qaItem?.question);
        newQA.push(qaItem);

        dispatch(setData({ qa: newQA }));
      }
    } else {
      newQA.push({
        question,
        answers: [option]
      });

      dispatch(setData({ qa: newQA }));
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

          <div className="mb-[52px] text-center text-[16px] font-[400] text-[#1A1A1A] md:text-[20px]">
            Help us know what you like
          </div>

          <ScrollArea className="max-h-[450px]" type="always">
            <div className="flex w-full flex-col gap-[36px]">
              {[
                "Question 1 (multiple selection)",
                "Question 2 (multiple selection)",
                "Question 3 (multiple selection)"
              ].map((question) => (
                <div key={question} className="flex flex-col">
                  <div className="text-[20px] font-[400] text-[#303030]">
                    {question}
                  </div>

                  <div className="mt-[20px] flex flex-col gap-[10px]">
                    {["Option 1", "Option 2", "Option 3", "Option 4"].map(
                      (opt) => (
                        <CheckboxExt
                          key={opt}
                          label={opt}
                          checked={
                            !!signup.data.qa.find(
                              (item) =>
                                item.question === question &&
                                item.answers.indexOf(opt) > -1
                            )
                          }
                          onCheckChange={handleCheckChange(question, opt)}
                        />
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
            <ScrollBar orientation="vertical" />
          </ScrollArea>

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
