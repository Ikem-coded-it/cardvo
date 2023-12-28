import { createContext, useEffect, useState, useReducer } from "react";
import { useParams } from "react-router-dom"
import PropTypes from "prop-types";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import MessageDisplay from "../components/MessageDisplay";

export const CardViewContext = createContext();

const CardViewReducer = (state, action) => {
  switch (action.type) {
    case "changed view to front":
      return "front"
    default:
      return "back";
  }
}

export default function CardViewContextProvider({ children }) {
  const { id } = useParams();
  const [cardDetails, setCardDetails] = useState(null);
  const [category, setCategory] = useState(null);
  const [view, dispatch] = useReducer(CardViewReducer, "front");
  const [ message, setMessage ] = useState(null);
  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    async function fetchCard() {
      try {
        const response = await axiosPrivate.get(`/card-design/${id}`)
        if (response.data.success === true) {
          setCategory(response.data.data.category)
          setCardDetails(response.data.data);
        }else {
          setMessage(response.data.message)
        }
      } catch (error) {
        setMessage(error.message)
      }
    }

    fetchCard()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const cardViewContextValues = {
    currentCardId: id,
    view,
    viewChangeDispatch: dispatch,
    cardDetails,
    category
  }
  return (
    <CardViewContext.Provider value={cardViewContextValues}>
      {message && <MessageDisplay message={message} closeMessage={() => setMessage(null)}/>}
      { category && children }
    </CardViewContext.Provider>
  )
}

CardViewContextProvider.propTypes = {
  children: PropTypes.element
}