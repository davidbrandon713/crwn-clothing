import { createContext, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer-utils";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id
    ? {...cartItem, quantity: cartItem.quantity + 1}
    : cartItem);
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const rmvCartItem = (cartItems, productToRmv) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRmv.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRmv.id);
  }

  return cartItems.map((cartItem) => cartItem.id === productToRmv.id
    ? {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem);
}

const deleteCartItem = (cartItems, productToDelete) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
}

export const CartContext = createContext({
  cartItems: [],
  isCartOpen: false,
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  rmvItemFromCart: () => {},
  deleteItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0
}

const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
  SET_CART_ITEMS: 'SET_CART_ITEMS'
}

const cartReducer = (state, action) => {
  const { type, payload } = action;
  console.log('dispatched');
  console.log(action);

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, ...payload };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return { ...state, isCartOpen: payload };
    default:
      throw new Error(`Unhandled type ${type} in cart reducer`);
  }
}

export const CartProvider = ({ children }) => {
  const [{cartItems, isCartOpen, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
  }

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    const newCartTotal = newCartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems, 
        cartCount: newCartCount, 
        cartTotal: newCartTotal
      })
    );
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  }

  const rmvItemFromCart = (productToRmv) => {
    const newCartItems = rmvCartItem(cartItems, productToRmv);
    updateCartItemsReducer(newCartItems);
  }

  const deleteItemFromCart = (productToDelete) => {
    const newCartItems = deleteCartItem(cartItems, productToDelete);
    updateCartItemsReducer(newCartItems);
  }

  const value = { cartItems, isCartOpen, setIsCartOpen, addItemToCart, rmvItemFromCart, deleteItemFromCart, cartCount, cartTotal };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};