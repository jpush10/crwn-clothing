import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';
import { CheckoutItemContainer, ImageContainer, RemoveButton, BaseSpan, Quantity, Arrow, Value } from './checkout-item.styles.jsx';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler} >
                    &#10094;
                </Arrow>
                <BaseSpan>{quantity}</BaseSpan>
                <Value onClick={addItemHandler} >
                    &#10095;
                </Value>
            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={clearItemHandler}> &#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}


export default CheckoutItem;