import { tv } from '../tv/tailwind-variant';

export const buttonStyles = tv(
  'flex items-center justify-center bg-black rounded-full px-6 py-3 transition-all disabled:cursor-not-allowed outline-none',
  {
    variants: {
      variant: {
        primary:
          'bg-black hover:bg-white border border-black disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:border-gray-400',
        outlined:
          'bg-white border-2 border-black hover:bg-black disabled:bg-gray-400',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export const textButtonStyles = tv('font-light text-lg', {
  variants: {
    variant: {
      primary: 'text-white hover:text-black disabled:hover:text-white',
      outlined:
        'text-black hover:text-white disabled:hover:text-black font-extrabold',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
