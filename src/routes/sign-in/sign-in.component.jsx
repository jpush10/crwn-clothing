import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    
    useEffect(() => {
        const getResult = async (auth) => {
            const response = await getRedirectResult(auth);
            if (response) {
                const checkDocRef = await createUserDocumentFromAuth(response.user);
            }
            console.log(response);
        } 
        getResult(auth);
    }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const checkDocRef = await createUserDocumentFromAuth(user);

        // console.log('response ==', user);
    }

    // const logGoogleRedirectedUser = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log('user ==', user);
    // }
    return (
        <div>
            <h1> Sign in page</h1>
            <button onClick={logGoogleUser} type="button">Sign in with google popup</button>
            {/* <button onClick={signInWithGoogleRedirect} type="button">Sign in with google Redirect</button> */}

            <SignUpForm />
        </div>
    )
}

export default SignIn;