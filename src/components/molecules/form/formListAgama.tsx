import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/atoms/Form'
import { DataAgama } from '@/libs/dummy/data-agama'
import { cn } from '@/libs/helpers/utils'
import { UseFormReturn } from 'react-hook-form'
import Select from 'react-select'

interface inputProps {
  name: string
  placeholder: string
  headerLabel: string
  isDisabled?: boolean
  className?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form?: UseFormReturn | any | undefined
}

export function FormListAgama({
  name,
  headerLabel,
  placeholder,
  isDisabled,
  form,
  className,
}: inputProps) {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => {
        return (
          <FormItem className={cn('flex flex-col space-y-2', className)}>
            <FormLabel className={'py-4 text-[2rem]'}>{headerLabel}</FormLabel>
            <FormControl>
              <Select
                {...field}
                className={'text-[2rem]'}
                options={DataAgama}
                value={
                  DataAgama.filter((item) => item.value === field.value)[0]
                }
                placeholder={placeholder ?? 'Input here'}
                onChange={(optionSelected) => {
                  field.onChange(optionSelected?.value)
                  form.setValue(name, optionSelected?.value)
                }}
                isDisabled={isDisabled}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
