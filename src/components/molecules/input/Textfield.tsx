import { cn } from '@/libs/helpers/utils'
import { ComponentProps } from 'react'

interface TextField extends ComponentProps<'input'> {
  label?: string
  isError?: boolean
  errorMessage?: string
  inputClasses?: string
}

export const Textfield = ({
  label,
  isError,
  errorMessage,
  inputClasses,
  ...props
}: TextField) => {
  return (
    <div className={cn(['group', 'relative'])}>
      <input
        {...props}
        className={cn([
          'peer',
          'h-full',
          'w-full',
          'py-1.5',
          'outline',
          'outline-0',
          'border-b-2',

          'border-subdued-text',
          'placeholder-shown:border-subdued-text',
          'bg-transparent',

          'transition-all',

          'disabled:border-0',
          'disabled:bg-form-disabled/50',
          'disabled:cursor-not-allowed',
          inputClasses,
        ])}
      />
      <label
        className={cn([
          'absolute',
          'left-0',
          '-top-6',

          "after:content[' ']",
          'after:absolute',
          'after:-bottom-6',
          'after:block',
          'after:w-full',
          'after:scale-x-0',
          'after:border-b-2',
          'after:border-[#458FFF]',
          'after:transition-transform',
          'after:duration-300',

          'flex',

          'h-full',
          'w-full',
          'select-none',
          'font-medium',
          'leading-6',
          'transition-all',

          'peer-focus:text-base',
          'peer-focus:after:scale-x-100',
          'peer-focus:text-[#458FFF]',
          'peer-placeholder-shown:leading-6',
          'peer-placeholder-shown:text-default',

          'pointer-events-none',
        ])}
      >
        {label}
        {props.required && <span className="text-danger">*</span>}
      </label>
      {isError === true && (
        <p
          className={cn([
            'absolute',
            'sm:-bottom-[1.125rem]',
            'text-xs',
            'text-danger',
          ])}
        >
          {errorMessage}
        </p>
      )}
    </div>
  )
}
