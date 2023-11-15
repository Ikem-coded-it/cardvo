import { LoggedOutNav, LoggedInNav } from "../components/Nav";
import ExploreHeader from "../components/ExplorePage/Explore.header";
import ExploreHundreds from "../components/ExplorePage/ExploreHundreds";
import ExploreCards from "../components/ExplorePage/ExploreCards";
import Footer from "../components/Footer";
import { useEffect, useContext, createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../App";
import axios from "axios";

export const ExploreCardsContext = createContext();

export default function ExplorePage() {
  const context = useContext(AppContext);
  const [displayMessage, setDisplayMessage] = useState(null);
  const [cardsInfo, setCardsInfo] = useState(null);
  const [fetching, setFetching] = useState(false);
  const location = useLocation();

  useEffect(() => {
    context.setCurrentPage(location.pathname)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    async function fetchCardDesigns() {
      setFetching(true)
      const url = `${context.serverURL}/card-design`;
      try {
        const response = await axios.get(url);
        if (response.data.success === false) {
          setDisplayMessage(response.data.message)
        }

        setCardsInfo(response.data.data);
        setFetching(false);
      } catch (error) {
        setDisplayMessage(error.message);
        setFetching(false)
      }
    }

    fetchCardDesigns()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const exploreCardsValues = {
    cardsInfo,
    setCardsInfo,
    fetching,
    setFetching,
    displayMessage,
    setDisplayMessage
  }

  return (
    <>
    {
      context.user ? (<LoggedInNav/>) : (<LoggedOutNav/>)
    }
    <ExploreCardsContext.Provider value={exploreCardsValues}>
      <ExploreHeader />
      <ExploreHundreds />
      {
        cardsInfo && (<ExploreCards />)
      }
    </ExploreCardsContext.Provider>
    <Footer />
    </>
  )
}