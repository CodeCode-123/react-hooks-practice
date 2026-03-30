import { useState } from 'react'
import './App.css';
import { StateExample } from "./hooks/use-state/index";
import { EffectExample } from './hooks/use-effect';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <EffectExample/>
      {/* <StateExample /> */}
    </>
  );
}

export default App
