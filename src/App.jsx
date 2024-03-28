import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { initialState } from './features/products/productsSlise'

function App() {
  const [count, setCount] = useState(0)
  // const product = useSelector((store) => store.products)

  console.log(initialState);
  let data = initialState.oquvchilar
  return (
    <>
      {data.map((items) => <div><img src={items.images} alt="" /><h1>{items.title}</h1></div>)}
    </>
  )
}

export default App
