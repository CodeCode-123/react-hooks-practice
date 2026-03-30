import React, { useRef, useImperativeHandle, forwardRef} from "react";

// Parent Component 
export const ImperativeHandleExample = () => {
    const inputRef = useRef();

    return (
        <div>
            <CustomInput ref={ inputRef } />
            {/* the parent only exposes to a particular method of the child */}
            <button onClick={() => inputRef.current.focusInput()}>Focus Input</button>
            <button onClick={() => inputRef.current.clearInput()}>Clear Input</button>
        </div>
    );
};

// Child Component, forwardRef() allows a parent to pass a ref down to a child
// by default, functional components do not receive a ref passed from a parent
const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef();

    // Expose methods or properties to the parent using useImperativeHand
    // useImperativehandle() is useful when to control the parent what component 
    // can access from that child component
    useImperativeHandle(ref, () => ({
        focusInput: () => {
            inputRef.current.focus(); // Method to focus the input
        },
        clearInput: () => {
            inputRef.current.value=""; // Method to clear the input
        },
    }));

    return <input ref={inputRef} type="text" placeholder="Type something..."/>
});
