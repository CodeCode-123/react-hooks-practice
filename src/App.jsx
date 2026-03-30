import { useState } from 'react'
import './App.css';
import { StateExample } from "./hooks/use-state/index";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StateExample />
    </>
  );
}

export default App
