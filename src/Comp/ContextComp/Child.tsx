import React, { useContext } from 'react'
import { ThemeContext } from './ContextComp'

function Child() {
    const {state,setState} = useContext(ThemeContext);
    console.log(state);
  return (
    <div>

    <button onClick={()=>state === "light" ? setState("dark") : setState("light")} >{state}</button>
    </div>
  )
}

export default Child