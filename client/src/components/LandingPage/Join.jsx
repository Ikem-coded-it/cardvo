import { Section } from "../styles/Section.styled";
import { FlexColumn, FlexRow } from "../styles/Container.styled";
import { Image } from "../styles/Image.styled";
import styled from "styled-components";
import PropTypes from "prop-types";

const imageOne = "https://media.istockphoto.com/id/1406022557/photo/a-confident-and-happy-young-man.webp?b=1&s=170667a&w=0&k=20&c=cHDPpjM3VSaKrWew8BSWpVT21UfGvLbLnAPeCiAogZ4=";
const imageTwo = "https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBoZWFkc2hvdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
const imageThree = "https://media.istockphoto.com/id/1409086709/photo/head-shot-portrait-student-guy-in-glasses-posing-in-library.webp?b=1&s=170667a&w=0&k=20&c=t8f4bS4VX7PtEWEVqIlyY0wxOHjZcG5ejTsnnXsjTRA=";

const data = [
  {
    testimony: "I'm glad i found Cardvo, my firend recommended this to me and i can't believe how easy and fast i was able to inscribe my nickname on my card!",
    name: "Calatrava Manderi",
    bank: "City Bank",
    src: imageOne
  },
  {
    testimony: "I have always loved the idea of expressing my creativity, Cardvo gave me the the chance to celebrate my doodle on my card! It is a big deal for me because it sells my brand effortlessly",
    name: "Amaka Adenuga",
    bank: "GT Bank",
    src: imageTwo
  },
  {
    testimony: "Before Cardvo, i have always needed to be extra careful so i don't mistankely take my roommates card. I'm glad i dont have to do that anymore.",
    name: "Peter Lumberick",
    bank: "City Bank",
    src: imageThree
  }
]

const TextimonialSection = styled(Section)`
  @media(max-width: ${({ theme }) => theme.tablet}) {
    min-height: 900px;
    max-height: fit-content;
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    min-height: 1100px;
  }
`

const TestimonialContainer = styled(FlexRow)`
  @media(max-width: ${({ theme }) => theme.tablet}) {
    gap: 30px;
    flex-direction: column;
  }
`

const TestimonialCard = styled(FlexColumn)`
  border: 1px solid ${({ theme }) => theme.colors.sec.four};
  border-radius: 10px;

  & i {
    text-align: left;
    font-size: 60px;
    color: ${({ theme }) => theme.colors.sec.six};
  }
`

export default function Join() {
  return (
    <TextimonialSection 
    height="480px" 
    padding="0 90px" 
    justify="center"
    gap="40px">
      <h2>Join over 50,000 people worldwide</h2>
      <TestimonialContainer gap="50px">
        {
          data.map(function(datum, index) {
            return <Card 
              key={index}
              testimony={datum.testimony}
              name={datum.name}
              bank={datum.bank}
              src={datum.src}
            />
          })
        }
      </TestimonialContainer>
    </TextimonialSection>
  )
}

function Card({ testimony, src, name, bank }) {
  return (
    <TestimonialCard flex="1" height="300px" padding="20px">
      <FlexRow width="100%" justify="flex-start">
        <i className="fa-solid fa-quote-left"></i>
      </FlexRow>

      <p>{testimony}</p>

      <FlexRow width="100%" justify="flex-end">
        <FlexColumn height="100%" justify="center" gap="0" align="flex-end">
          <h4>{name}</h4>
          <p>{bank}</p>
        </FlexColumn>
        <Image
        height="70px"
        width="70px"
        src={src}
        alt="person headshot"
        bdradius="50%"
        />
      </FlexRow>
    </TestimonialCard>
  )
}

Card.propTypes = {
  testimony: PropTypes.string,
  src: PropTypes.string,
  name: PropTypes.string,
  bank: PropTypes.string,
}