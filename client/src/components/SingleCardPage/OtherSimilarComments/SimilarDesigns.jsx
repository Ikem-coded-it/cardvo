import { SimilarDesignsContainer } from "../styles"
import { FlexColumn } from "../../styles/Container.styled"
import { CardFrontView } from "../../Card";
import { StyledCardDisplay } from "../../Card/styles";
import { CardViewContext } from "../../../Contexts/SingleCardPageContext";
import { useContext, useState, useEffect } from "react";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import MessageDisplay from "../../MessageDisplay";
import StyledLink from "../../styles/Link.styled";
import LoaderSpinner from "../../Loader";

export default function SimilarDesigns() {
  const { category, currentCardId } = useContext(CardViewContext);
  const [similarCards, setSimilarCards] = useState([]);
  const [ message, setMessage ] = useState(null);
  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    async function fetchSimilarCards() {
      if (category !== null) {
        try {
          const response = await axiosPrivate.get(`/card-design/category/${category}`)
          if (response.data.success === true) {
            const cards = response.data.data;

            // remove currently viewed card from list of simlar cards
            const filteredCurrentCard = cards.filter(card => {
              if(card.id !== currentCardId) return card;
            })

            setSimilarCards(filteredCurrentCard);
          } else {
            setMessage(response.data.message);
          }
        } catch (error) {
          setMessage(error.message)
        } 
      }
    }

    fetchSimilarCards()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <>
    {message && <MessageDisplay message={message} closeMessage={() => setMessage(null)}/>}
    <SimilarDesignsContainer $justify="flex-start">
      <h3>View similar designs</h3>

      <FlexColumn>
        {
          similarCards.length >= 1 ? (
              similarCards.slice(0, 4).map(({
                card_number_one, 
                card_number_two, 
                card_number_three, 
                card_number_four,
                expiration,
                color,
                background_image,
                id
              }, index) => {
                return(
                  <StyledLink key={index} to={`/explore/card/${id}`}>
                    <StyledCardDisplay
                    $m_width="160px">
                      <CardFrontView
                      $height="70%"
                      $width="80%"
                      $h3size="15px"
                      $psize="12px"
                      $imgsize="20px"
                      $m_imgsize="15px"
                      $m_width="90%"
                      $m_h3size="12px"
                      $m_psize="8px"
                      cardNumberOne={card_number_one}
                      cardNumberTwo={card_number_two}
                      cardNumberThree={card_number_three}
                      cardNumberFour={card_number_four}
                      expiration={expiration}
                      color={color}
                      image={background_image}
                      />
                    </StyledCardDisplay>
                  </StyledLink>
                )
              })
          ) : (<LoaderSpinner type="spin" height={20} width={20} color="#375694"/>)
        }
        
      </FlexColumn>
    </SimilarDesignsContainer>
    </>
  )
}