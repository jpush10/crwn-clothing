// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { ShoppingIcon, ItemCount, CartIconContainer } from './cart-icon.styles.jsx';
// import { UserContext } from '../../contexts/user.contexts';
import { CartContext } from '../../contexts/cart.contexts';
import './cart-icon.styles.jsx';
import { useContext } from 'react';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount}  = useContext(CartContext);
    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;