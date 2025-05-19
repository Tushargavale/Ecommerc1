import React, { useState } from 'react'
// import { uploadProduct } from '../../Api/Api'
const AddProduct = () => {

const [product,setProduct]=useState({
    title:'',
    description:'',
    category:'',
    price:null,
    discountPercentage:null,
    tage:[],
    brand:'',
    sku:'',
    weight:null,
    dimensions:{
        "width":'',
        height:'',
        depth:''
    },
    warrantyInformation:'',
    shippingInformation:'',
    availabilityStatus:'',
    reviews:[],
    returnPolicy:'',
    minimumOrderQuantity:null,
    image:[],
    thumbnail:""
})


const handleChange=(e)=>{
    const {name,value,files}=e.target 
    let temp={...product,dimensions:{...product.dimensions}}
    if(name.startsWith("dimensions.")){
        const key=name.split('.')[1]
        temp={...temp,'dimensions':{...temp.dimensions,[key]:value}}
    }else
    if(name=='image')
    {
        console.log(value,files)
        temp.image = Array.from(files[0])
    }else{
        temp={...temp,[name]:value}
    }

    setProduct(temp)
}



const handleSubmit=(e)=>{
    e.preventDefault()
  // uploadProduct(product)
}






return (
   <>
     
   <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto p-6 mt-10 mb-10 bg-white rounded-2xl shadow-md space-y-6"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Add Product</h2>

      {/* Grid layout for responsive form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input className="input p-2 border" name="title" placeholder="Title" value={product.title} onChange={handleChange} />
        <input className="input p-2 border rounded-md border-black" name="category" placeholder="Category" value={product.category} onChange={handleChange} />
        <input className="input p-2" name="price" type="number" placeholder="Price" value={product.price} onChange={handleChange} />
        <input className="input p-2" name="discountPercentage" type="number" placeholder="Discount %" value={product.discountPercentage} onChange={handleChange} />
        <input className="input p-2" name="brand" placeholder="Brand" value={product.brand} onChange={handleChange} />
        <input className="input p-2" name="sku" placeholder="SKU" value={product.sku} onChange={handleChange} />
        <input className="input p-2" name="weight" type="number" placeholder="Weight" value={product.weight} onChange={handleChange} />
        <input className="input p-2" name="minimumOrderQuantity" type="number" placeholder="Min Order Quantity" value={product.minimumOrderQuantity} onChange={handleChange} />
        <input className="input p-2" name="thumbnail" placeholder="Thumbnail URL" value={product.thumbnail} onChange={handleChange} />
        <input className="input p-2" name="availabilityStatus" placeholder="Availability Status" value={product.availabilityStatus} onChange={handleChange} />
      </div>

      {/* Textarea full width */}
      <textarea className="input h-24 w-full" name="description" placeholder="Description" value={product.description} onChange={handleChange} />
      <input className="input p-2 w-1/3 " name="warrantyInformation" placeholder="Warranty Information" value={product.warrantyInformation} onChange={handleChange} />
      <input className="input p-2 w-1/3" name="shippingInformation" placeholder="Shipping Information" value={product.shippingInformation} onChange={handleChange} />
      <input className="input p-2 w-1/3" name="returnPolicy" placeholder="Return Policy" value={product.returnPolicy} onChange={handleChange} />

      {/* Dimensions as responsive flex row */}
      <div className="flex flex-col sm:flex-row gap-4">
        <input className="input p-2 flex-1" name="dimensions.width" placeholder="Width" value={product.dimensions.width} onChange={handleChange} />
        <input className="input p-2 flex-1" name="dimensions.height" placeholder="Height" value={product.dimensions.height} onChange={handleChange} />
        <input className="input p-2 flex-1" name="dimensions.depth" placeholder="Depth" value={product.dimensions.depth} onChange={handleChange} />
      </div>
     <div className="flex flex-col sm:flex-row gap-6">
  {/* Upload Image */}
  <div className="flex flex-col gap-2 w-full sm:w-1/2">
    <label className="font-medium text-gray-700">Upload Image</label>
    <input
      type="file"
      name="image"
      accept="image/*"
      className="p-2 border border-gray-300 rounded-lg"
      onChange={handleChange}
    />
  </div>

  {/* Add Thumbnail */}
  <div className="flex flex-col gap-2 w-full sm:w-1/2">
    <label className="font-medium text-gray-700">Add Thumbnail</label>
    <input
      type="file"
      name="thumbnail"
      accept="image/*"
      className="p-2 border border-gray-300 rounded-lg"
      onChange={handleChange}
    />
  </div>
</div>

      {/* Submit Button */}
      <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition">
        Submit Product
      </button>
    </form>
   
   </>
  )
}

export default AddProduct