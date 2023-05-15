import { useContext } from 'react';
import  CartItems  from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.contexts';
import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className='cart-dropdown-container' >
            <div className='cart-items' >
                {
                    cartItems.map((item) => (
                        <CartItems key={item.id} cartItem={item} />
                    ))
                }
            </div>
            <Button buttonType="inverted" >Go To CheckOut</Button>
        </div>
    )
}

export default CartDropDown;