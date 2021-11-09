import events from 'events'
import React from 'react'

interface ICheckboxBtn {
  key?: number
  name: string
  text: string
  isChecked?: boolean
  onChange(e: React.ChangeEvent<HTMLInputElement>): void
}

export function CheckboxBtn({ name, text, isChecked, onChange }: ICheckboxBtn) {
  function pokeInput() {
    const input = document.getElementById(name) as HTMLInputElement
    input.click()
  }
  return (
    <div className="checkbox-btn" onClick={pokeInput}>
      <input id={name} type="checkbox" name={name} onChange={onChange} />
      <label>{text}</label>
    </div>
  )
}
