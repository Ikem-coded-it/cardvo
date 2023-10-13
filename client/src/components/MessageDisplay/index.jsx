import { FlexRow } from "../styles/Container.styled";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BtnPrimary } from "../styles/Button.styled";

const StyledMessageDisplay = styled(FlexRow)`
  opacity: o;
  position: fixed;
  top: 100px;
  left: 500px;
  z-index: 3;

  & button {
    width: 30px;
    height: 30px;
    & svg { // close message button
      cursor: pointer;
      height: 22px;
      width: 22px;
    }
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
    $width="fit-content"
    $padding="0 40px"
    $color="#fff"
    $bdradius="10px">
      {message}

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