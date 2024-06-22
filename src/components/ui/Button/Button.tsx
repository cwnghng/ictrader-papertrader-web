import { twMerge } from 'tailwind-merge'
import { buttonStyles, textButtonStyles } from './Button.styles'
import { ButtonProps } from './Button.types'

function Button({
  children,
  className,
  variant,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={twMerge(
        textButtonStyles({ variant }),
        buttonStyles({ variant, className }),
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
