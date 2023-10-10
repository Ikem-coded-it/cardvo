import { StyledContactUsAnytimeSection } from "./styles";
import { FlexColumn } from "../styles/Container.styled";
import StyledLink from "../styles/Link.styled";
import { BtnSecondary } from "../styles/Button.styled";

export default function ContactUsAnytime() {
  return (
    <StyledContactUsAnytimeSection $padding="0 0 50px 0">
      <h1>Contact us anytime</h1>

      <FlexColumn $gap="20px" $width="100%">
        <p>
          Have a question about our product and services?
          <StyledLink onClick={window.scrollTo(0, 0)} to="/auth/signin"> Log in</StyledLink> to view
          our full FAQ page.
        </p>

        <p>
          If you prefer to email us, you can do so at ikemworks@gmail.com
        </p>

        <BtnSecondary 
        $width="400px"
        $bdradius="5px"
        $height="55px">
          Email us
        </BtnSecondary>
      </FlexColumn>
    </StyledContactUsAnytimeSection>
  )
}