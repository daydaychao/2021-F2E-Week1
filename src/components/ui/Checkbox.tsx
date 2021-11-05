import events from 'events'
import React from 'react'

interface ICheckBox {
  key: number
  name: string
  text: string
  isChecked: boolean
  onChange(): any
}

export function Checkbox({ name, text, isChecked, onChange }: ICheckBox) {
  return (
    <label className="flex items-center space-x-3 mb-3 cursor-pointer">
      <input type="checkbox" name={name} checked={isChecked} onChange={onChange} className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-green-light checked:border-transparent focus:outline-none" />
      <span className="text-gray-700 hover:text-green-500 dark:text-white font-normal">{text}</span>
    </label>
  )
}
