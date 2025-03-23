import { useEffect, useState } from "react"

export function ScrollIndicator() {
const [products,setProducts]=useState([])
const [errorMessage,setErrorMessage]=useState("")
const [isLoading,setIsLoading]=useState(false)
const [scrollPercentage,setScrollPercentage]=useState(0)
function handleScrollPercentage() {

    const fullPageHeight = document.documentElement.scrollHeight;
    const h=document.documentElement.scrollTop
    const clientHeight=document.documentElement.clientHeight
   const height=fullPageHeight-clientHeight
  setScrollPercentage(()=>h/height*100)
  console.log(scrollPercentage)
  console.log(h/height*100)
}

useEffect(() => {
    fetch('https://dummyjson.com/products')
        .then(res => {
            setIsLoading(true)
            if (res.ok) {
                return res.json(); // Return the parsed JSON
            } else {
                setIsLoading(false)
            
                
                console.log("Something went wrong");
                throw new Error("Failed to etch products"); // Stop the chain if there's an error
            }
        })
        .then(data =>{ setProducts(data.products) ; setIsLoading(false)}) // Assuming the API returns an object with a `products` key
        .catch(error =>{setErrorMessage(error.message);console.log(errorMessage)}); // Handle errors gracefully
}, []);
useEffect(()=>{
    window.addEventListener("scroll",handleScrollPercentage)
    return window.removeEventListener("scroll",()=>{})
},[])
    return(
        <div className=" w-full min-h-screen  flex flex-col items-center justify-center relative">
            <nav className=" w-full h-28 bg-amber-100  flex fixed top-0 left-0 z-50  ">
                <div className={`h-3 bg-amber-400  self-end`} style={{width:`${scrollPercentage}%`}} />
            </nav>
<ul className=" space-y-20 mt-52">{products && products.length>0 &&products.map(product=><li>{product.title}</li>)}</ul>
<div>{errorMessage && errorMessage}</div>
<div className=" mt-0">{isLoading && "Loading"}</div>
        </div>
    )
}