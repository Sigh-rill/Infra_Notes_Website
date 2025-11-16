import { useState } from 'react'
import './App.css'
import Sticker from './components/Sticker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sticker></Sticker>
    </>
  )
}

export default App
