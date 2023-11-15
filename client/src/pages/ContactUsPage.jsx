import { LoggedOutNav, LoggedInNav } from "../components/Nav";
import ContactUsHeader from "../components/ContactUsPage/ContactUs.header";
import ContactUsAnytime from "../components/ContactUsPage/ContactUs.anytime";
import ContactUsMessage from "../components/ContactUsPage/ContactUs.message";
import ContactUsCustomerService from "../components/ContactUsPage/ContactUs.customer";
import Footer from "../components/Footer";
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../App";

export default function ContactUsPage() {
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
    <ContactUsHeader />
    <ContactUsAnytime />
    <ContactUsMessage />
    <ContactUsCustomerService />
    <Footer />
    </>
  )
}