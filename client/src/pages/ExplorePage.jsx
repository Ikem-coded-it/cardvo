import Nav from "../components/Nav";
import ExploreHeader from "../components/ExplorePage/Explore.header";
import ExploreHundreds from "../components/ExplorePage/ExploreHundreds";
import ExploreCards from "../components/ExplorePage/ExploreCards";
import Footer from "../components/Footer";
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../App";


export default function ExplorePage() {
  const context = useContext(Context);
  const location = useLocation();

  useEffect(() => {
    context.setCurrentPage(location.pathname)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
    <Nav />
    <ExploreHeader />
    <ExploreHundreds />
    <ExploreCards />
    <Footer />
    </>
  )
}