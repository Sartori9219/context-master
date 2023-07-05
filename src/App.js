import React, { createContext, useState } from 'react';
import Component1 from './components/component1';
import Component2 from './components/component2';
import './App.css';
export const counterContext = createContext();

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <counterContext.Provider value={{ counter, setCounter }}>
      <Component1 />
      <Component2 />
    </counterContext.Provider>
  );
}

export default App;
