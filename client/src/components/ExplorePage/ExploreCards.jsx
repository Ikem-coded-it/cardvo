import { ExploreCardsSection, StyledExploreCard, CardDisplay } from "./styles";
import { CardsGrid } from "./styles";
import { FlexRow, Container } from "../styles/Container.styled";
import { Image } from "../styles/Image.styled";
import { BtnPrimary } from "../styles/Button.styled";
import { 
  FaEdit, 
  FaRegHeart, 
  FaShare, 
  FaRegBookmark,
  FaRegComment,
  FaDownload
} from "react-icons/fa";
import masterCardLogo from "../../../public/svg/Mastercard-logo.svg";
import chipLogo from "../../../public/images/chip.png"
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function ExploreCards() {
  return (
    <ExploreCardsSection>
      <h2>All free card designs</h2>

      <CardsGrid width="100%">
        {
          cardsInfo.map(({ 
            cardNumberOne, 
            cardNumberTwo, 
            cardNumberThree, 
            cardNumberFour,
            // name = "CAPTAIN AMERICA",
            expiration,
            color,
            image
          }, index) => {
            return(
              <CardDisplay
              key={index}>
                <FlexRow width="100%" justify="space-between" padding="0 10px">
                  <BtnPrimary>
                    <FaEdit />
                  </BtnPrimary>

                  <FlexRow>
                    <BtnPrimary>
                      <FaRegBookmark />
                    </BtnPrimary>
                    <BtnPrimary>
                      <FaDownload />
                    </BtnPrimary>
                  </FlexRow>
                </FlexRow>

                <Card
                cardNumberOne={cardNumberOne}
                cardNumberTwo={cardNumberTwo}
                cardNumberThree={cardNumberThree}
                cardNumberFour={cardNumberFour}
                expiration={expiration}
                color={color}
                image={image}
                />

                <FlexRow width="100%" justify="space-between" padding="0 10px">
                  <FlexRow>
                    <BtnPrimary>
                      <FaRegHeart />
                    </BtnPrimary>

                    <BtnPrimary>
                      <FaRegComment />
                    </BtnPrimary>
                  </FlexRow>

                  <BtnPrimary>
                    <FaShare />
                  </BtnPrimary>
                </FlexRow>

                <Container height="100%" width="100%" />
              </CardDisplay>
            )
          })
        }
      </CardsGrid>
    </ExploreCardsSection>
  )
}

const cardsInfo = [
  {
    name: "captain america",
    cardNumberOne: "5896",
    cardNumberTwo: "8712",
    cardNumberThree: "5698",
    cardNumberFour: "7391",
    expiration: "08/27",
    color: "#0891b2",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },{
    name: "captain america",
    cardNumberOne: "5896",
    cardNumberTwo: "8712",
    cardNumberThree: "5698",
    cardNumberFour: "7391",
    expiration: "08/27",
    color: "#dc2626",
    image: "https://media.istockphoto.com/id/1166651462/vector/cartoon-face-with-red-eyes-vector-illustration-for-anime-manga-in-japanese-style.jpg?s=612x612&w=0&k=20&c=KIyKkZte9nTt8Dv4gp_j7cnkhK3PP_UOiQm-dxmMpwA="
  },{
    name: "captain america",
    cardNumberOne: "5896",
    cardNumberTwo: "8712",
    cardNumberThree: "5698",
    cardNumberFour: "7391",
    expiration: "08/27",
    color: "#fde047",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },{
    name: "captain america",
    cardNumberOne: "5896",
    cardNumberTwo: "8712",
    cardNumberThree: "5698",
    cardNumberFour: "7391",
    expiration: "08/27",
    color: "#84cc16",
    image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },{
    name: "captain america",
    cardNumberOne: "5896",
    cardNumberTwo: "8712",
    cardNumberThree: "5698",
    cardNumberFour: "7391",
    expiration: "08/27",
    color: "#7c3aed",
    image: "https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg"
  },{
    name: "captain america",
    cardNumberOne: "5896",
    cardNumberTwo: "8712",
    cardNumberThree: "5698",
    cardNumberFour: "7391",
    expiration: "08/27",
    color: "#fb923c",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },{
    name: "captain america",
    cardNumberOne: "5896",
    cardNumberTwo: "8712",
    cardNumberThree: "5698",
    cardNumberFour: "7391",
    expiration: "08/27",
    color: "#22d3ee",
    image: "https://images.unsplash.com/photo-1433477155337-9aea4e790195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },{
    name: "captain america",
    cardNumberOne: "5896",
    cardNumberTwo: "8712",
    cardNumberThree: "5698",
    cardNumberFour: "7391",
    expiration: "08/27",
    color: "#854d0e",
  },{
    name: "captain america",
    cardNumberOne: "5896",
    cardNumberTwo: "8712",
    cardNumberThree: "5698",
    cardNumberFour: "7391",
    expiration: "08/27",
    color: "#171717",
    image: "https://t4.ftcdn.net/jpg/05/62/02/41/360_F_562024161_tGM4lFlnO0OczLYHFFuNNdMUTG9ekHxb.jpg"
  },
]

function Card ({ 
  cardNumberOne, 
  cardNumberTwo, 
  cardNumberThree, 
  cardNumberFour,
  name = "CAPTAIN AMERICA",
  expiration,
  color,
  image = ""
}) {
  const background = useRef()

  useEffect(() => {
    if (color !== "") {
      background.current.style.backgroundColor = color;
    }

    if(image !== "") {
      background.current.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${image})`;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <StyledExploreCard justify="space-between" ref={background}>
      <FlexRow justify="space-between" width="100%">
        <Image
        src={chipLogo}
        alt="chip logo"
        height="50px"
        width="50px"
        loading="lazy"
        />

        <Image
        src={masterCardLogo}
        alt="master card logo"
        height="50px"
        width="70px"
        loading="lazy"
        />
      </FlexRow>

       <FlexRow justify="space-between" gap="40px">
        <h3>{cardNumberOne}</h3>
        <h3>{cardNumberTwo}</h3>
        <h3>{cardNumberThree}</h3>
        <h3>{cardNumberFour}</h3>
      </FlexRow>

      <FlexRow justify="space-between" width="100%">
        <p>{name}</p>

        <p>{expiration}</p>
      </FlexRow>

    </StyledExploreCard>
  )
}

Card.propTypes = {
  cardNumberOne: PropTypes.string,
  cardNumberTwo: PropTypes.string,
  cardNumberThree: PropTypes.string,
  cardNumberFour: PropTypes.string,
  name: PropTypes.string,
  expiration: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
}