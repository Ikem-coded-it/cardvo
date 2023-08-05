import { Section } from "../styles/Section.styled";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AboutParagraphSection = styled(Section)`
  & h1 {
    font-size: 40px;
  }

  & p {
    font-size: 20px;
    line-height: 1.8;
  }

  & a {
    color: black;
  }
`

export default function AboutParagraph() {
  return (
    <AboutParagraphSection gap="30px" padding="50px 180px 100px 180px">
      <h1>About us</h1>

      <p>
        Cardvo founded in 2022, by Zuri was developed by team 128. Our purpose is to serve you
        an array of fancy credit card designs that you can view, edit, download and share with friends
        on social media platforms. There is an opportunity for you to create your own design based on 
        your preference for there are no limits to your creativity on Cardvo.
        <br/>
        Cardvo has about Fifty Tousand {"(50,000)"} active users around the world, with over Two Hundred and
        Twenty {"(220)"} card designs available in about {"(74)"} countries. If you need to know
        more or need assistance, you can send us a mail via <Link to="/contact">the contact us page.</Link> Little 
        things matter to your happiness; unleash your creativity with cardvo. Our authenticated
        users have full access to the website, they are able to download credit card code sample, see usage 
        example, interact with the documentation, comment under a design, react and share on social media,
        save designs and come back to download. Though, you cannot have this experience if you do not have
        an account with Cardvo. <Link to="/signin">Join us now.</Link>
      </p>
    </AboutParagraphSection>
  )
}