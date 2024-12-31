import React from 'react'
import { PRODUCT_SET } from '../ReduxMiddleware/Constant'
const ProductReducer = (state = [] , action) => {
    switch(action.type){
        case PRODUCT_SET:return action.payload
        default:return state
    }
}
export default ProductReducer