import CartReducr from "../ReduxMiddleware/CartReducr";
import WishReducer from "../ReduxMiddleware/WishReducer";
import ProReducer from "../ReduxMiddleware/ProReducer";
import { cartToWishReducer } from "../ReduxMiddleware/CartReducr";
import { combineReducers } from "redux";
const RootReducer = combineReducers({
  cart: CartReducr,
//   cartToWish: cartToWishReducer,
  wish: WishReducer,
  product: ProReducer,
});
export default RootReducer;
