import { tv } from '../tv';

export const toggleStyles = tv(
  'flex items-center w-14 h-8 rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out',
  {
    variants: {
      variant: {
        primary: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export const toggleCircleStyles = tv(
  'block size-6 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out',
  {
    variants: {
      variant: {
        primary: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);
