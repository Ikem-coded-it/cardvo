import Nav from "../components/Nav";
import { WholePageSection } from "../components/AuthPages/shared";
import { LeftSide } from "../components/AuthPages/shared";
import SignupRightSide from "../components/AuthPages/Signup.right";
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../App";
import Footer from "../components/Footer";

export default function SignupPage() {
  const context = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    context.setCurrentPage(location.pathname)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
    <Nav />
    <WholePageSection padding="40px 40px">
      <LeftSide />
      <SignupRightSide />
    </WholePageSection>
    <Footer />
    </>
  )
}