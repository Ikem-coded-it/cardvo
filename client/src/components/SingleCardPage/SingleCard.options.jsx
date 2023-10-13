import {  CardFrontView, CardBackView } from "../Card";
import { FlexColumn, FlexRow } from "../styles/Container.styled";
import { BtnPrimary, BtnSecondary } from "../styles/Button.styled";
import { FaRegHeart } from "react-icons/fa"; 
import { BsShare, BsBookmarks } from "react-icons/bs"; 
import { AiOutlineEdit } from "react-icons/ai"; 
import { FiDownload } from "react-icons/fi";
import { StyledViewOptionsSection } from "./styles";
import { useContext } from "react";
import { CardViewContext } from "../../pages/SingleCardPage";
import StyledLink from "../styles/Link.styled";
import LoaderSpinner from "../Loader";

export default function ViewOptions() {
  const { view, cardDetails } = useContext(CardViewContext);

  return(
    <StyledViewOptionsSection>
      <FlexRow $height="430px" $width="100%">
        <FlexRow $height="100%" $flex="2">
          {/* 
          if view state is front, show front view card else show back view card
           */}
          {
            cardDetails ? (

              view === "front" ? (
                <CardFrontView
                cardNumberOne={cardDetails.card_number_one}
                cardNumberTwo={cardDetails.card_number_two}
                cardNumberThree={cardDetails.card_number_three}
                cardNumberFour={cardDetails.card_number_four}
                name={cardDetails.card_holder_name}
                expiration={cardDetails.expiration}
                color={cardDetails.color}
                image={cardDetails.background_image}
                $h3size="40px"
                />
              ) : (
                <CardBackView
                cvv={cardDetails.cvv}
                color={cardDetails.color}
                image={cardDetails.background_image}
                $psize="15px"
                $electronicsize="20px"
                $authorizesize="17px"
                $blackheight="40px"
                $cvvheight="25px"
                $m_psize="11px"
                $m_electronicsize="14px"
                $m_authorizesize="14px"
                $m_blackheight="30px"
                $m_cvvheight="20px"
                />
              )
              
            ) : (
              <LoaderSpinner type="spin" color="#375694" height={30} width={30}/>
            )
          }
        </FlexRow>

        <FlexColumn $height="100%" $flex="1" $gap="20px">
          <BtnSecondary $width="100%" $height="50px">
            <FiDownload/> Download
          </BtnSecondary>

          <StyledLink $width="100%" >
            <BtnPrimary $width="100%" $height="50px">
              <AiOutlineEdit/> Edit
            </BtnPrimary>
          </StyledLink>

          <BtnPrimary $width="35%" $height="50px">
            <BsBookmarks/> Save
          </BtnPrimary>

          <BtnPrimary $width="35%" $height="50px">
            <FaRegHeart/> Like
          </BtnPrimary>

          <BtnPrimary $width="35%" $height="50px">
            <BsShare/> Share
          </BtnPrimary>
        </FlexColumn>
      </FlexRow>
    </StyledViewOptionsSection>
  )
}