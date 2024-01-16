import { 
  RightSideSection,
  // GoogleBtn,
  // FacebookBtn,
  OrLine,
  StyledForm,
  SignupSigninBtn,
  PasswordInput
} from "./shared"; 
import { FlexColumn, FlexRow } from "../styles/Container.styled";
import StyledLink from "../styles/Link.styled";
import { BtnPrimary } from "../styles/Button.styled";
import { useState, useContext } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
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
  const [demoLogin, setDemoLogin] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(null);
  const context = useContext(AppContext);
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  // sign up with email and password
  const handleLocalSignin  = async(e, email, password) => {
    e.preventDefault()

    // activate loader in demo login button or normal login button
    if (email && password)
      setDemoLogin(true)
    else
      setLoggingIn(true)

    const userLoginDetails = {
      email: !email ? e.target.email.value : email,
      password: !password ? e.target.password.value: password,
      rememberMe: e.target.remember_me?.checked
    }

    try {
      const response = await axiosPrivate.post("/auth/login", userLoginDetails);
      if (response.data.success === true) {
        const user = response.data.user;
        context.setUser(user);
        
        if(userLoginDetails.rememberMe === true) {
          localStorage.setItem('cardvo-user', JSON.stringify(user))
        }

        !email && setLoggingIn(false);
        email && setDemoLogin(false);
        navigate(context.nextPage);

      } else {
        setDisplayMessage(response.data.message);
      }
    } catch(error) {
      if (error.response.status === 400) {
        setDisplayMessage("Invalid username or password");
        return setLoggingIn(false);
      }
      if(error.response.data === "Unauthorized") {
        setDisplayMessage("Invalid username or password");
        !email && setLoggingIn(false);
        email && setDemoLogin(false);
      }
    }
  }

  // function authNavigate(url) {
  //   window.location.href = url;
  // }

  // signin with google
  // const handleGoogleAuth = async() => {
  //   const response = await axiosPrivate.post(`${context.serverURL}/auth/google/signin`);
  //   const data = response.data;
  //   authNavigate(data.url)
  // }

  // signin with facebook
  // const handleFacebookAuth = () => {
  //   window.open(`${context.serverURL}/auth/login/facebook`, "_self");
  // }

  return (
    <SigninRightSideSection $flex="1">
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

      {/* <GoogleBtn onClick={handleGoogleAuth}/> */}

      {/* <FacebookBtn onClick={handleFacebookAuth} /> */}

      <BtnPrimary
      $width="100%"
      $height="50px"
      onClick={(e)=>handleLocalSignin(e, "ikem2003@gmail.com", "idontknow")}>
        { demoLogin ? (
          <LoaderSpinner type="spin" height={40} width={40} color="#375694"/>
        ) : (
          "Login with Demo Account"
        ) }
      </BtnPrimary>

      <OrLine $width="100%"><div />  OR <div /></OrLine>

      <StyledForm onSubmit={(e) => handleLocalSignin(e)}>
        <FlexColumn $align="flex-start">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" minLength={3} required/>
        </FlexColumn>
          
        <PasswordInput />

        <FlexRow $justify="flex-start">
          <input type="checkbox" name="remember_me" id="remember_me" />
          <label htmlFor="remember_me">
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