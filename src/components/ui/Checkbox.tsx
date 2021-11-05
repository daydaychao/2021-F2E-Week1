interface props {
  name: string
  text: string
  key: number
}
export function Checkbox({ key, name, text }: props) {
  return (
    <label key={key} className="flex items-center space-x-3 mb-3 cursor-pointer">
      <input type="checkbox" name={name} className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-green-light checked:border-transparent focus:outline-none" />
      <span className="text-gray-700 dark:text-white font-normal">{text}</span>
    </label>
  )
}
