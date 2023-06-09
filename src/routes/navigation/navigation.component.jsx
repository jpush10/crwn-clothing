import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Crown} from '../../assets/annand.svg'
import { UserContext } from "../../contexts/user.contexts";
import { CartContext } from "../../contexts/cart.contexts";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import './navigation.styles.jsx'
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles.jsx";
const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    // const { setCurrentUser } = useContext(UserContext);
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <Crown className="logo" /> 
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop' >
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLinks as='span' onClick={signOutUser} > SIGN OUT </NavLinks>
                        ) : (
                        <NavLink to='/auth' >
                            SignIn
                        </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
                {
                    isCartOpen && <CartDropDown />
                }
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;