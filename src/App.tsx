import "./App.css"

import { useState } from "react"

export default function App() {
  const [value, setValue] = useState("")
  const [error, setError] = useState("")
  const [list, setList] = useState([]) // Correctly initialize as an array

  // Validate the current value length
  const isValueValid = (value) => value.length >= 3

  function onAddButtonClick() {
    if (!isValueValid(value)) return // Ensure value is valid before adding
    const id = Date.now().toString() // Generate a unique ID using timestamp
    const updatedList = [...list, { id, value }]
    setList(updatedList)
    setValue("") // Clear input after adding
  }

  function onInputButtonClick() {
    const promptValue = prompt("Введите значение")
    if (promptValue && isValueValid(promptValue)) {
      setValue(promptValue)
      setError("")
    } else {
      setError("Ошибка: введено менее 3 символов")
    }
  }

  return (
    <div>
      <button className="button" onClick={onInputButtonClick}>
        Ввести новое
      </button>
      <button
        className="button"
        disabled={!isValueValid(value)}
        onClick={onAddButtonClick}
      >
        Добавить в список
      </button>
      <br />
      <div className="error">{error}</div>
      <output className="output">Текущее значение: {value}</output>
      <ul className="list">
        {list.length > 0 ? (
          list.map((item) => <li key={item.id}>{item.value}</li>)
        ) : (
          <div>Нет добавленных элементов</div>
        )}
      </ul>
    </div>
  )
}
