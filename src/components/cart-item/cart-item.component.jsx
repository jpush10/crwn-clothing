import {CartItemContainer, ItemDetails} from './cart-item.styles.jsx';

const CartItems = ({cartItem}) => {
    const {name, quantity, imageUrl, price } = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={name} />
            <ItemDetails>
                <span className='name'>{name}</span>
                <span className='price' >
                    {quantity} * ${price}
                </span>
                
            </ItemDetails>
            {/* <span>{quantity}</span> */}
        </CartItemContainer>
    );
}

export default CartItems;