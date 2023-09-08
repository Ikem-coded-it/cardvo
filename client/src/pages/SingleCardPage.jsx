import Nav from "../components/Nav";
import ViewOptions from "../components/SingleCardPage/SingleCard.options";
import OtherSimilarComments from "../components/SingleCardPage/OtherSimilarComments";
import Footer from "../components/Footer";
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../App";

export default function SingleCardPage() {
  const context = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    context.setCurrentPage(location.pathname)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return(
    <>
    <Nav />
    <ViewOptions />
    <OtherSimilarComments />
    <Footer />
    </>
  )
}