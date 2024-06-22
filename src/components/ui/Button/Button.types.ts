import { ComponentPropsWithoutRef } from 'react';

import { buttonStyles } from './Button.styles';
import { VariantProps } from '../tv';

type ButtonStylesProps = VariantProps<typeof buttonStyles>;

export type ButtonProps = ComponentPropsWithoutRef<'button'> &
  ButtonStylesProps & {
    loading?: boolean;
  };
