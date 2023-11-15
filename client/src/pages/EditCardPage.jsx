import { LoggedOutNav, LoggedInNav } from "../components/Nav";
import Edit from '../components/EditCardPage/edit';
import Footer from "../components/Footer";
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../App";

export default function EditCard () {
  const context = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    context.setCurrentPage(location.pathname)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <>
    {
      context.user ? (<LoggedInNav/>) : (<LoggedOutNav/>)
    }
    <Edit />
    <Footer />
    </>
  )
}