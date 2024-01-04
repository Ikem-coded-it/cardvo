import { Section } from "../styles/Section.styled";
import { FlexRow } from "../styles/Container.styled";
import { Image } from "../styles/Image.styled";
import { BtnSecondary } from "../styles/Button.styled";
import image from "/images/frames/threecards.png";
import StyledLink from "../styles/Link.styled";
import { SliderWrapper } from "./GettingStarted";
import styled from "styled-components";

const EasyToUseSection = styled(Section)`
  & h1 {
    font-size: 40px;
    width: 600px;
    text-align: center;
  }

  & p {
    color: ${({ theme }) => theme.colors.sec.eight};
    font-size: 17px;
    text-align: center;
  }

  @media(max-width: ${({ theme }) => theme.tablet}) {
    & h1 {
      font-size: 30px;
      width: 100%;
    }

    & button {
      width: 200px;
    }
  }
`

export default function EasyToUse() {
  return (
    <EasyToUseSection $height="500px" $gap="30px">
      <h1>
        Easy-to-use templates to unlock your creativity
      </h1>

      <p>
        From nicknames to a picture of your cat, create a credit card design that resonates with you
      </p>

      <SliderWrapper>
        <Image
        $height="250px"
        $width="auto"
        alt="designed cards"
        src={image}
        />
      </SliderWrapper>

      <FlexRow>
        <StyledLink to="/explore">
          <BtnSecondary $height="50px" $width="200px">Explore Designs</BtnSecondary>
        </StyledLink>
      </FlexRow>
    </EasyToUseSection>
  )
}