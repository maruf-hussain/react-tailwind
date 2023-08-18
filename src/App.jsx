import { useState } from 'react'
import './App.css'
import Navbar from './componets/Navbar/Navbar'
import PriceList from './componets/PriceLIst/PriceList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar></Navbar>
    <PriceList></PriceList>


       
    </>
  )
}

export default App
