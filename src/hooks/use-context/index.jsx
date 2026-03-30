import { useState, createContext, useContext } from "react";

export const GlobalStateContext = createContext(null);

export const ContextExample = () => {
    const [isToggle, setIsToggle] = useState(false);

    return (
        <GlobalStateContext.Provider value={{ isToggle, setIsToggle }}>
            <div>
                <h1>Parent Component</h1>
                {/* <ChildToggle setIsToggle={setIsToggle} />
                <ChildDisplay isToggle={isToggle} /> */}
                <ChildToggle />
                <ChildDisplay />
            </div>
        </GlobalStateContext.Provider>
    );
};

// const ChildToggle = ({ setIsToggle }) => {
const ChildToggle = () => { // not use props to pass data down to the child component
    const {setIsToggle} = useContext(GlobalStateContext);
    return (
        <div>
            <button onClick={() => setIsToggle((prev) => !prev)}>Toggle State</button>
        </div>
    );
};

// Child Component to Display State
//const ChildDisplay = ({ isToggle }) => {
const ChildDisplay = () => { // not use props to pass data down to the child component
    const {isToggle} = useContext(GlobalStateContext);
    return (
        <div>
            <p>Current State: {isToggle ? "ON" : "OFF"}</p>
        </div>
    );
};