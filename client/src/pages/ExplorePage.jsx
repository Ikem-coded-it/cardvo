import { LoggedOutNav, LoggedInNav } from "../components/Nav";
import ExploreHeader from "../components/ExplorePage/Explore.header";
import ExploreHundreds from "../components/ExplorePage/ExploreHundreds";
import ExploreCards from "../components/ExplorePage/ExploreCards";
import Footer from "../components/Footer";
import { useEffect, useContext, createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

export const ExploreCardsContext = createContext();

export default function ExplorePage() {
  const context = useContext(AppContext);
  const [displayMessage, setDisplayMessage] = useState(null);
  const [cardsInfo, setCardsInfo] = useState(null);
  const [fetching, setFetching] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    if (!context.user) return navigate("/auth/signin")
    context.setCurrentPage(location.pathname)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    async function fetchCardDesigns() {
      setFetching(true)
      try {
        const response = await axiosPrivate.get("/card-design");
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
      {
        setCardsInfo && <ExploreHeader />
      }
      <ExploreHundreds />
      {
        cardsInfo && <ExploreCards />
      }
    </ExploreCardsContext.Provider>
    <Footer />
    </>
  )
}