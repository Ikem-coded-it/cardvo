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
  return (
    <SigninRightSideSection>
      <h1>Welcome</h1>

      <p>
        Sign in to your account
      </p>

      <GoogleBtn />

      <FacebookBtn />

      <OrLine width="100%"><div />  OR <div /></OrLine>

      <StyledForm>
        <FlexColumn align="flex-start">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" minLength={3} />
        </FlexColumn>
          
        <PasswordInput />

        <FlexRow justify="flex-start">
          <input type="checkbox" name="remember-me" id="remember-me" />
          <label htmlFor="remember-me">
            Remember me
          </label>
        </FlexRow>

        <SignupSigninBtn type="submit">Sign in</SignupSigninBtn>
      </StyledForm>

      <p>
        Dont have an account? <StyledLink to="/auth/signup" color={({theme}) => theme.colors.prim.five}>Sign up</StyledLink>
      </p>
    </SigninRightSideSection>
  )
}