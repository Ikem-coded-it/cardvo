import { Section } from "../styles/Section.styled";
import { FlexColumn, FlexRow, Container } from "../styles/Container.styled";
import styled from "styled-components";

const RandomIconsContainer = styled(FlexColumn)`
  & i {
    font-size: 60px;
    color: ${({ theme }) => theme.colors.sec.three};
  }

  @media(max-width: ${({theme}) => theme.tablet}) {
    & i {
      font-size: 50px;
    }

    & div {
      gap: 50px;
    }
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    & i {
      font-size: 40px;
    }

    & div {
      gap: 30px;
    }
  }
`

const Heading = styled.h2`
  text-align: center;
  font-size: 30px;
  padding: 0 30px;
`

export const SliderWrapper = styled(FlexRow)`
  max-width: 100%;
  min-width: 100%;
  height: 300px;
  margin-bottom: 20px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media(max-width: ${({ theme }) => theme.mobile}), (max-width: ${({ theme }) => theme.tablet}) {
    display: block;
    overflow-x: scroll;
  }
`

const GettingStartedContainer = styled(FlexRow)`
  width: fit-content;
  height: 100%;
  padding: 0 20px;
`

const GettingStartedCard = styled(FlexColumn)`
  box-shadow: 6px 6px 10px ${({ theme }) => theme.colors.sec.five};
  border-radius: 10px;
  padding: 30px;
  box-sixing: border-box;
  justify-content: flex-start;

   & h2 {
    text-align: left;
    width: 100%;
    height-fit-content;
    margin: 0;
  }

  & p {
    font-size: 15px;
    margin: 0;
  }

`

const CompassIconContainer = styled(Container)`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.sec.six};

  & i {
    font-size: 40px;
    color: ${({ theme }) => theme.colors.sec.one};
  }
`

export default function GettingStarted() {
  return (
    <Section 
    $justify="space-around"
    $height="650px">
      <RandomIconsContainer>
        <h3>Trusted by 20+ financial services</h3>
        <FlexRow $gap="100px">
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-solid fa-money-check-dollar"></i>
          <i className="fa-solid fa-sack-dollar"></i>
          <i className="fa-solid fa-money-bill"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
        </FlexRow>
      </RandomIconsContainer>

      <FlexColumn $width="100%">
        <Heading>Getting started with Cardvo product</Heading>
        <SliderWrapper>
          <GettingStartedContainer $gap="50px">

            <GettingStartedCard $height="250px" $width="320px">
              <FlexRow $justify="flex-start" $height="50%" $width="100%">
                <CompassIconContainer $height="70px" $width="70px">
                  <i className="fa-solid fa-compass"></i>
                </CompassIconContainer>
              </FlexRow>
              <FlexColumn $justify="space-between" $gap="0" $height="50%">
                <h2>Explore</h2>
                <p>
                  Sort through designs from creatives and wield the choice
                  to use as templates.
                </p>
              </FlexColumn>
            </GettingStartedCard>

            <GettingStartedCard $height="250px" $width="320px">
              <FlexRow $justify="flex-start" $height="50%" $width="100%">
                <CompassIconContainer $height="70px" $width="70px">
                  <i className="fa-solid fa-compass"></i>
                </CompassIconContainer>
              </FlexRow>
              <FlexColumn $justify="space-between" $gap="0" $height="50%">
                <h2>Create</h2>
                <p>
                  Freedom to play and customize from our growing collection
                  of card designs.
                </p>
              </FlexColumn>
            </GettingStartedCard>

            <GettingStartedCard $height="250px" $width="320px">
              <FlexRow $justify="flex-start" $height="50%" $width="100%">
                <CompassIconContainer $height="70px" $width="70px">
                  <i className="fa-solid fa-compass"></i>
                </CompassIconContainer>
              </FlexRow>
              <FlexColumn $justify="space-between" $gap="0" $height="50%">
                <h2>Use</h2>
                <p>
                  Save, download, share and wield the power to make this a reality.
                </p>
              </FlexColumn>
            </GettingStartedCard>

          </GettingStartedContainer>
        </SliderWrapper>
      </FlexColumn>
    </Section>
  )
}