import { FlexRow } from "../styles/Container.styled";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BtnPrimary } from "../styles/Button.styled";

const StyledMessageDisplay = styled(FlexRow)`
  max-width: 300px;
  min-width: fit-content;
  opacity: o;
  position: fixed;
  top: 100px;
  left: 40%;
  z-index: 3;

  & button {
    width: 30px;
    height: 30px;
    cursor: pointer;
    border: 1px solid #fff;
    & svg { // close message button
      height: 22px;
      width: 22px;
      fill: #fff;
    }

    &:hover > svg {
      fill: black
    }
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    left: 5%;
  }

`

// Takes a message to display and a function to close the message
export default function MessageDisplay({ message, closeMessage }) {
  const messageDisplay = useRef();

  return (
    <StyledMessageDisplay
    ref={messageDisplay}
    $bg={({ theme }) => theme.colors.prim.four}
    $height="50px"
    $padding="0 40px"
    $color="#fff"
    $bdradius="10px">
      <p>
        {message}
      </p>

      <BtnPrimary 
      onClick={closeMessage}
      $width="30px"
      $height="30px">
        <AiOutlineClose/>
      </BtnPrimary>
    </StyledMessageDisplay>
  )
}

MessageDisplay.propTypes = {
  message: PropTypes.string,
  closeMessage: PropTypes.func,
}