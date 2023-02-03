import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';

import './checkout-item-styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, rmvItemFromCart, deleteItemFromCart } = useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const rmvItemHandler = () => rmvItemFromCart(cartItem);
  const delItemHandler = () => deleteItemFromCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={rmvItemHandler}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>&#10095;</div>
        </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={delItemHandler}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;