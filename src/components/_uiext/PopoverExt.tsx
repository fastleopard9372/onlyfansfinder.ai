"use client";

import { v4 as uuidv4 } from "uuid";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface Props {
  children: React.ReactNode;
  trigger: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}
export default function PopoverExt({ children, trigger, className, onClick }: Props) {
  const uuid = uuidv4();

  return (
    <div className="flex items-center justify-between gap-[12px] w-full myPopover">
      <Popover
        id={uuid}
        className={cn("w-full data-[state=checked]:border-[#EFEFEF] data-[state=checked]:bg-[#EFEFEF]", className)}
      >
        <PopoverTrigger>
          {trigger}
        </PopoverTrigger>
        <PopoverContent>
          {children}
        </PopoverContent>
      </Popover>
    </div>
  );
}
