import React, { useState } from 'react'
import { ThemeContext } from './ContextComp'
import Child from './Child';

function Parent() {
    const [state,setState]=useState("light");
  return (
    <ThemeContext.Provider value={{state,setState}}>
        <p>{state}</p>
<Child/>
    </ThemeContext.Provider>
  )
}

export default Parent