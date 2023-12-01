import { FlexRow } from "../../styles/Container.styled";
import { OtherViewsContainer } from "../styles";
import { CardFrontView, CardBackView } from "../../Card";
import { StyledCardDisplay } from "../../Card/styles";
import { useContext } from "react";
// import { CardViewContext } from "../../../pages/SingleCardPage";
import { CardViewContext } from "../../../Contexts/SingleCardPageContext";
import LoaderSpinner from "../../Loader";
// import { changeCardView } from "../SingleCard.options";

export default function OtherViews() {
  const { cardDetails, viewChangeDispatch } = useContext(CardViewContext);

  const handleChangeToFrontView = () => {
    viewChangeDispatch({type: "changed view to front"})
  }

  const handleChangeToBackView = () => {
    viewChangeDispatch({type: "changed view to back"})
  }

  return (
    <OtherViewsContainer 
    $align="flex-start" 
    $width="100%"
    $height="250px">
      <h3>Other views</h3>

      <FlexRow $width="100%" $height="100%">
        <StyledCardDisplay
        onClick={handleChangeToFrontView}
        $flex="1" 
        $height="100%"
        $m_width="100px"
        $bdradius="5px"
        $bg="transparent">
          {
            cardDetails ? (
              <CardFrontView
              $m_width="90%"
              $psize="12px"
              $h3size="15px"
              $imgsize="20px"
              $m_imgsize="12px"
              cardNumberOne={cardDetails.card_number_one}
              cardNumberTwo={cardDetails.card_number_two}
              cardNumberThree={cardDetails.card_number_three}
              cardNumberFour={cardDetails.card_number_four}
              name={cardDetails.card_holder_name}
              expiration={cardDetails.expiration}
              color={cardDetails.color}
              image={cardDetails.background_image}
              />
            ) : (
              <LoaderSpinner type="spin" color="#375694" height={20} width={20}/>
            )
          }
        </StyledCardDisplay>

        <StyledCardDisplay
        id="comments" // this id is set here for linking to comments section of single cards page which is right below this in the UI
        onClick={handleChangeToBackView}
        $flex="1" 
        $height="100%"
        $m_width="100px"
        $bdradius="5px"
        $bg="transparent">
          {
            cardDetails ? (
              <CardBackView
              $m_width="90%"
              $imgsize="20px"
              $m_imgsize="12px"
              $m_psize="5px"
              $m_authorizesize="7px"
              $m_cvvheight="5px"
              cvv={cardDetails.cvv}
              color={cardDetails.color}
              image={cardDetails.background_image}
              />
            ) : (
              <LoaderSpinner type="spin" color="#375694" height={20} width={20}/>
            )
          }
        </StyledCardDisplay>
      </FlexRow>
    </OtherViewsContainer>
  )
}