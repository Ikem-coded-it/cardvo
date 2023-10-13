import Nav from "../components/Nav";
import ViewOptions from "../components/SingleCardPage/SingleCard.options";
import OtherSimilarComments from "../components/SingleCardPage/OtherSimilarComments";
import Footer from "../components/Footer";
import { useEffect, useContext, createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../App";
import { useParams } from "react-router-dom";
import axios from "axios";

export const CardViewContext = createContext();

export default function SingleCardPage() {
  const { id } = useParams();
  const context = useContext(AppContext);
  const location = useLocation();
  const [cardDetails, setCardDetails] = useState(null)
  const [view, setView] = useState("front")

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
          setCardDetails(response.data.data);
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchCard()
  }, [id, context.serverURL])

  const cardViewContextValues = {
    view,
    setView,
    cardDetails
  }
  
  return(
    <>
    <Nav />
    <CardViewContext.Provider value={cardViewContextValues}>
    <ViewOptions />
    <OtherSimilarComments />
    </CardViewContext.Provider>
    <Footer />
    </>
  )
}