import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prac from './Comp/Prac'
import Crud from './Comp/Crud'
import DynamicForm from './Comp/DynamicForm'
import Cars24Post from './Comp/Cars24Post'
import Parent from './Comp/ContextComp/Parent'
import CounterComp from './Comp/CounterComp'
import RoutesMain from "./RoutesMain/index";
import UseRefComp from './Comp/UseRefComp'
import SearchWithDebounce from './Comp/SearchWithDebounce'
function App() {
  const [count, setCount] = useState(0)

  return (
   
    <>
     {/* <RoutesMain /> */}
  {/* <Crud/> */}
  {/* <DynamicForm/> */}
  {/* <Cars24Post/> */}
  {/* <Parent/> */}
  {/* <CounterComp/> */}
  <SearchWithDebounce/>
    </>
  )
}

export default App
