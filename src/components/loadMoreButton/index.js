import { useEffect, useState } from "react"


export default function LoadMoreButton() {
    const [products,setProducts]=useState([])
    const [skip,setSkip]=useState(0)
    useEffect(() => {
        console.log("something")
        fetch(`https://dummyjson.com/products?limit=4&skip=${skip}&select=title,price`)
          .then((res) => {
            if (!res.ok) {
              throw new Error(`HTTP error: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            // Append the fetched data to the existing products
            setProducts((prev) => [...prev, ...data.products]);
            // Increment the skip value for the next fetch
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, [skip]); // Re-run the effect whenever `skip` changes
    
    return(
        <div className=" flex items-center flex-col p-24 ">
            <div className=" flex flex-wrap gap-5 justify-between">
            {products.map(product=>{return <div key={product.title} className=" w-80 h-9">{product.title}</div>})}

            </div>
<button className=" mx-auto py-2 px-4 bg-red-300 text-black rounded-md" onClick={()=>setSkip((prev)=>prev+4)}>Load More</button>
             </div>
    )
}