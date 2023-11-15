import { FlexColumn, FlexRow } from "../styles/Container.styled";
import { BtnPrimary, BtnSecondary } from "../styles/Button.styled";
import { Section } from "../styles/Section.styled";
import { Image } from "../styles/Image.styled";
import { useRef } from "react";
import styled from "styled-components";
import image from "../../../public/images/backgrounds/pana.png";
// import StyledLink from "../styles/Link.styled";
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
    width: 70%;
    margin-top: 50px;

    & h1 {
      font-size: 35px;
      width: 100%;
      text-align: center;
    }

    & p {
      font-size: 15px;
      text-align: center;
    }

    & button {
      height: 60px;
    }
  }

  @media(max-width: ${({theme}) => theme.mobile}) {
    width: 100%;
    padding: 0;
  }
`

const OrLine = styled(FlexRow)`
  & div {
    height: 1px;
    border: 1px solid ${({theme}) => theme.colors.sec.seven};
    flex: 1;
    width: 100%;
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;


  & > div {
    gap: 10px;
  }

  & input[type="text"],
    input[type="email"],
    input[type="password"] {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.colors.sec.six};
    border-radius: 5px;
    font-size: 19px;
    color: ${({ theme }) => theme.colors.sec.nine};
    letter-spacing: 2px;
  }
`

const PasswordInputContainer = styled(FlexRow)`
  gap: 0;
  border: 1px solid ${({ theme }) => theme.colors.sec.six};
  border-radius: 6px;

  & button {
    height: 40px;
    width: 10%;
    border-radius: 0;

    &:hover {
      background-color: transparent;
    }
  }

  & input[type="password"],
    input[type="text"] {
    border: none;
    width: 90%;
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
    <LeftSideSection $flex="1" $height="200vh">
      <BackBtn onClick={() => history.back()}>
        <i className="fa-solid fa-arrow-left"></i> Back
      </BackBtn>

      <FlexColumn $height="150vh">
        <Image
          alt="girl holding card"
          src={image}
          $width="100%"
          $height="auto"
        />
        <p>{paragragh}</p>
      </FlexColumn>
    </LeftSideSection>
  )
}

LeftSide.propTypes = {
  paragragh: PropTypes.string
}

function GoogleBtn({ onClick }) {
  return(
    <BtnPrimary
    onClick={onClick}
    $height="60px"
    $width="100%"
    $font="17px">
      <Image
        src={googleIcon}
        alt="google button icon"
        $width="40px"
        $height="auto"
      />
      Sign in with google
    </BtnPrimary>
  )
}

GoogleBtn.propTypes = {
  onClick: PropTypes.func
}

function FacebookBtn({ onClick }) {
  return (
    <BtnPrimary
    onClick={onClick}
    $height="60px"
    $width="100%"
    $font="17px">
      <Image
        src={facebookIcon}
        alt="facebook button icon"
        $width="40px"
        $height="auto"
      />
      Sign in with facebook
    </BtnPrimary>
  )
}

FacebookBtn.propTypes = {
  onClick: PropTypes.func
}

function PasswordInput() {
  const input = useRef()

  function handleTogglePassword() {
    if (input.current.type === "password") {
      input.current.type = "text";
    } else {
      input.current.type = "password";
    }
  }

  return (
     <FlexColumn $align="flex-start">
      <label htmlFor="password">Password</label>
      <PasswordInputContainer $gap="0" $width="100%">
        <input 
        type="password" 
        name="password" 
        id="password" 
        minLength={8}
        ref={input} 
        required/>
        <BtnPrimary
        type="button"
        $border="white" 
        $width="30px" 
        onClick={handleTogglePassword}>
          <i className="fa-solid fa-eye"></i>
        </BtnPrimary>
      </PasswordInputContainer>
    </FlexColumn>
  )
}


export {
  // react components
  LeftSide,
  GoogleBtn,
  FacebookBtn,
  PasswordInput,

  // styled components
  WholePageSection,
  RightSideSection,
  OrLine,
  StyledForm,
  SignupSigninBtn,
}