/* eslint-disable import/prefer-default-export */
import { tv } from '../tv';

export const toastStyles = tv(
  'border-t m-2 z-50 p-4 px-8 rounded-2xl shadow-lg',
  {
    variants: {
      variant: {
        success: 'bg-green-100 border-green-500 text-green-600',
        error: 'bg-red-100 border-red-500 text-red-600',
        warning: 'bg-yellow-100 border-yellow-500 text-yellow-600',
        info: 'bg-blue-100 border-blue-500 text-blue-600',
      },
    },
    defaultVariants: {
      variant: 'success',
    },
  },
);
