import {  CardFrontView} from "../Card";
import { FlexColumn, FlexRow } from "../styles/Container.styled";
import { BtnPrimary, BtnSecondary } from "../styles/Button.styled";
import { FaRegHeart } from "react-icons/fa"; 
import { BsShare, BsBookmarks } from "react-icons/bs"; 
import { AiOutlineEdit } from "react-icons/ai"; 
import { FiDownload } from "react-icons/fi";
import { StyledViewOptionsSection } from "./styles";
import StyledLink from "../styles/Link.styled";

export default function ViewOptions() {
  return(
    <StyledViewOptionsSection>
      <FlexRow $height="430px" $width="100%">
        <FlexRow $height="100%" $flex="2">
          <CardFrontView />
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