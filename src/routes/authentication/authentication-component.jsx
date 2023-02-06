import SignInForm from "../../components/signin/signin-component";
import SignUpForm from "../../components/signup/signup-component";

import { AuthenticationContainer } from './authentication-styles.jsx';



const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;