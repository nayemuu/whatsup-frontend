"use client";

import { useEffect, RefObject } from "react";

export default function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T | null>, // Allow nullable ref to avoide TypeScript Error
  callback: () => void
): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
