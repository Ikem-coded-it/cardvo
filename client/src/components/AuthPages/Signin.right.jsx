import { 
  RightSideSection,
  GoogleBtn,
  FacebookBtn,
  OrLine,
  StyledForm,
  SignupSigninBtn,
  PasswordInput
} from "./shared";
import { FlexColumn, FlexRow } from "../styles/Container.styled";
import StyledLink from "../styles/Link.styled";
import { useState, useContext } from "react";
import axios from 'axios';
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import MessageDisplay from "../MessageDisplay";
import LoaderSpinner from "../Loader";
import styled from "styled-components";

const SigninRightSideSection = styled(RightSideSection)`
  gap: 30px;
  width: 50%;

  @media(max-width: ${({theme}) => theme.tablet}) {
    width: 70%;
  }

  @media(max-width: ${({theme}) => theme.mobile}) {
    width: 100%;
    padding: 0;
  }
`

export default function SigninRightSide() {
  const [loggingIn, setLoggingIn] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(null);
  const context = useContext(AppContext);
  const navigate = useNavigate();

  // sign up with email and password
  const handleLocalSignin  = async(e) => {
    e.preventDefault()
    setLoggingIn(true);
    const serverURL = `${context.serverURL}/auth/login`;

    const userLoginDetails = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    try {
      const response = await axios.post(serverURL, userLoginDetails);
      if (response.data.success === true) {
        setLoggingIn(false);
        navigate("/explore")
      }
    } catch(error) {
      setLoggingIn(false);
      setDisplayMessage(error.response.data.message);
    }
  }

  // signin with google
  const handleGoogleAuth = () => {
    window.open(`${context.serverURL}/auth/google/callback`, "_self");
  }

  // signin with facebook
  const handleFacebookAuth = () => {
    window.open(`${context.serverURL}/auth/login/facebook`, "_self");
  }

  return (
    <SigninRightSideSection>
      {
        displayMessage !== null ? (
          <MessageDisplay message={displayMessage} closeMessage={() => setDisplayMessage(null)} />
        ) : (
          null
        )
      }
      <h1>Welcome</h1>

      <p>
        Sign in to your account
      </p>

      <GoogleBtn onClick={handleGoogleAuth} />

      <FacebookBtn onClick={handleFacebookAuth} />

      <OrLine $width="100%"><div />  OR <div /></OrLine>

      <StyledForm onSubmit={(e) => handleLocalSignin(e)}>
        <FlexColumn $align="flex-start">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" minLength={3} required/>
        </FlexColumn>
          
        <PasswordInput />

        <FlexRow $justify="flex-start">
          <input type="checkbox" name="remember-me" id="remember-me" />
          <label htmlFor="remember-me">
            Remember me
          </label>
        </FlexRow>

        <SignupSigninBtn
        type="submit">
          { loggingIn ? (
            <LoaderSpinner type="spin" height={40} width={40} />
          ) : (
            "Sign in"
          ) }
        </SignupSigninBtn>
      </StyledForm>

      <p>
        Dont have an account? <StyledLink to="/auth/signup" $color={({theme}) => theme.colors.prim.five}>Sign up</StyledLink>
      </p>
    </SigninRightSideSection>
  )
}