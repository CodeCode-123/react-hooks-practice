import './App.css';
import { StateExample } from "./hooks/use-state/index";
import { EffectExample } from './hooks/use-effect';
import { ContextExample } from './hooks/use-context';
import { ReducerExample } from './hooks/use-reducer';
import { RefExample } from './hooks/use-ref';

function App() {

  return (
    <>
      <RefExample />
      {/* <ReducerExample /> */}
      {/* <ContextExample/> */}
      {/* <EffectExample/> */}
      {/* <StateExample /> */}
    </>
  );
}

export default App
