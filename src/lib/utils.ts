import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind CSS classnames merge.
 * The function resolves conflicting Tailwind CSS classnames and merges them into one
 * @param { string | string[] } inputs - Tailwind CSS classnames
 * @returns { string } - Merged Tailwind CSS classnames
 * @example cn("text-red-500", "text-center", "text-cyan-500") // => "text-center text-cyan-500"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}