import image1 from "./images/MainBefore.jpg";
import image2 from "./images/images.jpeg";
import image4 from "./images/robots.txt";
import image5 from "./images/A-clear-close-up-photo-of-a-woman.webp";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";


const images=[image1,image2,image4,image5]


 export default function ImageSlider() {
const [currentImage,setCurrentImage]=useState(0)

useEffect(() => {
    // Set up an interval to update the current image every 2 seconds
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); // Wrap around using modular arithmetic
    }, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentImage]); // Empty dependency array ensures this runs only once

function forwardHandler() {

    if ( currentImage === images.length-1) {
       
        setCurrentImage(images.length-1)
    }  
    else{  setCurrentImage(prev=>prev+1)}
   }
   function backHandler() {

    if ( currentImage === 0) {
        setCurrentImage(0)
        
    }  
    else{setCurrentImage(prev=>prev-1)}
   }
   
    return(
        <div className=" w-full h-screen flex items-center justify-center bg-yellow-100">
<div className=" w-[600px] h-[400px] rounded-md relative ">
        <img src={images[currentImage]} alt="img" className=" w-full h-full"/> 
        <div className=" absolute flex w-full px-6 justify-between items-center top-44 ">
        <button disabled={currentImage===0} className=" p-3 rounded-full bg-slate-50 hover:scale-110 hover:bg-slate-200 transition-all duration-300 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:scale-100" onClick={backHandler} ><IoIosArrowBack/></button>
        <button
  disabled={currentImage === images.length - 1} // Disable when on the last image
  className="p-3 rounded-full bg-slate-50 hover:scale-110 hover:bg-slate-200 transition-all duration-300 
             disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:scale-100"
  onClick={forwardHandler}
>
  <IoIosArrowForward />
</button>        </div>
        <div className=" absolute bottom-5 flex gap-2 items-center w-full justify-center"> {images.map((_,index)=>{return <div key={index} className={currentImage===index ? " w-3 h-3 rounded-full bg-white":" w-3 h-3 rounded-full bg-slate-700"}></div>})}</div>

</div>
        </div>
    )
}