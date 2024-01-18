import { StyledCardsContainer } from "../styles";
import { CardDisplayWithOptions } from "../../ExplorePage/ExploreCards";
// import { FlexRow, FlexColumn } from "../../styles/Container.styled";
import LoaderSpinner from "../../Loader";
import { NoCardsAlternative } from "../Layout";
import { LoaderContainer } from "../styles";
import { useState } from "react";

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

export default function LikedCards() {
  // eslint-disable-next-line no-unused-vars
  const [fetching, setFetching] = useState(false);

  return (
    <StyledCardsContainer>
      {
        cardsInfo.length < 1 ? (
          fetching ? (
            <LoaderContainer>
              <LoaderSpinner color="#375694" type="bubbles" height={50} width={100} />
            </LoaderContainer>
          ) : (
            <NoCardsAlternative />
          )
        ) : (
          cardsInfo.map((card, index) => {
            return (
              <CardDisplayWithOptions
              key={index}
              $height="70%"
              $width="80%"
              $h3size="15px"
              $psize="12px"
              $imgsize="20px"
              $m_imgsize="15px"
              $m_width="90%"
              $m_h3size="12px"
              $m_psize="8px"
              cardNumberOne={card.cardNumberOne}
              cardNumberTwo={card.cardNumberTwo}
              cardNumberThree={card.cardNumberThree}
              cardNumberFour={card.cardNumberFour}
              name={card.name}
              expiration={card.expiration}
              color={card.color}
              image={card.image}
              id="jhbekjen"
              />
            )
          })
        )
      }
    </StyledCardsContainer>
  )
}