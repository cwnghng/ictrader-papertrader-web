/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentPropsWithRef } from 'react';

import { inputStyles } from './Input.styles';
import { VariantProps } from '../tv';

type InputStylesProps = VariantProps<typeof inputStyles>;

export type InputProps = ComponentPropsWithRef<'input'> &
  InputStylesProps & {
    suffix?: string;
    prefix?: string;
  };
