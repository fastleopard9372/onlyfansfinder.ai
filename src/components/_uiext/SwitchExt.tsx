"use client";

import { CheckedState } from "@radix-ui/react-checkbox";
import { v4 as uuidv4 } from "uuid";

import { Switch } from "@/components/ui/switch";

interface Props {
  label: string;
  checked?: boolean;
  onCheckChange?: (checked: CheckedState) => void;
}

export default function SwitchExt({ label, checked, onCheckChange }: Props) {
  const uuid = uuidv4();
  return (
    <div className="flex items-center gap-[12px]">
      <Switch
        id={uuid}
        className=" data-[state=checked]:border-[#EFEFEF] data-[state=checked]:bg-[#EFEFEF]"
        checked={checked}
        onCheckedChange={onCheckChange}
      />
    </div>
  );
}
