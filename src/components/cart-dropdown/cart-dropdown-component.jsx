import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart-context';
import CartItem from '../cart-item/cart-item-component';
import Button from "../button/button-component";

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown-styles';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    setIsCartOpen(false);
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