import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth, createUserDocumentFromAuth, } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss';
const Authentication = () => {
    
    useEffect(() => {
        const getResult = async (auth) => {
            const response = await getRedirectResult(auth);
            if (response) {
                await createUserDocumentFromAuth(response.user);
            }
            console.log(response);
        } 
        getResult(auth);
    }, []);

    

    // const logGoogleRedirectedUser = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log('user ==', user);
    // }
    return (
        <div className="authentication-container">
            
            {/* <button onClick={logGoogleUser} type="button">Sign in with google popup</button> */}
            {/* <button onClick={signInWithGoogleRedirect} type="button">Sign in with google Redirect</button> */}
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;