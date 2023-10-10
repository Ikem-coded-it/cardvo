import StyledFooter from "./styles/Footer.styled";
import { StyledList } from "./styles/Footer.styled";
import { Link } from "react-router-dom";
import { FlexRow, FlexColumn } from "./styles/Container.styled";
import { Image } from "./styles/Image.styled";
import styled from "styled-components";
import youtube from "../../public/images/icons/youtube.png";
import twitter from "../../public/images/icons/twitter.png";
import facebook from "../../public/images/icons/facebook.png";
import linkedin from "../../public/images/icons/linkedin.png";
import { BtnSecondary } from "./styles/Button.styled";

const icons = [
  {name: "youtube icon", src: youtube},
  {name: "twitter icon", src: twitter},
  {name: "facebook icon", src: facebook},
  {name: "linkedin icon", src: linkedin},
]

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`

export default function Footer() {
  return (
    <StyledFooter>
      <FlexRow $width="100%" $align="flex-start" $justify="space-between">
        <StyledList>
          <li>
            <h3>Our Company</h3>
          </li>
          <li>
            <StyledLink to="/about">About us</StyledLink>
          </li>
          <li>
            <StyledLink to="/cards">Credit cards</StyledLink>
          </li>
          <li>
            <StyledLink to="/#testimonies">Testimonies</StyledLink>
          </li>
        </StyledList>

        <StyledList>
          <li>
            <h3>Services</h3>
          </li>
          <li>
            <StyledLink to="/cards">Explore designs</StyledLink>
          </li>
          <li>
            <StyledLink to="/about/#financial-advice">Financial advice</StyledLink>
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
            Documentation
          </li>
        </StyledList>
      </FlexRow>

      <FlexRow $width="100%" $align="flex-start" $justify="space-between">
        <FlexColumn $align="flex-start" $gap="30px">
          <h3>Visit us on social media</h3>
          <FlexRow $gap="50px">
            {
              icons.map((icon, index) => {
                return <Image
                  key={index}
                  src={icon.src}
                  $height="30px"
                  $width="auto"
                  alt={icon.name}
                />
              })
            }
          </FlexRow>
          <p>Copyright @ 2022 Yenspace. All rights reserved</p>
        </FlexColumn>

        <FlexColumn $align="flex-end">
          <h3>Subscribe to Mailing List</h3>
          <FlexRow $gap="0" $height="35px">
            <input type="text" placeholder="Save money with our financial advice" />
            <BtnSecondary $width="120px" $height="100%">Subscribe</BtnSecondary>
          </FlexRow>
        </FlexColumn>
      </FlexRow>
    </StyledFooter>
  )
}