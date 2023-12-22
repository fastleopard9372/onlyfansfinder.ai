/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */

"use client";

import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

interface IChip {
  uuid: string;
  label: string;
}

export default function ChipInputExt() {
  const [chips, setChips] = useState<IChip[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setChips((prev) => [
        ...prev,
        {
          uuid: uuidv4(),
          label: (e.target as HTMLTextAreaElement).value.trim()
        }
      ]);
      (e.target as HTMLTextAreaElement).value = "";
    }
  };

  return (
    <div className="min-h-[240px] border border-[#8A8A8A] p-[16px]">
      <textarea
        className="h-full w-full outline-none"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
