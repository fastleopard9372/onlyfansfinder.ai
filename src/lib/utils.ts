import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from 'react-toastify';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function success(message) {
  return toast.success(message, { theme: "colored" });
}
export function error(message) {
  return toast.error(message, { theme: "colored" });
}
export function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}