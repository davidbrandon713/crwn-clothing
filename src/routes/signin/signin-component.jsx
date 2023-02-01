import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/signup/signup-component";

import {
  auth,
  signInWithGooglePopup, 
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase-utils";

const SignIn = () => {

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  }

  return (
    <div>
      <h1>Signin Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;