import { LoggedOutNav, LoggedInNav } from "../components/Nav";
import Header from "../components/LandingPage/Header";
import GettingStarted from "../components/LandingPage/GettingStarted";
import WhyCardvo from "../components/LandingPage/WhyCardvo";
import Join from "../components/LandingPage/Join";
import EasyToUse from "../components/LandingPage/EasyToUse";
import Footer from "../components/Footer";
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../App";

export default function LandingPage() {
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
    <Header />
    <GettingStarted />
    <WhyCardvo />
    <Join />
    <EasyToUse />
    <Footer />
    </>
  )
}