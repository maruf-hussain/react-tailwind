import { useState } from 'react'
import './App.css'
import Navbar from './componets/Navbar/Navbar'
import PriceList from './componets/PriceLIst/PriceList'
import Rechart from './componets/Rechart/Rechart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar></Navbar>
    <PriceList></PriceList>
    <Rechart></Rechart>


       
    </>
  )
}

export default App
