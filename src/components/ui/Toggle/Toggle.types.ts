import { ComponentPropsWithoutRef } from 'react';

import { toggleStyles } from './Toggle.styles';
import { VariantProps } from '../tv';

type ToggleStyleProps = VariantProps<typeof toggleStyles>;

export type ToggleProps = ComponentPropsWithoutRef<'button'> &
  ToggleStyleProps & {
    isToggled?: boolean;
    onToggle?: (isToggled: boolean) => void;
  };
