"use client";

import { Button } from "@/components/ui/button";

interface Props {
  children: React.ReactNode;

  onClick?: (event: React.MouseEvent) => void;
}

export default function ButtonExt({ children, onClick }: Props) {
  return (
    <Button
      onClick={onClick}
      className="font-ms h-[48px] w-full bg-[#00AFF0] text-center text-[16px] font-[500] text-[#FFFFFF] hover:bg-[#1796D4] md:h-[60px] md:text-[20px]"
    >
      {children}
    </Button>
  );
}
