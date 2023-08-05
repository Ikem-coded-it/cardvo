import Nav from "../components/Nav";
import Header from "../components/LandingPage/Header";
import GettingStarted from "../components/LandingPage/GettingStarted";
import WhyCardvo from "../components/LandingPage/WhyCardvo";
import Join from "../components/LandingPage/Join";
import EasyToUse from "../components/LandingPage/EasyToUse";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
    <Nav/>
    <Header />
    <GettingStarted />
    <WhyCardvo />
    <Join />
    <EasyToUse />
    <Footer />
    </>
  )
}