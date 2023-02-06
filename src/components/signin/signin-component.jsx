import { useState } from "react";
import FormInput from "../form-input/form-input-component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button-component";
import {
  signInWithGooglePopup, 
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase-utils";

import { SignInContainer, H2, ButtonsContainer } from './signin-styles';


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
    <SignInContainer>
      <H2>Already have an account?</H2>
      <span>Sign in</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Email' type='email' onChange={handleChange} name='email' value={email} required />
        <FormInput label='Password' type='password' onChange={handleChange} name='password' value={password} required />
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;