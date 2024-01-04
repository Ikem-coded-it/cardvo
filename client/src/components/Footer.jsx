import StyledFooter from "./styles/Footer.styled";
import { StyledList } from "./styles/Footer.styled";
import { Link } from "react-router-dom";
import { FlexRow, FlexColumn } from "./styles/Container.styled";
import { Image } from "./styles/Image.styled";
import styled from "styled-components";
// import youtube from "/images/icons/youtube.png";
import twitter from "/images/icons/twitter.png";
// import facebook from "/images/icons/facebook.png";
import linkedin from "/images/icons/linkedin.png";
import { BtnSecondary } from "./styles/Button.styled";
import { AppContext } from "../App";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MessageDisplay from "./MessageDisplay";

const icons = [
  // {name: "youtube icon", src: youtube},
  {name: "twitter icon", src: twitter, path: "https://twitter.com/IkemO06934594"},
  // {name: "facebook icon", src: facebook},
  {name: "linkedin icon", src: linkedin, path: "https://www.linkedin.com/in/ikemefuna-onubogu-84914323a"},
]

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`

export default function Footer() {
  const {setClickedFooterLink, currentPage} = useContext(AppContext);
  const [subscribed, setSubscribed] = useState(false);
  const navigate = useNavigate();

  function goToTestimonies() {
    // if not on landin page, navigate to landing page then it
    //checks if a clicked footer link is set before scrolling to the section
    if (currentPage === "/") {
      const testimoniesSection = document.querySelector(".testimonies");
      testimoniesSection.scrollIntoView({behavior: "smooth"});
    } else {
      setClickedFooterLink("testimonies");
      navigate("/")
    }
  }
  return (
    <StyledFooter>
      {
        subscribed === true && <MessageDisplay message="Subscribed successfully" closeMessage={() => setSubscribed(false)}/>
      }

      <FlexRow $width="100%" $align="flex-start" $justify="space-between">
        <StyledList>
          <li>
            <h3>Our Company</h3>
          </li>
          <li>
            <StyledLink to="/about">About us</StyledLink>
          </li>
          <li>
            <StyledLink to="/explore">Credit cards</StyledLink>
          </li>
          <li onClick={goToTestimonies}>
            Testimonies
          </li>
        </StyledList>

        <StyledList>
          <li>
            <h3>Services</h3>
          </li>
          <li>
            <StyledLink to="/explore">Explore designs</StyledLink>
          </li>
          <li>
            <a href="#financial-advice">Financial advice</a>
          </li>
          <li>
            <StyledLink to="/">Mailing list</StyledLink>
          </li>
        </StyledList>

        <StyledList>
          <li>
            <h3>Support</h3>
          </li>
          <li>
            FAQ
          </li>
          <li>
            <StyledLink to="/contact">Contact us</StyledLink>
          </li>
        </StyledList>

        <StyledList>
          <li>
            <h3>Useful Resources</h3>
          </li>
          <li>
            <StyledLink to="https://docs.google.com/document/d/1GCstBg1apptAuBVQ82zGVSG9X5FzeGC7zPY7X-HBJSA/edit?usp=sharing">
              Documentation
            </StyledLink>
          </li>
        </StyledList>
      </FlexRow>

      <FlexRow $width="100%" $align="flex-start" $justify="space-between">
        <FlexColumn $align="flex-start" $gap="30px">
          <h3>Visit us on social media</h3>
          <FlexRow $gap="50px">
            {
              icons.map((icon, index) => {
                return (
                  <StyledLink key={index} to={icon.path} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={icon.src}
                      $height="40px"
                      width="40px"
                    />
                  </StyledLink>
                )
              })
            }
          </FlexRow>
          <p>Copyright @ 2022 Yenspace. All rights reserved</p>
        </FlexColumn>

        <FlexColumn $align="flex-end">
          <h3>Subscribe to Mailing List</h3>
          <FlexRow $gap="0" $height="35px">
            <input type="text" placeholder="Save money with our financial advice" />
            <BtnSecondary
            $width="120px"
            $height="100%"
            className="mailing-list"
            onClick={() => setSubscribed(true)}>
              Subscribe
            </BtnSecondary>
          </FlexRow>
        </FlexColumn>
      </FlexRow>
    </StyledFooter>
  )
}