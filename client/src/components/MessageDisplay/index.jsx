import { FlexRow } from "../styles/Container.styled";
import PropTypes from "prop-types";
// import { useRef, useEffect } from "react";
import { ImCancelCircle } from "react-icons/im";
import { BtnPrimary } from "../styles/Button.styled";
import { StyledModal, DarkModalOverlay } from "../styles/Modal.styled";
import { motion } from "framer-motion"

// Takes a message to display and a function to close the message
export default function MessageDisplay({ message, closeMessage }) {
  const animation = {
    y: 0,
    scale: 1
  }

  const initial = {
    y: -300,
    scale: 0
  }

  return (
    <DarkModalOverlay>
      <motion.div animate={animation} initial={initial}>
        <StyledModal>
          <FlexRow $width="100%" height="100%">
            <p>{message}</p>

            <BtnPrimary
              onClick={closeMessage}
              $width="30px"
              $height="30px"
              $padding="0"
            >
              <ImCancelCircle color="white" size="30px" />
            </BtnPrimary>
          </FlexRow>
        </StyledModal>
      </motion.div>
    </DarkModalOverlay>
  )
}

MessageDisplay.propTypes = {
  message: PropTypes.string,
  closeMessage: PropTypes.func,
}