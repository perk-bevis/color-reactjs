import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './input'
import Square from './square'


function App() {
  const [ colorvalue, setColorValue] = useState("")
  const [hexValue, setHexValue] = useState('')
  return (
    <>
      <div className="App">
        <Square colorvalue={colorvalue} hexValue= {hexValue}/>
        <Input colorvalue={colorvalue} setColorValue={setColorValue} setHexValue={setHexValue}/>
      </div>
    </>
  )
}

export default App
