import React, { useContext } from 'react';
import { counterContext } from '../App';
export default function Component2() {
  const { counter, setCounter } = useContext(counterContext);
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Counter+</button>
    </>
  )



}