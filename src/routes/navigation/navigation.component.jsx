import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Crown} from '../../assets/annand.svg'
import { UserContext } from "../../contexts/user.contexts";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import './navigation.styles.scss'
const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    // const { setCurrentUser } = useContext(UserContext);
    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }
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
                            <span className="nav-link" onClick={signOutHandler} > SIGN OUT </span>
                        ) : (
                        <Link className="nav-link" to='/auth' >
                            SignIn
                        </Link>
                        )
                    }
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;