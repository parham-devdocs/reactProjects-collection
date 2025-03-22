import { useState } from "react";
import ReactQrCode from "react-qr-code";
export default function QRCodeGenerator() {
    const [qrCodeValue,setQrCodeValue]=useState("")
    const [input,setInput]=useState("")
function inputChangeHandler(value) {
    setInput(()=>value.target.value)
    console.log(input)
}
function generateHandler() {
 setQrCodeValue(()=>setQrCodeValue(input))   
 console.log(qrCodeValue)
}
    return (<div className=" w-screen  my-9 flex  flex-col items-center gap-5">
        <h1>QR code generator</h1>
        <input type="text" name="qr-code" placeholder="Enter Your Value Here" onChange={inputChangeHandler} className=" rounded-md border-2 border-amber-600 outline-none px-2"/>
        <button disabled={!input.trim() } onClick={generateHandler} className=" bg-amber-600 hover:bg-amber-300 flex items-center justify-center disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400 text-black rounded-md px-2 py-1" >Generate</button>
        <ReactQrCode id={"qr-code-value"} value={qrCodeValue} className=" border-4 rounded-md border-amber-600 p-2"/>
    </div>)
}
