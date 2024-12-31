import React from 'react'
import productImage from '../../images/product1.jpg'
import { CiShoppingCart, CiHeart} from "react-icons/ci";



const ProductSlide = () => {
  return (
    <div>
        <div className="w-full max-w-xs mx-auto">
      {/* Container for the image and buttons */}
      <div className="relative group">
        {/* Product Image */}
        <img 
          src={productImage} 
          alt="Product" 
          className="w-full h-auto object-cover rounded-md transition-all duration-300 group-hover:opacity-60" 
        />
        
        {/* Add to Cart and Wishlist buttons on hover */}
        <div className="absolute bottom-6  flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          {/* Add to Cart Button */}
          <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded-md mr-2 hover:bg-red-700">
             <CiShoppingCart/>
          </button>
          
          {/* Add to Wishlist Button */}
          <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-yellow-600">
            <CiHeart/>
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductSlide