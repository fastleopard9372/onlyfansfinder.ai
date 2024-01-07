"use client";

import { Input } from "@/components/ui/input";

interface Props {
  type: "text" | "email" | "password" | "number";
  placeholder?: string;

  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string
}

export default function InputExt({
  type,
  placeholder,
  value,
  onChange,
  className
}: Props) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      className={`h-[48px] md:h-[72px] ${className}`}
      value={value}
      onChange={onChange}
    />
  );
}
