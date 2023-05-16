import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import  CartItems  from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.contexts';
import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate("/checkout");
    }
    return (
        <div className='cart-dropdown-container' >
            <div className='cart-items' >
                {
                    cartItems.map((item) => (
                        <CartItems key={item.id} cartItem={item} />
                    ))
                }
            </div>
            <Button buttonType="inverted" onClick={goToCheckoutHandler}>Go To CheckOut</Button>
        </div>
    )
}

export default CartDropDown;