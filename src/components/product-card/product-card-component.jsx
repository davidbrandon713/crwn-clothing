import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';
import { BUTTON_TYPE_CLASSES } from '../button/button-component';
import Button from "../button/button-component";

import { ProductCardContainer, Img, Footer, Name, Price } from './product-card-styles';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;