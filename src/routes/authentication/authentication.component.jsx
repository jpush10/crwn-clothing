import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth, createUserDocumentFromAuth, } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { AuthenticationContainer } from  './authentication.styles.jsx';
const Authentication = () => {
    
    useEffect(() => {
        const getResult = async (auth) => {
            const response = await getRedirectResult(auth);
            if (response) {
                await createUserDocumentFromAuth(response.user);
            }
        } 
        getResult(auth);
    }, []);

    return (
        <AuthenticationContainer>
            
            {/* <button onClick={logGoogleUser} type="button">Sign in with google popup</button> */}
            {/* <button onClick={signInWithGoogleRedirect} type="button">Sign in with google Redirect</button> */}
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    )
}

export default Authentication;