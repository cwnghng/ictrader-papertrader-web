import { twMerge } from 'tailwind-merge'
import { ComponentPropsWithoutRef } from 'react'
import { VariantProps } from '../tv'
import { toastStyles } from './Toast.styles'

type ToastStylesProps = VariantProps<typeof toastStyles>

export type ToastProps = ComponentPropsWithoutRef<'div'> &
  ToastStylesProps & {
    // eslint-disable-next-line react/require-default-props
    code?: string
  }

function Toast({
  children,
  className,
  variant = 'success',
  code,
  ...props
}: ToastProps) {
  return (
    <div className={twMerge(toastStyles({ variant, className }))} {...props}>
      <div className="font-bold mb-2">{variant}</div>
      <div>{children}</div>
      {code && <div className="mt-2 text-xs">{code}</div>}
    </div>
  )
}

export default Toast
