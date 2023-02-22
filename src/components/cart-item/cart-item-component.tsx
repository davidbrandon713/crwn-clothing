import { FC, memo } from 'react';
import { CartItem as TCartItem } from '../../store/cart/cart-types';

import { CartItemContainer, ItemDetails, Name } from './cart-item-styles';

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />

      <ItemDetails>
        <Name>{name}</Name>
        <span className='price'>{quantity} x ${price}</span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
