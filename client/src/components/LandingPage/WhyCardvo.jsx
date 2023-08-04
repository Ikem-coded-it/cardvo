import { Section } from "../styles/Section.styled";
import { BtnPrimary } from "../styles/Button.styled";
// import { Image } from "../styles/Image.styled";
import { FlexRow, FlexColumn, Container } from "../styles/Container.styled";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import imageOne from "../../../public/images/backgrounds/header2.png";
import imageTwo from "../../../public/images/backgrounds/header1.png";
import imageThree from "../../../public/images/frames/subscribefor.png";

const data = [
  {
    heading: "Build From Template",
    description: "Sort through designs from creatives and wield the choice to use as template",
    src: imageOne
  },
  {
    heading: "Unluck Your Creativity",
    description: "From colours, to images, to text and fonts, wield the power to create any design you want, within confined templates",
    src: imageTwo
  },
  {
    heading: "Curated Financial Advice",
    description: "We show you ways to save money and get cash rewards",
    src: imageThree
  }
];

const WhyCarvoSection = styled(Section)`
  & h1 {
    font-size: 50px;
  }

  @media(max-width: ${({theme}) => theme.tablet}) {
    padding: 50px 20px;
    & h1 {
      font-size: 40px;
    }
  }

  @media(max-width: ${({theme}) => theme.mobile}) {
    & h1 {
      font-size: 30px;
    }
  }
`

const WhyCard = styled(FlexRow)`
  & div {
    gap: 25px;
  }

  & h2 {
    font-size: 30px;
  }

  & p {
    font-size: 18px;
  }

  @media(max-width: ${({theme}) => theme.tablet}) {
    height: 600px;
    gap: 20px;

    & div {
      gap: 15px;
    }

    & h2 {
      font-size: 25px;
    }
  }
`

const Background = styled(Container)`
  background-color: ${({ theme }) => theme.colors.sec.five};
  background-image: url(${({ bg }) => bg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media(max-width: ${({theme}) => theme.tablet}) {
    height: 280px;
    width: 100%;
  }
`

export default function WhyCardvo() {
  return (
    <WhyCarvoSection
    gap="50px"
    padding="50px 90px"
    justify="center"
    bg={({theme}) => theme.colors.sec.one}>
      <h1>Why Cardvo product?</h1>
      {
        data.map(function (datum, index) {
          return <Card 
            key={index}
            heading={datum.heading}
            description={datum.description}
            src={datum.src}
            data={index}
          />
      })
      }
    </WhyCarvoSection>
  )
}

function Card({ heading, description, src, data }) {
  const card = useRef()
  const btn = useRef()

  useEffect(() => {
    const width = window.innerWidth;
    if (width >= 900) {
      card.current.style.flexDirection = data === 1 ? "row-reverse" : "row";
    } else {
      card.current.style.flexDirection = "column";
    }

    if(data === 2) {
      btn.current.innerText = "Subscribe to mailing list";
      btn.current.style.width = "260px";
    } else {
      btn.current.innerText = "Explore";
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <WhyCard 
    gap="100px" 
    height="300px" 
    width="100%" 
    ref={card}
    >
      <FlexColumn height="100%" flex="1" align="flex-start">
        <h2>{heading}</h2>
        <p>{description}</p>
        <Link to="/cards">
          <BtnPrimary 
          width="130px" 
          height="60px" 
          ref={btn}
          color={({ theme }) => theme.colors.sec.eight}></BtnPrimary>
        </Link>
      </FlexColumn>
      <Background
      height="100%"
      flex="1 1 auto"
      bg={src}
      ></Background>
    </WhyCard>
  )
}

Card.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  data: PropTypes.number
}