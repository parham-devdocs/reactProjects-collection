import { useState } from "react"


export default function ScrollToParticularSection() {
    const sectionColors=["red","blue","green","yellow","black","brown"]
const [section,setSection]=useState("red")
function scrollToSectionHandler() {
   const targetElement= document.getElementById(section)
  const pos= targetElement.getBoundingClientRect().top +window.screenTop
  window.scrollTo({top:pos,behavior:"smooth"})

}
    return <div className=" w-full min-h-screen gap-12 px-4 overflow-x-hidden flex flex-col bg-amber-50 ">
        <button onClick={scrollToSectionHandler}>scroll to the section {section}</button>
{sectionColors.map(section=>{return  <div id={section} className=" h-screen w-full " style={{backgroundColor: section}}/>})}
    </div>
}