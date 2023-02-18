import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from '../../store/cart/cart-types';
import { selectCartItems } from '../../store/cart/cart-selector';
import { addItemToCart, rmvItemFromCart, deleteItemFromCart } from '../../store/cart/cart-action';

import { CheckoutItemContainer, ImageContainer, Label, Quantity, Arrow, Value, RemoveButton } from './checkout-item-styles';

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const rmvItemHandler = () => dispatch(rmvItemFromCart(cartItems, cartItem));
  const delItemHandler = () => dispatch(deleteItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Label>{name}</Label>
      <Quantity>
        <Arrow onClick={rmvItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Label>{price}</Label>
      <RemoveButton onClick={delItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;