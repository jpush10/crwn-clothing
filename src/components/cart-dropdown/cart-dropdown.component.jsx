import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import  CartItems  from '../cart-item/cart-item.component';
// import { CartContext } from '../../contexts/cart.contexts';
import { useSelector } from 'react-redux';


import { selectCartItems } from './../../store/cart/cart.selector';


import Button from '../button/button.component';
import './cart-dropdown.styles.jsx';
import { CartDropdownDontainer, EmptyMessage, CartItemDiv } from './cart-dropdown.styles.jsx';

const CartDropDown = () => {
    // const { cartItems } = useContext(CartContext);
    const cartItems = useSelector(selectCartItems);
    // console.log('cartItems =============', cartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate("/checkout");
    }
    return (
        <CartDropdownDontainer>
            <CartItemDiv>
                {   cartItems.length ?
                    (cartItems.map((item) => (
                        <CartItems key={item.id} cartItem={item} />
                    ))) :
                    (
                        <EmptyMessage> Your cart is empty </EmptyMessage>
                    )
                }
            </CartItemDiv>
            <Button buttonType="inverted" onClick={goToCheckoutHandler}>Go To CheckOut</Button>
        </CartDropdownDontainer>
    )
}

export default CartDropDown;