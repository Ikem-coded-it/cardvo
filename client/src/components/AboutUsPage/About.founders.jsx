import { Section } from "../styles/Section.styled";
import styled from "styled-components";
import { FlexRow, FlexColumn } from "../styles/Container.styled";
import { Image } from "../styles/Image.styled";
import imageOne from "/images/founders/ceo1.png";
import imageTwo from "/images/founders/ceo2.png";
import imageThree from "/images/founders/ceo3.png";
import PropTypes from "prop-types";

const data = [
  {
    name: "J.O. Ademola",
    position: "Founder",
    src: imageOne
  },
  {
    name: "A.J. Styles",
    position: "Co Founder",
    src: imageTwo
  },
  {
    name: "B.O. Kalejaye",
    position: "Co Founder",
    src: imageThree
  },
]

const FoundersSection = styled(Section)`
  margin-top: 40px; 
  & h1 {
    text-align: left;
    width: 100%;
  }

   @media(max-width: ${({ theme }) => theme.tablet}) {
    padding: 0 20px 50px 20px;
    gap: 20px;
    & > div {
      flex-direction: column;
      justify-content: flex-start;
      height: 1200px;
      width: 100%;
      gap: 25px;
    }

    & img {
      width: 100%;
    }
  }
`

export default function AboutFounders() {
  return (
    <FoundersSection $gap="20px" $padding="0 90px 70px 90px">
      <h1>Meet the founders</h1>

      <FlexRow $width="100%">
        {
          data.map(function(datum, index) {
            return <Card 
              key={index}
              name={datum.name}
              position={datum.position}
              src={datum.src}
            />
          })
        }
      </FlexRow>
    </FoundersSection>
  )
}

function Card({ src, name, position }) {
  return (
    <FlexColumn $flex="1" $height="fit-content">
      <Image
      alt="fouder headshot"
      src={src}
      $width="100%"
      $height="330px"
      $bdradius="6px"
      />

      <FlexColumn $align="flex-start" $width="100%">
        <strong>{name}</strong>
        <p>{position}</p>
      </FlexColumn>
    </FlexColumn>
  )
}

Card.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string
}