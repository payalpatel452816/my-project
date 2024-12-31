import {ADD_TO_WISHLIST,REMOVE_TO_WISHLIST,EMPTY_WISHLIST,WISHLIST_TO_CART,} from "../ReduxMiddleware/Constant";

const WishReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [...state, action.payload];

    case WISHLIST_TO_CART:
      return {
        ...state,
        cartToWish: [...state, action.payload],
      };

    case REMOVE_TO_WISHLIST:
      const removeWishData = state.filter((state)=> state.id !== action.payload.id)
      console.log(removeWishData);
      return [...removeWishData]

    case EMPTY_WISHLIST:

    default:
      return state;
  }
};

export default WishReducer;
