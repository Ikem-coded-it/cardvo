import { 
  RightSideSection,
  GoogleBtn,
  FacebookBtn,
  OrLine,
  StyledForm,
  SignupSigninBtn,
  PasswordInput,
} from "./shared";
import { FlexColumn, FlexRow } from "../styles/Container.styled";
import StyledLink from "../styles/Link.styled";
import { AppContext } from "../../App";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import LoaderSpinner from "../Loader";
import MessageDisplay from "../MessageDisplay";

export default function SignupRightSide() {
  const context = useContext(AppContext);
  const navigate = useNavigate();
  const [registering, setRegistering] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(null);

  // sign up with email and password
  const handleLocalSignup = async(e) => {
    e.preventDefault()
    setRegistering(true);
    const serverURL = `${context.serverURL}/auth/register`;

    const newUser = {
      fullName: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    }

    try {
      const response = await axios.post(serverURL, newUser);
      if (response.data.success === true) {
        setRegistering(false);
        navigate("/auth/signin")
      }
    } catch(error) {
      setRegistering(false);
      setDisplayMessage(error.response.data.message);
    }
  }

  // sign up with google
  const handleGoogleAuth = () => {
    window.open(`${context.serverURL}/auth/google/callback`, "_self");
  }

  // sign up with facebook
  const handleFacebookAuth = () => {
    window.open(`${context.serverURL}/auth/login/facebook`, "_self");
  }

  function closeMessage() {
    setDisplayMessage(null)
  }

  return (
    <RightSideSection $flex="1">
      {
        displayMessage !== null ? (
          <MessageDisplay message={displayMessage} closeMessage={closeMessage} />
        ) : (
          null
        )
      }
      <h1>Create your account</h1>

      <p>
        Enjoy full access to <span>200+</span> Credit Card designs
        <br/>
        <span>Free</span> for all to use.
      </p>

      <GoogleBtn onClick={handleGoogleAuth} />

      <FacebookBtn onClick={handleFacebookAuth} />

      <OrLine $width="100%"><div />  OR <div /></OrLine>

      <StyledForm onSubmit={(e) => handleLocalSignup(e)}>
        <FlexColumn $align="flex-start">
          <label htmlFor="name">Full name</label>
          <input type="text" name="name" id="name" minLength={3} required/>
        </FlexColumn>
        <FlexColumn $align="flex-start">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" minLength={3} required/>
        </FlexColumn>
          
        <PasswordInput />

        <FlexRow $justify="flex-start">
          <input type="checkbox" name="receive-emails" id="receive-emails" />
          <label htmlFor="receive-emails">Send me emails relating to financial advice</label>
        </FlexRow>
        <FlexRow $justify="flex-start">
          <input type="checkbox" name="terms" id="terms" required/>
          <label htmlFor="terms">
            I have read and agreed to <span>Cardvo Terms of Use and Privacy Policy</span>
          </label>
        </FlexRow>

        <SignupSigninBtn type="submit">
          { registering ? (
            <LoaderSpinner type="spin" height={40} width={40} />
          ) : (
            "Create account"
          ) }
        </SignupSigninBtn>
      </StyledForm>

      <p>
        Already have an account? <StyledLink to="/auth/signin" color={({theme}) => theme.colors.prim.five}>Sign in</StyledLink>
      </p>
    </RightSideSection>
  )
}