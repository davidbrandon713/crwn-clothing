import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart-selector';
import { setIsCartOpen, clearCartItems } from '../../store/cart/cart-action';
import CartItem from '../cart-item/cart-item-component';
import Button from "../button/button-component";

import { CartDropdownContainer, CartItems, EmptyMessage, ClearButton } from './cart-dropdown-styles';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  // useCallback memo-izes the function itself
  // useMemo memo-izes the return value of the function

  const goToCheckoutHandler = useCallback(() => {
    dispatch(setIsCartOpen(false));
    navigate('/checkout');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clearCartHandler = useCallback(() => {
    dispatch(clearCartItems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length
          ? cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
          : <EmptyMessage>No items in cart</EmptyMessage>
        }
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      <ClearButton onClick={clearCartHandler}>CLEAR CART</ClearButton>
    </CartDropdownContainer>
  )
}

export default CartDropdown;
