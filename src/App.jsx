import './App.css';
import { StateExample } from "./hooks/use-state/index";
import { EffectExample } from './hooks/use-effect';
import { ContextExample } from './hooks/use-context';
import { ReducerExample } from './hooks/use-reducer';
import { RefExample } from './hooks/use-ref';
import { ImperativeHandleExample } from './hooks/use-imperative-handle';
import { LayoutEffectExample } from './hooks/use-layout-effect';
import { InsertionEffectExampe } from './hooks/use-insertion-effect';
import { UseIdExample } from './hooks/use-id';
import { TransitionExample } from './hooks/use-transition';
import { DeferredValueExample } from './hooks/use-deferred-value';
import { SyncExternalStoreExample } from './hooks/use-sync-external-store';

function App() {

  return (
    <>
      <SyncExternalStoreExample />
      {/* <DeferredValueExample /> */}
      {/* <TransitionExample /> */}
      {/* <UseIdExample /> */}
      {/* <InsertionEffectExampe /> */}
      {/* <LayoutEffectExample /> */}
      {/* <ImperativeHandleExample /> */}
      {/* <RefExample /> */}
      {/* <ReducerExample /> */}
      {/* <ContextExample/> */}
      {/* <EffectExample/> */}
      {/* <StateExample /> */}
    </>
  );
}

export default App
