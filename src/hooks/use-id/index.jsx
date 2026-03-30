import { useId } from "react";

export const UseIdExample = () => {
    // generating unique, stable IDs that are consistent across
    // both client and server renders
    const id = useId();
    const id2 = useId();

    return (
        <div>
            <label htmlFor={id}>Enter your name:</label>
            <input id={id} type="text"/> <br/><br/>

            <label htmlFor={id2}>Enter your name:</label>
            <input id={id2} type="text" />
        </div>
    );
};