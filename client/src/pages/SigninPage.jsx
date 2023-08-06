import Nav from "../components/Nav";
import { WholePageSection } from "../components/AuthPages/shared";
import { LeftSide } from "../components/AuthPages/shared";
import SigninRightSide from "../components/AuthPages/Signin.right";
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../App";
import Footer from "../components/Footer";

export default function SigninPage() {
  const context = useContext(Context);
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
      <SigninRightSide />
    </WholePageSection>
    <Footer />
    </>
  )
}