import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';

import { CheckoutItemContainer, ImageContainer, Label, Quantity, Arrow, Value, RemoveButton } from './checkout-item-styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, rmvItemFromCart, deleteItemFromCart } = useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const rmvItemHandler = () => rmvItemFromCart(cartItem);
  const delItemHandler = () => deleteItemFromCart(cartItem);

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