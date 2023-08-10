import { FlexRow, FlexColumn, Container } from "../styles/Container.styled";
import { useEffect, useRef } from "react";
import { Image } from "../styles/Image.styled";
import masterCardLogo from "../../../public/svg/Mastercard-logo.svg";
import chipLogo from "../../../public/images/chip.png"
import styled from "styled-components";
import PropTypes from "prop-types";

const CardFront = styled(FlexColumn)`
  box-shadow: 3px 3px 10px #171717;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  padding: 30px;
  color: #fff;
  height: 300px;
  min-width: 520px;
  transition: all .2s ease;

  & h3 {
    font-size: 35px;
    font-family: 'Courier New', Courier, monospace;
  }

  & p {
    font-size: 19px;
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    padding: 20px;
    height: 200px;
    width: 320px
  }
`

const CardPreviewContainer = styled(FlexColumn)`

`

const PreviewNavContainer = styled(FlexRow)`
  & div {
    background-color: #d1d5db;
  }
`

const PreviewContainer = styled(FlexRow)`
  border: 1px solid ${({ theme }) => theme.colors.sec.five};
  margin: 10px;
`

export default function CardPreview({ designState }) {
  return (
    <CardPreviewContainer 
    width="75%"
    justify="flex-start"
    height="100%"
    gap="0">
      <PreviewNavContainer height="10%" width="100%">
        <FlexRow width="800px" height="15px" bdradius="10px" >
          <Container flex="1" height="100%" bdradius="10px" />
          <Container flex="1" height="100%" bdradius="10px" />
        </FlexRow>
      </PreviewNavContainer>

      <PreviewContainer 
      height="85%"
      width="95%">
        <FrontViewCard designState={designState}/>
      </PreviewContainer>
    </CardPreviewContainer>
  )
}

export function FrontViewCard({designState}) {
  const cardBackground = useRef()
  const numberOne = useRef()
  const numberTwo = useRef()
  const numberThree = useRef()
  const numberFour = useRef()
  const name = useRef()
  const expiration = useRef()

  useEffect(() => {
    const updateCardDesign = () => {
      cardBackground.current.style.backgroundColor = `${designState.color}`;
      cardBackground.current.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${designState.image})`;
      // numberOne.current.textContent = `${designState.cardNumberOne}`;
      // numberTwo.current.textContent = `${designState.cardNumberTwo}`;
      // numberThree.current.textContent = `${designState.cardNumberThree}`;
      // numberFour.current.textContent = `${designState.cardNumberFour}`;
      // name.current.textContent = `${designState.name}`;
      // expiration.current.textContent = `${designState.expiration}`;
    }

    updateCardDesign()
  }, [designState])

  return (
    <CardFront
    ref={cardBackground}
    justify="space-between"
    >
      <FlexRow justify="space-between" width="100%">
        <Image
        src={chipLogo}
        alt="chip logo"
        height="50px"
        width="50px"
        />

        <Image
        src={masterCardLogo}
        alt="master card logo"
        height="50px"
        width="70px"
        />
      </FlexRow>

      <FlexRow justify="space-between" gap="40px">
        <h3 ref={numberOne}>{designState.cardNumberOne}</h3>
        <h3 ref={numberTwo}>{designState.cardNumberTwo}</h3>
        <h3 ref={numberThree}>{designState.cardNumberThree}</h3>
        <h3 ref={numberFour}>{designState.cardNumberFour}</h3>
      </FlexRow>

      <FlexRow justify="space-between" width="100%">
        <p ref={name}>{designState.name}</p>

        <p ref={expiration}>{designState.expiration}</p>
      </FlexRow>
    </CardFront>
  )
}

CardPreview.propTypes = {
  designState: PropTypes.object
}

FrontViewCard.propTypes = {
  designState: PropTypes.object
}