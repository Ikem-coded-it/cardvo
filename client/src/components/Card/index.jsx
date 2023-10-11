import { StyledCardFrontView, StyledCardBackView } from "./styles";
import { FlexRow, FlexColumn } from "../styles/Container.styled";
import { useEffect, useRef } from "react";
import { Image } from "../styles/Image.styled";
import masterCardLogo from "../../../public/svg/Mastercard-logo.svg";
import chipLogo from "../../../public/images/chip.png"
import useDateFormater from "../../hooks/useDateFormater";
import PropTypes from "prop-types";

export function CardFrontView ({
  $height,
  $width,
  $imgsize,
  $psize,
  $h3size,
  $m_height,
  $m_width,
  $m_imgsize,
  $m_psize,
  $m_h3size,
  cardNumberOne, 
  cardNumberTwo, 
  cardNumberThree, 
  cardNumberFour,
  name,
  expiration,
  color,
  image = ""
}) {
  const background = useRef()
  const date = useDateFormater(expiration);

  useEffect(() => {
    if (color !== "") {
      background.current.style.backgroundColor = color;
    }

    if(image !== "") {
      background.current.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${image})`;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <StyledCardFrontView
    $height={$height}
    $width={$width}
    $imgsize={$imgsize}
    $psize={$psize}
    $h3size={$h3size}
    $m_height={$m_height}
    $m_width={$m_width}
    $m_imgsize={$m_imgsize}
    $m_psize={$m_psize}
    $m_h3size={$m_h3size}
    $justify="space-between" 
    ref={background}>
      <FlexRow $justify="space-between" $width="100%">
        <Image
        src={chipLogo}
        alt="chip logo"
        $height="50px"
        $width="50px"
        loading="lazy"
        />

        <Image
        src={masterCardLogo}
        alt="master card logo"
        $height="50px"
        $width="70px"
        loading="lazy"
        />
      </FlexRow>

       <FlexRow $justify="space-between" $gap="40px">
        <h3>{cardNumberOne}</h3>
        <h3>{cardNumberTwo}</h3>
        <h3>{cardNumberThree}</h3>
        <h3>{cardNumberFour}</h3>
      </FlexRow>

      <FlexRow $justify="space-between" $width="100%">
        <p>{name}</p>

        <p>{date}</p>
      </FlexRow>

    </StyledCardFrontView>
  )
}


export function CardBackView({
  $height,
  $width,
  $imgsize,
  $psize,
  $electronicsize,
  $authorizesize,
  $blackheight,
  $cvvheight,
  $m_height,
  $m_width,
  $m_imgsize,
  $m_psize,
  $m_electronicsize,
  $m_authorizesize,
  $m_blackheight,
  $m_cvvheight,
  cvv, 
  image = "", 
  color = "" 
}) {
  const cardBackground = useRef()

  useEffect(() => {
  const updateCardDesign = () => {
    if (color !== "")
      cardBackground.current.style.backgroundColor = `${color}`;

    if (image !== "")
      cardBackground.current.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${image})`;
  }

  updateCardDesign()
  }, [color, image])

  return (
    <StyledCardBackView
    $height={$height}
    $width={$width}
    $imgsize={$imgsize}
    $psize={$psize}
    $electronicsize={$electronicsize}
    $authorizesize={$authorizesize}
    $blackheight={$blackheight}
    $cvvheight={$cvvheight}
    $m_height={$m_height}
    $m_width={$m_width}
    $m_imgsize={$m_imgsize}
    $m_psize={$m_psize}
    $m_electronicsize={$m_electronicsize}
    $m_authorizesize={$m_authorizesize}
    $m_blackheight={$m_blackheight}
    $m_cvvheight={$m_cvvheight}
    id="card-back"
    $gap="0" 
    ref={cardBackground}>

      <FlexRow $justify="flex-end" $width="100%" $padding="0 20px">ELECTRONIC USE ONLY</FlexRow>
      <FlexRow $width="100%" $height="20px" $bg="black" />

      <FlexColumn $gap="1px" $padding="0 10px">
        <FlexRow  $justify="flex-start" $width="100%">AUTHORIZED SIGNATURE</FlexRow>
        <FlexRow 
        $height="17px" 
        $bg="white" 
        $width="100%" 
        $bdradius="5px" 
        $color="black"
        $justify="flex-end"
        $padding="0 10px">{cvv}</FlexRow>
        <p>
          The card should be used in accordance with the bank terms and conditions
          <br />
          24 Hours Contact Bank Centre {'(234)'} 0900001 or send an email to customer.
        </p>
        <FlexRow $justify="flex-start" $width="100%">
          <Image
          src={masterCardLogo}
          alt="master card logo"
          $height="50px"
          $width="70px"
          />
        </FlexRow>
      </FlexColumn>
    </StyledCardBackView>
  )
}

CardFrontView.propTypes = {
  $height: PropTypes.string,
  $width: PropTypes.string,
  $imgsize: PropTypes.string,
  $psize: PropTypes.string,
  $h3size: PropTypes.string,
  $m_height: PropTypes.string,
  $m_width: PropTypes.string,
  $m_imgsize: PropTypes.string,
  $m_psize: PropTypes.string,
  $m_h3size: PropTypes.string,
  cardNumberOne: PropTypes.string,
  cardNumberTwo: PropTypes.string,
  cardNumberThree: PropTypes.string,
  cardNumberFour: PropTypes.string,
  name: PropTypes.string,
  expiration: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
}

CardBackView.propTypes = {
  $height: PropTypes.string,
  $width: PropTypes.string,
  $imgsize: PropTypes.string,
  $psize: PropTypes.string,
  $electronicsize: PropTypes.string,
  $authorizesize: PropTypes.string,
  $blackheight: PropTypes.string,
  $cvvheight: PropTypes.string,
  $m_height: PropTypes.string,
  $m_width: PropTypes.string,
  $m_imgsize: PropTypes.string,
  $m_psize: PropTypes.string,
  $m_electronicsize: PropTypes.string,
  $m_authorizesize: PropTypes.string,
  $m_blackheight: PropTypes.string,
  $m_cvvheight: PropTypes.string,
  cvv: PropTypes.string,
  image: PropTypes.string,
  color: PropTypes.string,
}