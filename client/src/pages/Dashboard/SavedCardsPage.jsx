import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../App";

const SavedCardsPage = () => {
  const context = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    context.setCurrentPage(location.pathname)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <h2>SavedCards Page coming soon</h2>
  )
}

export default SavedCardsPage