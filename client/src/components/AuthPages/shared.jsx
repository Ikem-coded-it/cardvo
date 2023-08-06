import { FlexColumn } from "../styles/Container.styled";
import { BtnPrimary, BtnSecondary } from "../styles/Button.styled";
import { Section } from "../styles/Section.styled";
import { Image } from "../styles/Image.styled";
import styled from "styled-components";
import image from "../../../public/images/backgrounds/pana.png";
import StyledLink from "../styles/Link.styled";
import PropTypes from "prop-types";

const googleIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg";
const facebookIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg";

const WholePageSection = styled(Section)`
  flex-direction: row;
`

const LeftSideSection = styled(Section)`
  padding: 40px 30px;
  border-right: 1px solid ${({ theme }) => theme.colors.sec.three};
  position: relative;

  @media(max-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }
`

const RightSideSection = styled(Section)`
  gap: 30px;
  padding: 40px 30px;
  height: 200vh;

  & h1 {
    font-size: 40px;
  }

  & p {
    width: 100%;
    font-size: 18px;
  }

  & span {
    color: ${({ theme }) => theme.colors.prim.five};
  }

  & button {
    width: 100%;
  }

  @media(max-width: ${({ theme }) => theme.tablet}) {
    justify-content: flex-start;
    height: fit-content;
    padding: 40px 0 0 0;

    & h1 {
      font-size: 35px;
      width: 100%;
      text-align: center;
    }

    & p {
      font-size: 15px;
      text-align: center;
    }
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & div {
    gap: 10px;
  }

  & input[type="text"],
    input[type="email"],
    input[type="password"] {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.colors.sec.four};
    border-radius: 5px;
    font-size: 19px;
    color: ${({ theme }) => theme.colors.sec.nine};
  }

  & input:invalid {
    border: 1px solid red;
  }

  & input:valid {
    border: 1px solid green;
  }
`

const SignupSigninBtn = styled(BtnSecondary)`
  width: 100%;
  height: 50px;
`

const BackBtn = styled(BtnPrimary)`
  border: none;
  position: absolute;
  left: 0;
  top: 100px;
`

function LeftSide({ paragragh }) {
  return (
    <LeftSideSection flex="1" height="200vh">
      <StyledLink to="/">
         <BackBtn>
          <i className="fa-solid fa-arrow-left"></i> Back
        </BackBtn>
      </StyledLink>

      <FlexColumn height="150vh">
        <Image
          alt="girl holding card"
          src={image}
          width="100%"
          height="auto"
        />
        <p>{paragragh}</p>
      </FlexColumn>
    </LeftSideSection>
  )
}

LeftSide.propTypes = {
  paragragh: PropTypes.string
}

function GoogleBtn() {
  return(
    <BtnPrimary height="50px" width="100%" font="17px">
      <Image
        src={googleIcon}
        alt="google button icon"
        width="40px"
        height="auto"
      />
      Sign in with google
    </BtnPrimary>
  )
}

function FacebookBtn() {
  return (
    <BtnPrimary height="50px" width="100%" font="17px">
      <Image
        src={facebookIcon}
        alt="facebook button icon"
        width="40px"
        height="auto"
      />
      Sign in with facebook
    </BtnPrimary>
  )
}


export {
  // react components
  LeftSide,
  GoogleBtn,
  FacebookBtn,

  // styled components
  WholePageSection,
  RightSideSection,
  StyledForm,
  SignupSigninBtn,
}