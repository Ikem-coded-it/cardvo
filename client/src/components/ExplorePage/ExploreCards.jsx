import { ExploreCardsSection, CardDisplay } from "./styles";
import { CardsGrid } from "./styles";
import { FlexRow, Container } from "../styles/Container.styled"; 
import { BtnPrimary } from "../styles/Button.styled";
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

export function CardDisplayWithOptions({
  $height,
  $width,
  $imgsize,
  $psize,
  $h3size,
  $m_height,
  $m_width,
  $m_imgsize,
  $m_psize,
  $m_h3size,
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
      </FlexRow>

      <CardFrontView
      $height={$height}
      $width={$width}
      $h3size={$h3size}
      $psize={$psize}
      $imgsize={$imgsize}
      $m_height={$m_height}
      $m_imgsize={$m_imgsize}
      $m_width={$m_width}
      $m_h3size={$m_h3size}
      $m_psize={$m_psize}
      cardNumberOne={cardNumberOne}
      cardNumberTwo={cardNumberTwo}
      cardNumberThree={cardNumberThree}
      cardNumberFour={cardNumberFour}
      name={name}
      expiration={expiration}
      color={color}
      image={image}
      id={id}
      />

      <FlexRow $width="100%" $justify="space-between" $padding="0 10px">
        <FlexRow>
          <HashLink smooth to={`/explore/card/${id}#comments`}>
            <BtnPrimary>
              <BiCommentDetail />
            </BtnPrimary>
          </HashLink>
        </FlexRow>
      </FlexRow>

      <Container $height="100%" $width="100%" />
    </CardDisplay>
  )
}

CardDisplayWithOptions.propTypes = {
  $height: PropTypes.string,
  $width: PropTypes.string,
  $imgsize: PropTypes.string,
  $psize: PropTypes.string,
  $h3size: PropTypes.string,
  $m_height: PropTypes.string,
  $m_width: PropTypes.string,
  $m_imgsize: PropTypes.string,
  $m_psize: PropTypes.string,
  $m_h3size: PropTypes.string,
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