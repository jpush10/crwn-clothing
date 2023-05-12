import { useState,useContext } from "react";
import { signInWithGooglePopup,signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
// import { auth, , signInWithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.contexts";

const defaultFormFields = {
    email: "",
    password: ""
}   

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const { setCurrentUser } = useContext(UserContext);
    
    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
            resetFormFields();
        } catch (error) {
            console.log('error', error);
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('In correct password');
                    break;
                case 'auth/user-not-found':
                    alert('No Email associated with this');
                    break;
                default:
                    console.log('error', error);
            }
            
        }

    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput  label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput  label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                <div className="buttons-container" >
                    <Button buttonType='default' type="submit" >Sign In</Button>
                    <Button buttonType='google' onClick={signInWithGoogle} >Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;