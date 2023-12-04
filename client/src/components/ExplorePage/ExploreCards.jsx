import { ExploreCardsSection, CardDisplay } from "./styles";
import { CardsGrid } from "./styles";
import { FlexRow, Container } from "../styles/Container.styled"; 
import { BtnPrimary } from "../styles/Button.styled";
import { BsShare } from "react-icons/bs";
import { FiDownload } from "react-icons/fi"; 
import { BiCommentDetail } from "react-icons/bi"; 
import { CardFrontView } from "../Card";
import { useContext } from "react";
import LoaderSpinner from "../Loader";
import MessageDisplay from "../MessageDisplay";
import { ExploreCardsContext } from "../../pages/ExplorePage";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";

export default function ExploreCards() {
  const {
    cardsInfo,
    fetching,
    displayMessage,
    setDisplayMessage
  } = useContext(ExploreCardsContext);
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  const checkIfLoggedInAndNavigate = (cardId) => {
    if(!user) return navigate("/auth/signin")
    else
      return navigate(`/explore/card/${cardId}`)
  }

  return (
    <>
    {
      displayMessage !== null ? (
        <MessageDisplay message={displayMessage} closeMessage={() => setDisplayMessage(null)} />
      ) : (
        null
      )
    }
    <ExploreCardsSection>
      <h2>All free card designs</h2>

      <CardsGrid $width="100%">
        {
          fetching ? (<LoaderSpinner type="spin" color="#375694" height={60} width={60} />):(
            cardsInfo.map(({ 
            card_number_one, 
            card_number_two, 
            card_number_three, 
            card_number_four,
            card_holder_name,
            expiration,
            color,
            background_image,
            id
          }, index) => {
            return(
              <CardDisplayWithOptions
              key={index}
              checkIfLoggedInAndNavigate={checkIfLoggedInAndNavigate}
              cardNumberOne={card_number_one}
              cardNumberTwo={card_number_two}
              cardNumberThree={card_number_three}
              cardNumberFour={card_number_four}
              name={card_holder_name}
              expiration={expiration}
              color={color}
              image={background_image}
              id={id}
              />
            )
          }))
        }
      </CardsGrid>
    </ExploreCardsSection>
    </>
  )
}

function CardDisplayWithOptions({
  checkIfLoggedInAndNavigate,
  cardNumberOne,
  cardNumberTwo,
  cardNumberThree,
  cardNumberFour,
  name,
  expiration,
  color,
  image,
  id
}) {

  return (
    <CardDisplay>
      <FlexRow $width="100%" $justify="space-between" $padding="0 10px">
        <BtnPrimary
        $font="17px"
        onClick={() => checkIfLoggedInAndNavigate(id)}>
          View
        </BtnPrimary>

        <FlexRow>
          <BtnPrimary>
            <FiDownload />
          </BtnPrimary>
        </FlexRow>
      </FlexRow>

      <CardFrontView
      cardNumberOne={cardNumberOne}
      cardNumberTwo={cardNumberTwo}
      cardNumberThree={cardNumberThree}
      cardNumberFour={cardNumberFour}
      name={name}
      expiration={expiration}
      color={color}
      image={image}
      />

      <FlexRow $width="100%" $justify="space-between" $padding="0 10px">
        <FlexRow>
          <HashLink smooth to={`/explore/card/${id}#comments`}>
            <BtnPrimary>
              <BiCommentDetail />
            </BtnPrimary>
          </HashLink>
        </FlexRow>

        <BtnPrimary>
          <BsShare />
        </BtnPrimary>
      </FlexRow>

      <Container $height="100%" $width="100%" />
    </CardDisplay>
  )
}

CardDisplayWithOptions.propTypes = {
  checkIfLoggedInAndNavigate: PropTypes.func,
  likeOrUnlikeCard: PropTypes.func,
  cardNumberOne: PropTypes.string,
  cardNumberTwo: PropTypes.string,
  cardNumberThree: PropTypes.string,
  cardNumberFour: PropTypes.string,
  name: PropTypes.string,
  expiration: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
}

// const cardsInfo = [
//   {
//     name: "captain america",
//     cardNumberOne: "5896",
//     cardNumberTwo: "8712",
//     cardNumberThree: "5698",
//     cardNumberFour: "7391",
//     expiration: "08/27",
//     color: "#0891b2",
//     image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
//   },{
//     name: "captain america",
//     cardNumberOne: "5896",
//     cardNumberTwo: "8712",
//     cardNumberThree: "5698",
//     cardNumberFour: "7391",
//     expiration: "08/27",
//     color: "#dc2626",
//     image: "https://media.istockphoto.com/id/1166651462/vector/cartoon-face-with-red-eyes-vector-illustration-for-anime-manga-in-japanese-style.jpg?s=612x612&w=0&k=20&c=KIyKkZte9nTt8Dv4gp_j7cnkhK3PP_UOiQm-dxmMpwA="
//   },{
//     name: "captain america",
//     cardNumberOne: "5896",
//     cardNumberTwo: "8712",
//     cardNumberThree: "5698",
//     cardNumberFour: "7391",
//     expiration: "08/27",
//     color: "#fde047",
//     image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
//   },{
//     name: "captain america",
//     cardNumberOne: "5896",
//     cardNumberTwo: "8712",
//     cardNumberThree: "5698",
//     cardNumberFour: "7391",
//     expiration: "08/27",
//     color: "#84cc16",
//     image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
//   },{
//     name: "captain america",
//     cardNumberOne: "5896",
//     cardNumberTwo: "8712",
//     cardNumberThree: "5698",
//     cardNumberFour: "7391",
//     expiration: "08/27",
//     color: "#7c3aed",
//     image: "https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg"
//   },{
//     name: "captain america",
//     cardNumberOne: "5896",
//     cardNumberTwo: "8712",
//     cardNumberThree: "5698",
//     cardNumberFour: "7391",
//     expiration: "08/27",
//     color: "#fb923c",
//     image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
//   },{
//     name: "captain america",
//     cardNumberOne: "5896",
//     cardNumberTwo: "8712",
//     cardNumberThree: "5698",
//     cardNumberFour: "7391",
//     expiration: "08/27",
//     color: "#22d3ee",
//     image: "https://images.unsplash.com/photo-1433477155337-9aea4e790195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
//   },{
//     name: "captain america",
//     cardNumberOne: "5896",
//     cardNumberTwo: "8712",
//     cardNumberThree: "5698",
//     cardNumberFour: "7391",
//     expiration: "08/27",
//     color: "#854d0e",
//   },{
//     name: "captain america",
//     cardNumberOne: "5896",
//     cardNumberTwo: "8712",
//     cardNumberThree: "5698",
//     cardNumberFour: "7391",
//     expiration: "08/27",
//     color: "#171717",
//     image: "https://t4.ftcdn.net/jpg/05/62/02/41/360_F_562024161_tGM4lFlnO0OczLYHFFuNNdMUTG9ekHxb.jpg"
//   },
// ]