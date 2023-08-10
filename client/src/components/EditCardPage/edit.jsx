import { useReducer } from "react";
import { Section } from "../styles/Section.styled";
import CardPreview from "./CardPreview";
import ControlPanel from "./ControlPanel";
import styled from "styled-components";
import CardReducer from "./CardReducer";

const EditSection = styled(Section)`
  flex-direction: row;
  height: 600px;
`

export default function Edit() {
  const initialState = {
    name: "YOUR NAME HERE",
    cardNumberOne: "0000",
    cardNumberTwo: "0000",
    cardNumberThree: "0000",
    cardNumberFour: "0000",
    expiration: "08/27",
    cvv: "344",
    image: "https://images.unsplash.com/photo-1604998103924-89e012e5265a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuc2NhcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    color: "black"
  }

  const [designState, designDispatch] = useReducer(CardReducer, initialState)

  return (
    <EditSection 
    padding="0 30px" 
    align="flex-start">
      <ControlPanel designDispatch={designDispatch} />
      <CardPreview designState={designState} />
    </EditSection>
  )
}