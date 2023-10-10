import { StyledContactUsMessage } from "./styles";
import { FlexRow, FlexColumn } from "../styles/Container.styled";
import { FaRegComments } from "react-icons/fa";
import { BsTelephoneOutbound } from "react-icons/bs";
import { BtnSecondary } from "../styles/Button.styled";

export default function ContactUsMessage() {
  return (
    <StyledContactUsMessage $height="300px">
      <FlexRow $width="80%" $height="280px">
        <FlexColumn $height="100%" $justify="flex-end" $padding="0 70px 30px 0">
          <FaRegComments />
          <h4>Message an agent</h4>
          <p>
            Message an agent to get your questions answered
          </p>
          <BtnSecondary $width="150px" $bdradius="5px">Send Message</BtnSecondary>
        </FlexColumn>

        <FlexColumn $height="100%" $justify="flex-end" $padding="0 0 30px 70px">
          <BsTelephoneOutbound />
          <h4>NGN 1-600-CARD VO</h4>
          <p>
            +234-810-3005-678 {"(English)"} We are available to help you 24 hours a day
          </p>
          <BtnSecondary $width="150px" $bdradius="5px">Call Now</BtnSecondary>
        </FlexColumn>
      </FlexRow>
    </StyledContactUsMessage>
  )
}