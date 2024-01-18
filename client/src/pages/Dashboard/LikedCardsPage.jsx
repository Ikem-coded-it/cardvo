import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../App";
import LikedCards from "../../components/Dashboard/LikedCardsPage";

const LikedCardsPage = () => {
  const context = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    context.setCurrentPage(location.pathname)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <LikedCards/>
  )
}

export default LikedCardsPage