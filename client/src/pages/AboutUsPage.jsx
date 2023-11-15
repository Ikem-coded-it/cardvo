import { LoggedOutNav, LoggedInNav } from "../components/Nav";
import AboutHeader from "../components/AboutUsPage/About.header";
import AboutParagraph from "../components/AboutUsPage/About.paragraph";
import Facts from "../components/AboutUsPage/About.facts";
import AboutFounders from "../components/AboutUsPage/About.founders";
import AboutSubscribe from "../components/AboutUsPage/About.subscribe";
import Footer from "../components/Footer";
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../App";

export default function AboutUsPage() {
  const context = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    context.setCurrentPage(location.pathname)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <>
    {
      context.user ? (<LoggedInNav/>) : (<LoggedOutNav/>)
    }
    <AboutHeader />
    <AboutParagraph />
    <Facts />
    <AboutFounders />
    <AboutSubscribe />
    <Footer />
    </>
  )
}