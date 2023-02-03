import { useState } from "react";
import FormInput from "../form-input/form-input-component";
import Button from "../button/button-component";
import {
  signInWithGooglePopup, 
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase-utils";

import './signin-styles.scss';


const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
     } catch (err) {
      console.log('User sign in failed', err);
     }

  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value})
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Email' type='email' onChange={handleChange} name='email' value={email} required />
        <FormInput label='Password' type='password' onChange={handleChange} name='password' value={password} required />
        <div className="buttons-container">
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;