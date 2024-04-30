interface RadioButtonProps {
  label: string
  checked: boolean
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  checked,
  ...props
}) => {
  return (
    <label className="text-radio-label grid-cols-radio-button text-sm box-border grid gap-2">
      <input
        className="text-radio-unchecked border-radio-unchecked rounded-half translate-y-0.5 checked:border-5 checked:border-radio-checked checked:text-radio-checked m-0 box-border h-4 w-4 appearance-none border-2 bg-white disabled:cursor-not-allowed"
        type="radio"
        checked={checked}
        {...props}
      />
      {label}
    </label>
  )
}
