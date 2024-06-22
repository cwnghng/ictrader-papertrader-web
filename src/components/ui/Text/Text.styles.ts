/* eslint-disable import/prefer-default-export */

import { tv } from '../tv';

export const textStyles = tv('text-black', {
  variants: {
    variant: {
      headline: 'sm:text-[38px] text-[36px] font-bold',
      subheadline: 'sm:text-[36px] text-[28px] font-normal',
      title1: 'text-[40px] font-normal',
      title2: 'text-[36px] font-normal',
      title: 'text-xl font-semibold',
      body1: 'text-[16px] font-normal',
      body2: 'text-[20px] font-normal',
      subtitle: 'text-[14px] font-light',

      // Butler fonts
      headlineMD: 'text-[26px] font-semibold font-montserrat leading-[30px]',
      headlineSM: 'text-[22px] font-semibold leading-[26px]',
      labelMD: 'text-[16px] font-semibold leading-[20px]',
      labelSM: 'text-[10px] font-bold leading-[12px]',
      titleMD: 'text-[22px] font-semibold leading-[26px]',
      titleSM: 'text-[16px] font-semibold leading-[20px]',
      bodyMD: 'text-[16px] font-normal leading-[20px]',
      bodySM: 'text-[14px] font-normal leading-[20px]',
    },
  },
  defaultVariants: {
    variant: 'bodyMD',
  },
});
