import { useEffect, useState } from "react";

export default function UserWindowResize() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    // Function to handle resize events
    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        
    }

    useEffect(() => {
        // Add the resize event listener
        setWidth(()=>window.innerWidth)
        setHeight(()=>window.innerHeight)
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [width,height]); // Empty dependency array ensures this runs only once

    // Return the width and height
    return { width, height };
}