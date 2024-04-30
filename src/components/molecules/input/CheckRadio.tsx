import React, { useEffect, useState } from 'react'

interface CheckRadioButtonProps {
  label: string
  checked: boolean
  disabled?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckRadioButton: React.FC<CheckRadioButtonProps> = ({
  label,
  checked,
  disabled,
  onChange,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  return (
    <label className="text-radio-label grid-cols-radio-button text-sm box-border grid gap-2">
      <input
        className="text-radio-unchecked border-radio-unchecked rounded-half translate-y-0.5 checked:border-5 checked:border-radio-checked checked:text-radio-checked m-0 box-border h-4 w-4 appearance-none border-2 bg-white"
        type="radio"
        disabled={disabled}
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked)
          if (onChange) onChange(e)
        }}
        {...props}
      />
      {label}
    </label>
  )
}

export default CheckRadioButton
