import { StyledContactUsHeader } from "./styles";
import { Image } from "../styles/Image.styled";
import atPic from "../../../public/images/backgrounds/at.png";

export default function ContactUsHeader () {
  return(
    <StyledContactUsHeader
    $justify="center"
    $margin="50px 0"
    $bg={({ theme }) => theme.colors.prim.two}>
      <Image 
      src={atPic}
      alt="girl contact"
      $height="100%"
      $width="50%"
      />
    </StyledContactUsHeader>
  )
}