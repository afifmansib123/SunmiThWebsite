import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLocalizedData<T extends Record<string, unknown>>(
  locale: string,
  data: Record<string, T[]>
) {
  const localizedData = data[locale];
  return localizedData?.[0] || {};
}