"use client";

import { v4 as uuidv4 } from "uuid";

import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton
} from "@/components/ui/select";
import { Children } from "react";

interface Props {
  label: any;
  children: React.ReactNode;
  className?: string;
  onSelectChange?: () => void;
}

export default function SelectExt({ label, children, className, onSelectChange }: Props) {
  const uuid = uuidv4();
  return (
    <Select className={className}>
      <SelectTrigger>
        <SelectValue className="grow text-left" placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        {children}
      </SelectContent>
    </Select>
  );
}
