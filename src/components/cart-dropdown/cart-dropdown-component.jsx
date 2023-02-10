import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart-selector';
import { setIsCartOpen } from '../../store/cart/cart-action';
import CartItem from '../cart-item/cart-item-component';
import Button from "../button/button-component";

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown-styles';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    dispatch(setIsCartOpen(false));
    navigate('/checkout');
  }

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
    </CartDropdownContainer>
  )
}

export default CartDropdown;