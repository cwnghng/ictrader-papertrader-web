import { tv } from '../tv';

export const inputContainerStyles = tv('flex border rounded-2xl bg-white', {
  variants: {
    variant: {
      primary: 'border-gray-300',
      centered: 'border-gray-300',
      start: 'border-gray-300',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export const inputStyles = tv(
  'w-full p-2 rounded-2xl focus:outline-none number-input',
  {
    variants: {
      variant: {
        primary: 'placeholder:text-center',
        centered: 'text-center',
        start: 'text-start',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);
