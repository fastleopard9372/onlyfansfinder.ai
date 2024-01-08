"use client";

import { v4 as uuidv4 } from "uuid";
import { cn } from "@/lib/utils";
import { Accordion } from "@/components/ui/accordion";

interface Props {
  children?: React.ReactNode;
  className?: string;
  type?: 'single' | 'multiple';
  onClick?: (event: React.MouseEvent) => void;
}
export default function AccordionExt({ children, className, type, onClick }: Props) {
  const uuid = uuidv4();

  return (
    <div className="flex items-center gap-[12px] w-full">
      <Accordion
        id={uuid}
        type={type}
        className={cn(" w-full data-[state=checked]:border-[#EFEFEF] data-[state=checked]:bg-[#EFEFEF]", className)}
      >
        {children}
      </Accordion>
    </div>
  );
}
