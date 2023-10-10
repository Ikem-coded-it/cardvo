import { ExploreHundredsSection, Slider } from "./styles";
import { SliderWrapper } from "../LandingPage/GettingStarted";
import { FlexRow, Container } from "../styles/Container.styled";
import { Image } from "../styles/Image.styled";
import imageOne from "../../../public/images/frames/threecards.png";
import cardOneImage from "../../../public/images/cards/CARD1.png";
import cardTwoImage from "../../../public/images/cards/CARD22.png";
import handCardsImage from "../../../public/images/frames/handcards.png";

export default function ExploreHundreds () {
  return (
    <ExploreHundredsSection $gap="30px">
      <h2>
        Explore hundreds of free credit card designs
      </h2>

      <SliderWrapper>
        <Slider 
        $height="100%" 
        $justify="space-between" 
        $width="100%"
        $gap="20px">
          <FlexRow $bg={({theme}) => theme.colors.sec.two} $height="100%" $width="400px">
            <Image
            alt="three cards"
            src={imageOne}
            $height="30%"
            $width="100%"
            />
          </FlexRow>

          <Container $bg={({theme}) => theme.colors.sec.two} $height="100%" $width="400px">
            <Image
            alt="card"
            src={cardOneImage}
            $height="50%"
            $width="50%"
            />
            <Image
            alt="card"
            src={cardTwoImage}
            $height="50%"
            $width="50%"
            />
          </Container>

          <Container
          $height="100%"
          $width="400px">
            <Image
            src={handCardsImage}
            alt="hand holding cards"
            $height="100%"
            $width="100%"
            />
          </Container>
        </Slider>
      </SliderWrapper>
    </ExploreHundredsSection>
  )
}