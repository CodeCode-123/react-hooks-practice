import { useState, useRef, useEffect } from "react";

export const RefExample = () => {
    const [count, setCount] = useState(0);
    const previousCount = useRef(0);

    // useRef() does not trigger a re-render, but useState() will trigger a re-render
    // useRef() is commonly used combination with useEffect() to track 
    // the previous value across component rerender, 
    // previousCount.current tracks the value before {count} 
    useEffect(() => {
        previousCount.current = count;
    }, [count]);

    return (
        <>
          <p>Count: {count}</p>
          <p>Previous Count: {previousCount.current}</p>
          <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        </>
    );
    // const onClick = () => {
    //     // inputRef.current allow you to see all the information from a ref
    //     //console.log(inputRef.current.value);
    //     // after clicking the button, focus the input
    //     //inputRef.current.focus();
    //     inputRef.current.value = "Pedro";
    // };
    // const inputRef = useRef();
    // // useRef() will store the value of the input element, and will not cause 
    // // the component to re-render when the value is updated
    // useEffect(() => {
    //     console.log("Page rerendered");
    // });

    // return (
    //     <>
    //       <input type="text" ref={inputRef} />
    //       <button onClick={onClick}>Console Log</button>
    //     </>
    // );
};