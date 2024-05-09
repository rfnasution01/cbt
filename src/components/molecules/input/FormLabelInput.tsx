/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormReturn } from 'react-hook-form'
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/atoms/Form'
import { Input } from '.'
import { ReactNode } from 'react'

export function FormLabelInput({
  form,
  label,
  placeholder = '',
  name,
  prefix,
  suffix,
  type,
  handlerClick,
  className,
  isDisabled,
}: {
  form: UseFormReturn | undefined | any
  label?: string | ReactNode
  placeholder?: string
  name: string
  prefix?: JSX.Element
  suffix?: JSX.Element
  type?: 'text' | 'number' | 'password' | 'date'
  handlerClick?: () => void
  className?: string
  isDisabled?: boolean
}) {
  return (
    <FormField
      control={form?.control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={`flex flex-col gap-y-8 text-[2rem] text-black ${className}`}
        >
          <FormLabel>{label}</FormLabel>
          <Input
            {...field}
            className="bg-white"
            type={type}
            placeholder={placeholder}
            value={field.value}
            prefix={prefix}
            suffix={suffix}
            handlerClick={handlerClick}
            disabled={isDisabled}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
