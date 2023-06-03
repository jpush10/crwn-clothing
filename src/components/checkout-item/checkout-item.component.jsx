// import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { CartContext } from '../../contexts/cart.contexts';
import { selectCartItems } from '../../store/cart/cart.selector';
import { removeItemFromCart, addItemToCart, clearItemFromCart } from '../../store/cart/cart.action';
import { CheckoutItemContainer, ImageContainer, RemoveButton, BaseSpan, Quantity, Arrow, Value } from './checkout-item.styles.jsx';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const dispatch = useDispatch();
    // const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
    const cartItems = useSelector(selectCartItems);
    const clearItemHandler = () => dispatch(clearItemFromCart(dispatch, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
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