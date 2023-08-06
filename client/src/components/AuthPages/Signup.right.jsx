import { 
  RightSideSection,
  GoogleBtn,
  FacebookBtn,
  StyledForm,
  SignupSigninBtn,
} from "./shared";
import { FlexColumn, FlexRow } from "../styles/Container.styled";
import StyledLink from "../styles/Link.styled";

export default function SignupRightSide() {
  return (
    <RightSideSection>
      <h1>Create your account</h1>

      <p>
        Enjoy full access to <span>200+</span> Credit Card designs
        <br/>
        <span>Free</span> for all to use.
      </p>

      <GoogleBtn />

      <FacebookBtn />

      <p>----------------------  OR  ----------------------</p>

      <StyledForm>
        <FlexColumn align="flex-start">
          <label htmlFor="name">Full name</label>
          <input type="text" name="name" id="name" minLength={3} />
        </FlexColumn>
        <FlexColumn align="flex-start">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" minLength={3} />
        </FlexColumn>
         <FlexColumn align="flex-start">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" minLength={8} />
        </FlexColumn>
        <FlexRow justify="flex-start">
          <input type="checkbox" name="receive-emails" id="receive-emails" />
          <label htmlFor="receive-emails">Send me emails relating to financial advice</label>
        </FlexRow>
        <FlexRow justify="flex-start">
          <input type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms">
            I have read and agreed to <span>Cardvo Terms of Use and Privacy Policy</span>
          </label>
        </FlexRow>

        <SignupSigninBtn>Create account</SignupSigninBtn>
      </StyledForm>

      <p>
        Already have an account? <StyledLink to="/auth/signin" color={({theme}) => theme.colors.prim.five}>Sign in</StyledLink>
      </p>
    </RightSideSection>
  )
}