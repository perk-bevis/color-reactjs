import React from 'react'

const Square = ({ colorvalue, hexValue}) => {
  return (
    <section className='square' 
    style={{ backgroundColor: colorvalue}}>
      <p>{colorvalue ? colorvalue : "emty value"}</p>
      <p>{hexValue? hexValue : null}</p>
    </section>
  )
}

Square.defaultProps = {
  colorvalue: "Emty Color Value"
}

export default Square
