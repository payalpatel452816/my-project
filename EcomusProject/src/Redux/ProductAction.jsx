import { PRODUCT_SET } from "../ReduxMiddleware/Constant";

export const product_set = (product) => {
    return{
        type:PRODUCT_SET,
        payload:product
    }
}