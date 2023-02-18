import { useState, FormEvent, ChangeEvent } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormInput from "../form-input/form-input-component";
import { signUpStart } from "../../store/user/user-action";
import Button from "../button/button-component";

import { SignUpContainer } from './signup-styles';


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      navigate('/');
      resetFormFields();
     } catch (err) {
      switch((err as AuthError).code) {
        case AuthErrorCodes.EMAIL_EXISTS:
          alert('Email already in use.');
          break;
        case AuthErrorCodes.INVALID_PASSWORD:
          alert('Invalid password');
          break;
        default:
          console.log('Error creating the user', err);
      }
     }

  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value})
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Display Name' type='text' onChange={handleChange} name='displayName' value={displayName} required />
        <FormInput label='Email' type='email' onChange={handleChange} name='email' value={email} required />
        <FormInput label='Password' type='password' onChange={handleChange} name='password' value={password} required />
        <FormInput label='Confirm Password' type='password' onChange={handleChange} name='confirmPassword' value={confirmPassword} required />
        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;