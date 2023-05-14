import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Crown} from '../../assets/annand.svg'
import { UserContext } from "../../contexts/user.contexts";
import { CartContext } from "../../contexts/cart.contexts";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import './navigation.styles.scss'
const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    // const { setCurrentUser } = useContext(UserContext);
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    
    console.log('currentUser ==', currentUser);
    return (
        <Fragment>
            <div className="navigation" >
                <Link className="logo-container" to='/'>
                    <Crown className="logo" /> 
                </Link>
                <div className="nav-links-container" >
                    <Link className="nav-link" to='/shop' >
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser} > SIGN OUT </span>
                        ) : (
                        <Link className="nav-link" to='/auth' >
                            SignIn
                        </Link>
                        )
                    }
                    <CartIcon />
                </div>
                {
                    isCartOpen && <CartDropDown />
                    
                }
                
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;