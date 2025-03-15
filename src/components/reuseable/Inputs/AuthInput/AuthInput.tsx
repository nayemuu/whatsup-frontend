"use client";

import useOutsideClick from "@/hook/useOutsideClick";
import { useRef, useState } from "react";

type AuthInputProps = {
  value: string;
  setValue: (value: string) => void;
  type: string;
  placeholder: string;
  required?: boolean;
  error?: string;
};

export default function AuthInput({
  value,
  setValue,
  type,
  placeholder,
  required = false,
  error,
}: AuthInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useOutsideClick(inputRef, () => setIsFocused(false));

  return (
    <div className="mt-8 content-center dark:text-dark_text_1 space-y-1">
      <label className="text-sm font-bold tracking-wide">{placeholder}</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)} //getting error here typescript
        ref={inputRef}
        className={`w-full dark:bg-dark_bg_3 text-base py-2 px-4 rounded-lg outline-none border border-solid ${
          isFocused ? "border-green-400" : "border-transparent"
        }`}
        onFocus={() => setIsFocused(true)}
        type={type}
        placeholder={placeholder}
        required={required}
      />
      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
}
