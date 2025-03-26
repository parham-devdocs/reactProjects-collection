import { useEffect } from "react";

export default function UseOutsideClick({ ref, handler }) {
    useEffect(() => {
        console.log(handler)
        function listener(event) {
          console.log(ref)
            if (ref.current && !ref.current.contains(event.target)) {
                handler(); 
            }
        }

        
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

       
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]); 
}