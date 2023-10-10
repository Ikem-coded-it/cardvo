import { Section } from "../styles/Section.styled";
import { FlexRow, FlexColumn } from "../styles/Container.styled";
import styled from "styled-components";
import PropTypes from "prop-types";

const data = [
  {
    up: "50K+",
    down: "Active users around the world"
  },
  {
    up: "220+",
    down: "Credit card designs"
  },
  {
    up: "74+",
    down: "Active countries"
  },
]

const FactsSection = styled(Section)`
  & h1 {
    width: 100%;
    text-align: left;
  }

  & div {
    color: white;
    border-radius: 6px;
  }

  & strong {
    font-size: 40px;
  }

  @media(max-width: ${({ theme }) => theme.tablet}) {
    & div {
      flex-direction: column;
      width: 100%;
      height: 900px;
      gap: 25px;
    }
  }
`

export default function Facts() {
  return (
    <FactsSection $gap="20px" $padding="0 90px 100px 90px">
      <h1>Facts</h1>

      <FlexRow $gap="10px" $width="100%" $height="300px">
        {
          data.map((datum, index) => {
            return <Card 
              key={index}
              up={datum.up}
              down={datum.down}
            />
          })
        }
      </FlexRow>
    </FactsSection>
  )
}

function Card({ up, down }) {
  return (
    <FlexColumn 
    $bg={({ theme }) => theme.colors.sec.eight} 
    $color="white"
    $flex="1"
    $height="100%">
      <strong>{up}</strong>
      <p>{down}</p>
    </FlexColumn>
  )
}

Card.propTypes = {
  up: PropTypes.string,
  down: PropTypes.string
}