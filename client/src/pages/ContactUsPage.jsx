import Nav from "../components/Nav";
import ContactUsHeader from "../components/ContactUsPage/ContactUs.header";
import ContactUsAnytime from "../components/ContactUsPage/ContactUs.anytime";
import ContactUsMessage from "../components/ContactUsPage/ContactUs.message";
import ContactUsCustomerService from "../components/ContactUsPage/ContactUs.customer";
import Footer from "../components/Footer";
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../App";

export default function ContactUsPage() {
  const context = useContext(Context);
  const location = useLocation();

  useEffect(() => {
    context.setCurrentPage(location.pathname)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <>
    <Nav />
    <ContactUsHeader />
    <ContactUsAnytime />
    <ContactUsMessage />
    <ContactUsCustomerService />
    <Footer />
    </>
  )
}