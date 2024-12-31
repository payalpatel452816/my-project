import {ADD_TO_CART,REMOVE_TO_CART,EMPTY_CART,ADD_TO_WISHLIST,REMOVE_TO_WISHLIST,EMPTY_WISHLIST, WISHLIST_TO_CART} from "../ReduxMiddleware/Constant";

// cart actions

export const add_to_cart = (cartdata) => {
  return {
    type: ADD_TO_CART,
    payload: cartdata,
  };
};

export const remove_to_cart = (id) => {
  return {
    type: REMOVE_TO_CART,
    info: "remove_to_cart action called",
    payload: id,
  };
};

export const empty_cart = () => {
  return {
    type: EMPTY_CART,
    info: "empty_cart action called",
  };
};

// wishlist actions

export const add_to_wishlist = (wishdata) => {
  return {
    type: ADD_TO_WISHLIST,
    info: "add_to_wishlist action ",
    payload: wishdata,
  };
};
//new add
export const remove_to_wishlist = (item) => ({
  type: REMOVE_TO_WISHLIST,
  payload: item,
});

// export const wishlist_to_cart = (item) => ({
//   type: WISHLIST_TO_CART,
//   payload: item,
// });

export const empty_wishlist = () => {
  return {
    type: EMPTY_WISHLIST,
    info: "empty_wishlist action called",
  };
};
