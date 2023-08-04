import { StyledHeader } from "../styles/Header.styled"
import { CircleBackground } from "../styles/Header.styled";
import { 
  FlexColumn, 
  Container, FlexRow 
} from "../styles/Container.styled";
import { BtnPrimary, BtnSecondary } from "../styles/Button.styled";
import { Image } from "../styles/Image.styled";
import { Link } from "react-router-dom";
import styled from "styled-components";
import card from "../../../public/images/backgrounds/header1.png"
import cardGrid from "../../../public/images/backgrounds/header2.png"

const WriteupContainer = styled(FlexColumn)`
  flex: 1;
  z-index: 1;

  & h1 {
    flex-wrap: wrap:
    overflow: break-word;
    height: fit-content;
  }

  & span {
    color: ${({ theme }) => theme.colors.sec.eight};
  }

  & p {
    font-size: 17px;
    color: ${({ theme }) => theme.colors.sec.ten};
    flex-wrap: wrap:
    overflow: break-word;
  }

  @media(max-width: ${({theme}) => theme.mobile}) {
    gap: 0;
    text-align: center;

    & h1 {
      font-size: 40px;
    }

    & div {
      width: 100%;
      justify-content: center;
    }
  }
`

const SigninBtn = styled(BtnPrimary)`
   @media(max-width: ${({theme}) => theme.mobile}) {
    flex: 1;
  }
`

const ExploreBtn = styled(BtnSecondary)`
  @media(max-width: ${({theme}) => theme.mobile}) {
    width: 170px;
  }
`

const Background = styled(Container)`
  min-height: 400px;
  flex: 2;
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.sec.two};
  background-image: url("${cardGrid}");
  display: flex;
  align-items: flex-end;
  z-index: 1;

   @media(max-width: ${({theme}) => theme.mobile}) {
    min-height: 300px;
  }
`

export default function Header() {
  return (
    <StyledHeader 
    margin="130px 0 0 0"
    padding="0 90px 100px 90px"
    gap="50px">
      <CircleBackground />
      <WriteupContainer
      align="flex-start">
        <Container>
          <h1><span>Customize</span> your credit cards</h1>
        </Container>
        <p>
          Choose the looks, style and design of your card.
           Create a design that resonates with you.
        </p>
        <FlexRow gap="15px">
          <Link to="/auth/signin">
            <SigninBtn width="100px" height="50px">Sign in</SigninBtn>
          </Link>
          <Link to="/cards">
            <ExploreBtn width="180px" height="50px">Explore Designs</ExploreBtn>
          </Link>
        </FlexRow>
      </WriteupContainer>

      <Background>
        <Image 
        height="100%" 
        width="100%" 
        src={card} 
        loading="lazy" 
        />
      </Background>
    </StyledHeader>
  )
}