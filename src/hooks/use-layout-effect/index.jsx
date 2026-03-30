import { useLayoutEffect, useState, useRef } from "react";

export const LayoutEffectExample = () => {
    const [boxWidth, setBoxWidth] = useState(0);
    const boxRef = useRef();

    // runs before the useEffect(), in a small gap between the Dom exisiting and having its changes
    // useLayoutEffect is a version of useEffect that fires synchronously after all DOM mutations but 
    // before the browser repaints the screen
    useLayoutEffect(() => {
        // Measure the width of the box immediately after rendering
        if (boxRef.current) {
            // offsetWidth returns the layout width of an element in pixels,
            // including its padding, borders, and vertical scrollbar (if any), 
            // but not margins
            setBoxWidth(boxRef.current.offsetWidth);
        }
    });
    return (
        <div>
            <div
              ref={boxRef}
              style={{
                width: "90%",
                height: "100px",
                backgroundColor: "lightblue",
                color: "black",
              }}>
                Resize me!
            </div>
            <p>The box width is: {boxWidth}px</p>
        </div>
    );
}