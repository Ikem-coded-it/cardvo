import { FlexRow, FlexColumn, Container } from "../styles/Container.styled";
import { useEffect, useRef } from "react";
import { Image } from "../styles/Image.styled";
import masterCardLogo from "../../../public/svg/Mastercard-logo.svg";
import chipLogo from "../../../public/images/chip.png"
import styled from "styled-components";
import PropTypes from "prop-types";

const CardFront = styled(FlexColumn)`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  padding: 30px;
  color: #fff;
  height: 300px;
  min-width: 520px;
  max-width: 520px;
  transition: all .2s ease;

  & h3 {
    font-size: 35px;
    font-family: 'Courier New', Courier, monospace;
  }

  & p {
    font-size: 19px;
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    padding: 10px;
    height: 200px;
    min-width: 300px;
    max-width: 300px;

    & p {
      font-size: 15px;
    }

    & img {
      height: 40px;
      width: 40px;
    }

    & > div:nth-child(2) {
      gap: 15px;
      width: 100%;
      justify-content: center;
      & h3 {
        font-size: 25px;
      }
    }
  }
`

const CardBack = styled(FlexColumn)`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  color: #fff;
  height: 300px;
  min-width: 520px;
  max-width: 520px;
  transition: all .2s ease;

  & p {
    font-size: 13px;
  }

  & > div:nth-child(3) {
    & p {
      font-size: 15px;
    }
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    height: 200px;
    min-width: 300px;
    max-width: 300px;

    & div {
      font-size: 10px;
    }

    & > div:nth-child(2) {
      height: 30px;
    }

    & > div:nth-child(3) {
      padding: 0 10px;
      & div {
        font-size: 12px;
        height: 25px;
      }

      & p {
        font-size: 10px;
      }
    }

    & img {
      height: 40px;
      width: 40px;
    }
  }
`

const CardPreviewContainer = styled(FlexColumn)`
  @media(max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`

const PreviewNavContainer = styled(FlexRow)`
  & > div {
    background-color: #d1d5db;
    position: relative;
    padding: 0 10px;
    cursor: pointer;

    & > div {
      position: absolute;
      left: 0;
      transition: all .2s ease;
    }
  }

  & p {
    z-index: 1;
    color: #fff;
  }
`

const PreviewContainerWrapper = styled(FlexRow)`
  border: 1px solid ${({ theme }) => theme.colors.sec.five};
  padding: 10px;
  height: 85%;
  margin-left: 20px;
  position: relative;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    margin: 0;
    border: none;
  }
`

const PreviewContainer = styled(FlexRow)`
  height: 100%;
  position: absolute;
  left: 0;
  transition: all .2s ease;

  @media(max-width: ${({ theme }) => theme.mobile}) {
    margin-left: 12px;
    width: 650px;
  }
`

export default function CardPreview({ designState, designDispatch }) {
  // const [view, setView] = useState("front")
  const viewChanger = useRef()
  const slider = useRef()

  useEffect(() => {
    if (designState.view === "front") {
      viewChanger.current.style.left = "0";
      slider.current.style.left = "0";
    } else {
      viewChanger.current.style.left = "50%";
      slider.current.style.left = "-96%";
    }
  }, [designState.view])

  const handleViewSwitch = () => {
    let newView;

    if (designState.view === "front")
      newView = "back"
    if (designState.view === "back")
      newView = "front";

    const action = {
      type: "changed_cvv_focus",
      newView
    }
    designDispatch(action)
  }

  return (
    <CardPreviewContainer 
    width="75%"
    justify="flex-start"
    height="100%"
    gap="0">
      <PreviewNavContainer height="10%" width="100%" >
        <FlexRow 
        width="200px" 
        height="25px" 
        bdradius="10px" 
        padding="3px" 
        justify="space-between"
        onClick={(e) => handleViewSwitch(e)}>
          <p>Front</p>
          <p>Back</p>
          <Container
          ref={viewChanger}
          width="50%" 
          height="100%" 
          bdradius="10px"
          bg={({ theme }) => theme.colors.prim.four} />
        </FlexRow>
      </PreviewNavContainer>

      <PreviewContainerWrapper width="100%">
        <PreviewContainer
        ref={slider}
        height="100%"
        width="190%"
        justify="space-around">
          <FrontViewCard designState={designState}/> 
          <BackViewCard designState={designState} /> 
        </PreviewContainer>
      </PreviewContainerWrapper>
    </CardPreviewContainer>
  )
}

function FrontViewCard({designState}) {
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
    }

    updateCardDesign()
  }, [designState])

  return (
    <CardFront
    id="card-front"
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

function BackViewCard({ designState }) {
  const cardBackground = useRef()

  useEffect(() => {
  const updateCardDesign = () => {
    cardBackground.current.style.backgroundColor = `${designState.color}`;
    cardBackground.current.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${designState.image})`;
  }

  updateCardDesign()
  }, [designState])

  return (
    <CardBack
    id="card-back"
    gap="0" 
    ref={cardBackground}>

      <FlexRow justify="flex-end" width="100%" padding="0 20px">ELECTRONIC USE ONLY</FlexRow>
      <FlexRow width="100%" height="80px" bg="black" />

      <FlexColumn gap="5px" padding="0 20px">
        <FlexRow  justify="flex-start" width="100%">AUTHORIZED SIGNATURE</FlexRow>
        <FlexRow 
        height="40px" 
        bg="white" 
        width="100%" 
        bdradius="5px" 
        color="black"
        justify="flex-end"
        padding="0 20px">{designState.cvv}</FlexRow>
        <p>
          The card should be used in accordance with the bank terms and conditions
          <br />
          24 Hours Contact Bank Centre {'(234)'} 0900001 or send an email to customer.
        </p>
        <FlexRow justify="flex-start" width="100%">
          <Image
          src={masterCardLogo}
          alt="master card logo"
          height="50px"
          width="70px"
          />
        </FlexRow>
      </FlexColumn>
    </CardBack>
  )
}

CardPreview.propTypes = {
  designState: PropTypes.object,
  designDispatch: PropTypes.func
}

FrontViewCard.propTypes = {
  designState: PropTypes.object
}

BackViewCard.propTypes = {
  designState: PropTypes.object
}