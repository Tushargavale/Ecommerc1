import React from 'react'

const Card = ({product}) => {
 return (
    <>
    <div className="w-64 bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.mainImage.url}
        alt={product.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-3">
        <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {product.name}
        </h2>
        <p className="text-xs text-gray-600 line-clamp-2 mt-1">
          {product.description}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">${product.price}</span>
          <span className={`text-xs ${product.stock > 0 ? "text-green-500" : "text-red-500"}`}>
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        {product.subImages.length > 0 && (
          <div className="flex gap-1 mt-2 overflow-x-auto">
            {product.subImages.map((img) => (
              <img
                key={img._id}
                src={img.url}
                alt="sub"
                className="w-10 h-10 object-cover rounded border"
              />
            ))}
          </div>
        )}
      </div>
    </div>
    
    </> 
  );
}

export default Card