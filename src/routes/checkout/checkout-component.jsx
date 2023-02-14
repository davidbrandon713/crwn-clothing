import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart-selector';
import { clearCartItems } from '../../store/cart/cart-action';
import CheckoutItem from '../../components/checkout-item/checkout-item-component';
import PaymentForm from '../../components/payment-form/payment-form-component';

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total, ClearButton } from './checkout-styles';

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const clearCartHandler = () => {
    dispatch(clearCartItems());
  }

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <ClearButton onClick={clearCartHandler}>Remove</ClearButton>
        </HeaderBlock>

      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem 
          key={cartItem.id} 
          cartItem={cartItem} 
        />
      ))}
      <Total>Total: ${cartTotal}</Total>
      <PaymentForm />
    </CheckoutContainer>
  )
}

export default Checkout;