import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { VariantProps } from '../tv';

import { textStyles } from './Text.styles';

type TextStylesProps = VariantProps<typeof textStyles>;

export type TextProps<C extends ElementType> = {
  as?: C;
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<C> &
  TextStylesProps;
