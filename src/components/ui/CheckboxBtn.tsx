import events from 'events'
import React from 'react'

interface ICheckboxBtn {
  key?: number
  id: string
  name: string
  text: string
  isChecked?: boolean
  onChange(e: React.ChangeEvent<HTMLInputElement>): void
}

export function CheckboxBtn({ id, name, text, isChecked, onChange }: ICheckboxBtn) {
  function pokeInput() {
    const input = document.getElementById(id) as HTMLInputElement
    input.click()
  }
  return (
    <div className="checkbox-btn" onClick={pokeInput}>
      <input id={id} type="checkbox" name={name} onChange={onChange} />
      <label>{text}</label>
    </div>
  )
}
