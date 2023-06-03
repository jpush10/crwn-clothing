import  { useSelector  } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ShoppingIcon, ItemCount, CartIconContainer } from './cart-icon.styles.jsx';
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector.js';
// import { UserContext } from '../../contexts/user.contexts';
// import { CartContext } from '../../contexts/cart.contexts';
import { setIsCartOpen } from '../../store/cart/cart.action.js'; 
import './cart-icon.styles.jsx';
// import { useContext } from 'react';

const CartIcon = () => {
    const dispatch = useDispatch();
    // const {isCartOpen, setIsCartOpen, cartCount}  = useContext(CartContext);
    const isCartOpen = useSelector(selectIsCartOpen);
    // console.log('isCartOpen ==------=', isCartOpen);
    const toggleIsCartOpen = () => {
        console.log('isCartOpen ==', isCartOpen);
        dispatch(setIsCartOpen(!isCartOpen));
        // setIsCartOpen(!isCartOpen);
    }

    const cartCount = useSelector(selectCartCount); 
    
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;