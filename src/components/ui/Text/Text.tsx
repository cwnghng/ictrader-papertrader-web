import { ElementType } from 'react';

import { textStyles } from './Text.styles';
import { TextProps } from './Text.types';

function Text<C extends ElementType>({
  as,
  children,
  className,
  variant,
  ...props
}: TextProps<C>) {
  const Component = as || 'p';

  return (
    <Component className={textStyles({ variant, className })} {...props}>
      {children}
    </Component>
  );
}

export default Text;
