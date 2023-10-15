import Nav from "../components/Nav";
import ViewOptions from "../components/SingleCardPage/SingleCard.options";
import OtherSimilarComments from "../components/SingleCardPage/OtherSimilarComments";
import Footer from "../components/Footer";
import { useEffect, useContext, createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../App";
import { useParams } from "react-router-dom";
import MessageDisplay from "../components/MessageDisplay";
import axios from "axios";

export const CardViewContext = createContext();

export default function SingleCardPage() {
  const { id } = useParams();
  const context = useContext(AppContext);
  const location = useLocation();
  const [cardDetails, setCardDetails] = useState(null);
  const [category, setCategory] = useState(null);
  const [view, setView] = useState("front")
  const [ message, setMessage ] = useState(null);

  useEffect(() => {
    context.setCurrentPage(location.pathname)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    async function fetchCard() {
      try {
        const url = `${context.serverURL}/card-design/${id}`;
        const response = await axios.get(url)
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
  }, [id, context.serverURL])

  const cardViewContextValues = {
    currentCardId: id,
    view,
    setView,
    cardDetails,
    category
  }
  
  return(
    <>
    {message && <MessageDisplay message={message} closeMessage={() => setMessage(null)}/>}
    <Nav />
    {
      category && (
        <>
          <CardViewContext.Provider value={cardViewContextValues}>
          <ViewOptions />
          <OtherSimilarComments />
          </CardViewContext.Provider>
          <Footer />     
        </>
      )
    }
    </>
  )
}