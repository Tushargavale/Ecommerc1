import React from 'react'
import { useState,useEffect } from 'react'
import { getAllProducts } from '../../Api/Api'
import Card from './Card'
const AllProduct = () => {
  const [products,setProducts]=useState([])
async function getAllProductsfromAPI() {
    try {
        let resp=await getAllProducts()
        setProducts(resp.data.products)
       // console.log(resp.data.products)
    } catch (error) {
        console.log(error)
    }
    
}
    useEffect(()=>{
        getAllProductsfromAPI()
    },[])


  return (
   <>
   {products.length?<>
    
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mb-5 ' >
            {products.map((item,key)=>{
                return <Card product={item} key={key} ></Card>
            })}
    </div>
     
   </>:null}
   </>
  )
}

export default AllProduct