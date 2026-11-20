import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/** Voegt Tailwind-classes samen en lost conflicten op (laatste wint). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
