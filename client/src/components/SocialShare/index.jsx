import { SocialShareButtonsContainer } from "./styles";
import { FlexRow } from "../styles/Container.styled";
import { 
  FacebookShareButton, 
  FacebookIcon, 
  WhatsappShareButton, 
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share";
import { ImCancelCircle } from "react-icons/im";
import PropTypes from "prop-types";

const SocialShare = ({ cardId, close }) => {
  const cardPageURL = `https://cardvo.netlify.app/explore/card/${cardId}`;
  const animation = {
    y: 0,
    opacity: 1
  }

  const initial = {
    y: '100%',
    opacity: 0
  }
  return (
    <SocialShareButtonsContainer
    animate={animation}
    initial={initial}
    transition={{duration: .5}}>
      <FlexRow
      $bg={({theme}) => theme.colors.sec.three}
      $bdradius="10px"
      $justify="flex-start"
      $padding="10px">

        <ImCancelCircle color="grey" size="20px" onClick={close}/>

        <FacebookShareButton
        url={cardPageURL}
        quote={"Check out this card"}>
          <FacebookIcon logoFillColor="white" round={true}/>
        </FacebookShareButton>

        <WhatsappShareButton
        url={cardPageURL}
        quote={"Check out this card"}>
          <WhatsappIcon logoFillColor="white" round={true}/>
        </WhatsappShareButton>

        <TwitterShareButton
        url={cardPageURL}
        quote={"Check out this card"}>
          <TwitterIcon  logoFillColor="white" round={true}/>
        </TwitterShareButton>
      </FlexRow>
    </SocialShareButtonsContainer>
  )
}

SocialShare.propTypes = {
  cardId: PropTypes.string,
  close: PropTypes.func,
}

export default SocialShare