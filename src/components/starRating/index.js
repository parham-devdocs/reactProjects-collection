import { useState } from "react";
import { FaStar } from "react-icons/fa";

export function StarRating({noOfStars=5}) {
    const [stars,setStarts]=useState(0)
   
    return(
<div className=" h-36 w-screen bg-slate-600 flex gap-1 items-center justify-center">
    {[...Array(stars)].map((_,index)=>{return <FaStar key={index} className=" text-yellow-500"  onClick={() => setStarts(index+1)}    />})}
{[...Array(noOfStars-stars)].map((_,index)=>{return <FaStar key={index+stars} className=" text-slate-200" onClick={()=>setStarts(stars+index+1)}/>})}
</div>
    )
}