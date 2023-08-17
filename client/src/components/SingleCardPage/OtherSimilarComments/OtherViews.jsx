import { FlexRow } from "../../styles/Container.styled";
import { OtherViewsContainer } from "../styles";
import { CardFrontView, CardBackView } from "../../Card";
import { StyledCardDisplay } from "../../Card/styles";

export default function OtherViews() {
  return (
    <OtherViewsContainer 
    align="flex-start" 
    width="100%"
    height="250px">
      <h3>Other views</h3>

      <FlexRow width="100%" height="100%">
        <StyledCardDisplay 
        flex="1" 
        $height="100%"
        $m_width="100px"
        bdradius="5px"
        $bg="transparent">
          <CardFrontView
          $m_width="90%"
          $psize="12px"
          $h3size="15px"
          $imgsize="20px"
          $m_imgsize="12px"/>
        </StyledCardDisplay>

        <StyledCardDisplay 
        flex="1" 
        $height="100%"
        $m_width="100px"
        bdradius="5px"
        $bg="transparent">
          <CardBackView
          $m_width="90%"
          $imgsize="20px"
          $m_imgsize="12px"
          $m_psize="5px"
          $m_authorizesize="7px"
          $m_cvvheight="5px"
          />
        </StyledCardDisplay>
      </FlexRow>
    </OtherViewsContainer>
  )
}