import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const addToCart = (itemId) =>{
  return{
    type: ActionTypes.ADD_TO_CART,
    payload: {
      id : itemId
    }
  };
};

export const removeFromCart = (itemId) =>{
  return{
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      id : itemId
    }
  };
};

export const adjustQty = (itemId,value) => {
  return {
    type:ActionTypes.ADJUST_QTY,
    payload:{
      id : itemId,
      qty : value
    }
  }
}