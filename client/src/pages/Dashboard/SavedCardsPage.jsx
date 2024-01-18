import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../App";
import SavedCards from "../../components/Dashboard/SavedCards";

const SavedCardsPage = () => {
  const context = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    context.setCurrentPage(location.pathname)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <SavedCards />
  )
}

export default SavedCardsPage