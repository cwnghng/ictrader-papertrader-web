import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { InputProps } from './Input.types';
import { inputContainerStyles, inputStyles } from './Input.styles';
import Text from '../Text/Text';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      prefix,
      suffix,
      className,
      variant,
      disabled,
      placeholder,
      type,
      ...props
    }: InputProps,
    ref,
  ) => {
    return (
      <div className={twMerge(inputContainerStyles({ variant, className }))}>
        {prefix && <Text className="p-2 rounded-2xl absolute">{prefix}</Text>}
        <input
          type={type}
          className={twMerge(inputStyles({ variant }))}
          placeholder={placeholder}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        {suffix && (
          <Text className="p-2 rounded-2xl text-gray-400">{suffix}</Text>
        )}
      </div>
    );
  },
);

export default Input;
