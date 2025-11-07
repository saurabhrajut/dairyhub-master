import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getSnf = (fat: number, clr: number, factor = 0.72) => (clr / 4) + (0.25 * fat) + factor;

export const componentProps = {
  milkDensity: 1.03,
};
