import { CategoryItem } from "../categories/category-types";
import { CART_ACTION_TYPES, CartItem } from "./cart-types";
import { createAction, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer-utils";

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
  const existingCartItem = cartItems && cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id
    ? {...cartItem, quantity: cartItem.quantity + 1}
    : cartItem);
  }

  return cartItems && [ ...cartItems, { ...productToAdd, quantity: 1 }];
};

const rmvCartItem = (cartItems: CartItem[], productToRmv: CategoryItem): CartItem[] => {
  const existingCartItem = cartItems && cartItems.find((cartItem) => cartItem.id === productToRmv.id);

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRmv.id);
  }

  return cartItems && cartItems.map((cartItem) => cartItem.id === productToRmv.id
    ? {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem);
};

const deleteCartItem = (cartItems: CartItem[], productToDelete: CartItem): CartItem[] => {
  return cartItems && cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
};

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems => {
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
})

export const addItemToCart = withMatcher((cartItems: CartItem[], productToAdd: CategoryItem): SetCartItems => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
});

export const rmvItemFromCart = withMatcher((cartItems: CartItem[], productToRmv: CartItem): SetCartItems => {
  const newCartItems = rmvCartItem(cartItems, productToRmv);
  return setCartItems(newCartItems);
});

export const deleteItemFromCart = withMatcher((cartItems: CartItem[], productToDelete: CartItem): SetCartItems => {
  const newCartItems = deleteCartItem(cartItems, productToDelete);
  return setCartItems(newCartItems);
});

export const clearCartItems = withMatcher((): SetCartItems => {
  return setCartItems([]);
});

export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
});