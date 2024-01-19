import { StyledCardsContainer } from "../styles";
import { CardDisplayWithOptions } from "../../ExplorePage/ExploreCards";
import LoaderSpinner from "../../Loader";
import { NoCardsAlternative } from "../Layout";
import { LoaderContainer } from "../styles";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useAuth from "../../../hooks/useAuth";
import MessageDisplay from "../../MessageDisplay";
import { useNavigate } from "react-router-dom";

export default function MyCollection() {
  const [fetching, setFetching] = useState(false);
  const [cards, setCards] = useState([]);
  const { user } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLikedCards = async() => {
      setFetching(true)
      try {
        const response = await axiosPrivate.get(`/card-design/my-collection/${user.id}`);
        setCards(response.data?.cards)
        return setFetching(false)
      } catch (error) {
        setMessage(error.message)
      }
    }

    fetchLikedCards()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id])

  const checkIfLoggedInAndNavigate = (cardId) => {
    if(!user) return navigate("/auth/signin")
    else
      return navigate(`/explore/card/${cardId}`)
  }

  return (
    <StyledCardsContainer>
      {
        message && <MessageDisplay message={message} closeMessage={() => setMessage(null)}/>
      }
      {
        cards.length < 1 ? (
          fetching ? (
            <LoaderContainer>
              <LoaderSpinner color="#375694" type="bubbles" height={50} width={100} />
            </LoaderContainer>
          ) : (
            <NoCardsAlternative />
          )
        ) : (
          cards.map((card, index) => {
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
              checkIfLoggedInAndNavigate={checkIfLoggedInAndNavigate}
              cardNumberOne={card.card_number_one}
              cardNumberTwo={card.card_number_two}
              cardNumberThree={card.card_number_three}
              cardNumberFour={card.card_number_four}
              name={card.card_holder_name}
              expiration={card.expiration}
              color={card.color}
              image={card.background_image}
              id={card.id}
              />
            )
          })
        )
      }
    </StyledCardsContainer>
  )
}