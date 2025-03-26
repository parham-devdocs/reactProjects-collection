import { useRef, useState } from "react";
import UseOutsideClick from ".";

export default function UseOutsideClickComponent() {
    const [showContent, setShowContent] = useState(false);
    const ref = useRef(null); // Reference to the modal content

    const handler = () => setShowContent(false); // Close the modal
    UseOutsideClick({ ref, handler }); // Pass the ref and handler to the hook

    return (
        <div className=" h-screen w-full">
            {/* Button to toggle modal */}
            {!showContent && (
                <button onClick={() => setShowContent(true)}>Show Content</button>
            )}

            {/* Modal Content */}
            {showContent && (
                <div ref={ref} className="modal">
                    <h1>This is the random content</h1>
                    <p>Please click outside of this to close this</p>
                </div>
            )}
        </div>
    );
}