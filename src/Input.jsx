import React from 'react'
import colorName from 'colornames'
const Input = ({ colorvalue, setColorValue, setHexValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name:</label>
      <input
        autoFocus
        type='text'
        placeholder='Add Color Name'
        required
        value={colorvalue}
        onChange={(e) => {
          setColorValue(e.target.value)
          setHexValue(colorName(e.target.value))
        }}
      />
    </form>
  )
}

export default Input
