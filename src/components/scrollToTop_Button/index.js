
import { useEffect, useReducer, useRef, useState } from "react"

export default function ScrollToTop_Button() {
const [products,setProducts]=useState([])
const [errorMessage,setErrorMessage]=useState("")
const [isLoading,setIsLoading]=useState(false)


function scrollToBottom() {
  
    document.documentElement.scrollTo(0,document.documentElement.scrollHeight)

}

function scrollTOTop() {
    document.documentElement.scrollTo(0,0)

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

    return(
        <div  className=" w-full min-h-screen  flex flex-col items-center justify-center relative scroll-smooth">
            <button className=" py-1 px-2 rounded-md bg-amber-400" onClick={scrollToBottom}>scroll to bottom</button>
<ul className=" space-y-20 mt-52">{products && products.length>0 &&products.map(product=><li>{product.title}</li>)}</ul>
<div>{errorMessage && errorMessage}</div>
<div className=" mt-0">{isLoading && "Loading"}</div>
<button className=" py-1 px-2 rounded-md bg-amber-400" onClick={scrollTOTop}>scroll to top</button>
        </div>
    )
}