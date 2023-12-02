import { SimilarDesignsContainer } from "../styles"
import { FlexColumn } from "../../styles/Container.styled"
import { CardFrontView } from "../../Card";
import { StyledCardDisplay } from "../../Card/styles";
// import { CardViewContext } from "../../../pages/SingleCardPage";
import { CardViewContext } from "../../../Contexts/SingleCardPageContext";
import { AppContext } from "../../../App";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import MessageDisplay from "../../MessageDisplay";
import LoaderSpinner from "../../Loader";
import StyledLink from "../../styles/Link.styled";

export default function SimilarDesigns() {
  const { category, currentCardId } = useContext(CardViewContext);
  const { serverURL } = useContext(AppContext);
  const [similarCards, setSimilarCards] = useState([]);
  const [ message, setMessage ] = useState(null);

  useEffect(() => {
    async function fetchSimilarCards() {
      if (category !== null) {
        try {
          let url
          url = `${serverURL}/card-design/category/${category}`;
          const response = await axios.get(url)
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
  }, [category, currentCardId, serverURL])

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
                  <StyledLink to={`/explore/card/${id}`} key={index}>
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

// const cardInfo = [
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
//   }
// ]