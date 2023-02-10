import { CART_ACTION_TYPES } from "./cart-types";
import { createAction } from "../../utils/reducer/reducer-utils";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id
    ? {...cartItem, quantity: cartItem.quantity + 1}
    : cartItem);
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const rmvCartItem = (cartItems, productToRmv) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRmv.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRmv.id);
  }

  return cartItems.map((cartItem) => cartItem.id === productToRmv.id
    ? {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem);
};

const deleteCartItem = (cartItems, productToDelete) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const rmvItemFromCart = (cartItems, productToRmv) => {
  const newCartItems = rmvCartItem(cartItems, productToRmv);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const deleteItemFromCart = (cartItems, productToDelete) => {
  const newCartItems = deleteCartItem(cartItems, productToDelete);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearCartItems = () => {
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, []);
}

export const setIsCartOpen = (boolean) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
};