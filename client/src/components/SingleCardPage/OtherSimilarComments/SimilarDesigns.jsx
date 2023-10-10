import { SimilarDesignsContainer } from "../styles"
import { FlexColumn } from "../../styles/Container.styled"
import { CardFrontView } from "../../Card";
import { StyledCardDisplay } from "../../Card/styles";

export default function SimilarDesigns() {
  return(
    <SimilarDesignsContainer $justify="flex-start">
      <h3>View similar designs</h3>

      <FlexColumn>
        {
          cardInfo.slice(0, 4).map(({
            cardNumberOne,
            cardNumberTwo,
            cardNumberThree,
            cardNumberFour,
            expiration,
            color,
            image
          }, index) => {
            return(
              <StyledCardDisplay
              $m_width="160px"
              key={index}>
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
                cardNumberOne={cardNumberOne}
                cardNumberTwo={cardNumberTwo}
                cardNumberThree={cardNumberThree}
                cardNumberFour={cardNumberFour}
                expiration={expiration}
                color={color}
                image={image}
                />
              </StyledCardDisplay>
            )
          })
        }
      </FlexColumn>
    </SimilarDesignsContainer>
  )
}

const cardInfo = [
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
  }
]