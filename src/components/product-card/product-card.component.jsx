import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';
import { Name, Price, Footer, ButtonStyle, ProductCardContainer } from './product-card.styles.jsx';
import {BUTTON_TYPE_CLASSES} from '../button/button.component';
const ProductCard = ({product}) => {
    
    const { name,price,imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <ButtonStyle buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart} > Add to Card</ButtonStyle>
        </ProductCardContainer>
    )
}

export default ProductCard;