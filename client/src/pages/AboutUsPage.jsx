import Nav from "../components/Nav";
import AboutHeader from "../components/AboutUsPage/About.header";
import AboutParagraph from "../components/AboutUsPage/About.paragraph";
import Facts from "../components/AboutUsPage/About.facts";
import AboutFounders from "../components/AboutUsPage/About.founders";
import AboutSubscribe from "../components/AboutUsPage/About.subscribe";
import Footer from "../components/Footer";

export default function AboutUsPage() {
  return (
    <>
    <Nav />
    <AboutHeader />
    <AboutParagraph />
    <Facts />
    <AboutFounders />
    <AboutSubscribe />
    <Footer />
    </>
  )
}