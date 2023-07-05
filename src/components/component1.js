import React, { useContext } from 'react';
import { counterContext } from '../App';
export default function Component1() {
  const { counter, setCounter } = useContext(counterContext);
  return (
    <>
      <h1>{counter}</h1>
    </>
  )



}