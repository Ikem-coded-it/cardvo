import { useReducer } from "react";
import { Section } from "../styles/Section.styled";
import CardPreview from "./CardPreview";
import ControlPanel from "./ControlPanel";
import styled from "styled-components";
import CardReducer from "./CardReducer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MessageDisplay from "../MessageDisplay";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const EditSection = styled(Section)`
  flex-direction: row;
  height: 600px;

  @media(max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column-reverse;
    min-height: 900px;
    max-height: fit-content;
    padding: 20px 10px;
  }
`

export default function Edit() {
  const { id } = useParams();
  const [designState, designDispatch] = useReducer(CardReducer, null);
  const [message, setMessage] = useState(null)
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const fetchCardDesignAndDisplay = async() => {
      try {
        const url = `/card-design/${id}`;
        const response = await axiosPrivate.get(url)
        if (response.data.success === true) {
          const card = response.data.data;
          const fetchedDesign = {
            name: card.card_holder_name,
            cardNumberOne: card.card_number_one,
            cardNumberTwo: card.card_number_two,
            cardNumberThree: card.card_number_three,
            cardNumberFour: card.card_number_four,
            expiration: card.expiration,
            cvv: card.cvv,
            image: card.background_image,
            color: card.color,
            view: "front"
          }
          const action = {type: "changed-card-after-database-fetch", fetchedDesign};
          return designDispatch(action)
        }else {
          setMessage(response.data.message)
        }
      } catch (error) {
        setMessage(error.message)
      }
    }

    fetchCardDesignAndDisplay()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <EditSection 
    $padding="0 30px" 
    $align="flex-start">
      {
        message && <MessageDisplay message={message} closeMessage={() => setMessage(null)}/>
      }
      {
        designState && (
          <>
            <ControlPanel designDispatch={designDispatch} designState={designState} />
            <CardPreview designState={designState} designDispatch={designDispatch} />
          </>
        )
      }
    </EditSection>
  )
}