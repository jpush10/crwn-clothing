import './cart-item.styles.scss';

const CartItems = ({cartItem}) => {
    const {name, quantity, imageUrl, price } = cartItem;
    return (
        <div className='cart-item-container' >
            <img src={imageUrl} alt={name} />
            <div className='item-details' >
                <span className='name'>{name}</span>
                <span className='price' >
                    {quantity} * ${price}
                </span>

            </div>
            <span>{quantity}</span>
        </div>
    );
}

export default CartItems;