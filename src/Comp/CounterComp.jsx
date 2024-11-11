import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dicri, incri } from '../redux/Counter/CounterSlice';

function CounterComp() {
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch();
console.log(counter);
  return (
    <div>
      <button onClick={()=>dispatch(dicri(2))}>-</button>
      <span>{counter?.count}</span>
      <button onClick={()=>dispatch(incri())}>+</button>
    </div>
  )
}

export default CounterComp