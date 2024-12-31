import React from 'react'
import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART ,  } from '../ReduxMiddleware/Constant'
const CartReducr = (state = [] , action) => {
  switch(action.type){
    
    case ADD_TO_CART:return[...state , action.payload]
    
     case REMOVE_TO_CART:
      const removeCartData = state.filter((state) => state.id !== action.payload.id)
  
      console.log(removeCartData);
      return [...removeCartData]

    case EMPTY_CART:
      
    default:return state
  }
}


export const cartToWishReducer = (state = [] , action) => {
  switch(action.type){
    case CART_TO_WISHLIST:
      console.log('cartToWishlistReducerCalled');
      return[...state , action.payload]
    default:return state
  }
}


export default CartReducr