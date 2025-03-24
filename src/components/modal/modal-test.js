import { useState } from "react"
import Modal from "."

export default function ModalTest(params) {
    const [showPopup,setShowPopup]=useState(false)
function handleModalPopup(e) {
    e.stopPropagation()
    setShowPopup((prev)=>!prev)
}
    return (
        <div className=" h-screen w-full flex items-center justify-center flex-col drop-shadow-lg" onClick={()=>{setShowPopup(false)}}>
            <button onClick={handleModalPopup} className=" py-2 px-2 bg-amber-400 rounded-md">open popup</button>
            {showPopup && <Modal body={<p>customized body</p>} isVisible={showPopup}/>}
        </div>
    )
}

