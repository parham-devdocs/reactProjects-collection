import { useState } from "react"
const HexColorChars=["a","b","c","d","e","f",1,2,3,4,5,6,7,8,9,0]
export default function RandomColor() {
const [typeOfColor,setTypeOfColor]=useState("hex")
const [color,setColor]=useState("#000000")

function RGBCreateHandler() {
    const r=Math.floor(Math.random() *256)
    const g=Math.floor(Math.random() *256)
    const b=Math.floor(Math.random() *256)

    setColor(`(${r},${g},${b})`)
    setTypeOfColor("rgb")
    console.log(color)
}
function HEXCreateHandler() {
   let hexColor="#"
for (let index = 0; index < 6; index++) {
  const randomCharIndex=  Math.floor(Math.random() *HexColorChars.length)
const randomChar=HexColorChars[randomCharIndex]
  hexColor+=randomChar
setColor(hexColor)
setTypeOfColor("hex")
    
}

}
function randomColorCreateHandler() {
 
const functions= [HEXCreateHandler,RGBCreateHandler]

const randomFunctionIndex=Math.floor(Math.random()*2)
console.log(functions[randomFunctionIndex])
return (functions[randomFunctionIndex]())
}
    return(
    
    <div className={` w-full h-screen  pt-7 space-y-32`} style={{backgroundColor:color}} >
        <div className=" flex gap-8 items-center justify-center">
            <button className=" bg-amber-400 border-2 border-t-0 border-amber-700 px-4 py-2 rounded-md" onClick={randomColorCreateHandler}>generate random color </button>
            <button className=" bg-amber-400 border-2 border-t-0 border-amber-700 px-4 py-2 rounded-md" onClick={HEXCreateHandler}>generate HEX color </button>
            <button className=" bg-amber-400 border-2 border-t-0 border-amber-700 px-4 py-2 rounded-md" onClick={RGBCreateHandler}>generate rgb color </button>


        </div>
<p className=" text-white text-7xl "> {typeOfColor} {color}</p>
       
    </div>)
}