import { auth, signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const checkUser = await createUserDocumentFromAuth(user);

        console.log('response ==', user);
    }
    return (
        <div>
            <h1> Sign in page</h1>
            <button onClick={logGoogleUser} type="button">Sign in with google popup</button>
        </div>
    )
}

export default SignIn;