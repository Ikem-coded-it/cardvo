import { Section } from "../styles/Section.styled";
import { FlexRow } from "../styles/Container.styled";
import { Image } from "../styles/Image.styled";
import twoWomenImage from "/images/frames/twowomen.png";
import { BtnSecondary } from "../styles/Button.styled";
import styled from "styled-components";
import MessageDisplay from "../MessageDisplay";
import { useState } from "react";

const SubscribeSection = styled(Section)`
  & ul {
    flex: 1;
  }

  & li {
    list-style: none;
    margin-bottom: 20px;
    display: flex;
    gap: 20px;
  }

  & input {
    width: 300px;
    height: 86%;
    border: 1px solid ${({ theme }) => theme.colors.prim.four};
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    & > div {
      flex-direction: column;
    }

    & ul {
      width: 100%;
      padding: 0;
    }

    & img {
      width: 100%;
    }

    & input {
      width: 220px;
    }

    & button {
      height: 100%;
    }
  }
`

export default function AboutSubscribe(){
  const [subscribed, setSubscribed] = useState(false);

  return (
    <SubscribeSection $gap="20px" $bg={({ theme }) => theme.colors.sec.two} id="financial-advice">
      {
        subscribed === true && <MessageDisplay message="Subscribed successfully" closeMessage={() => setSubscribed(false)}/>
      }
      <h1>Subscribe for financial advice</h1>

      <p>
        We help users make better financial choices towards receiving cash rewards and saving money.
      </p>

      <FlexRow $width="100%">
        <Image
        alt="two women talking"
        src={twoWomenImage}
        $flex="1"
        $width="50%"
        />

        <ul>
          <li>
            <i className="fa-solid fa-check"></i>
            Need a credit card with no annual fee ?
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            Need insight on cash rewards on purchases?
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            Need insight to know ranges of cash limits?
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            Need to know cash limits that fit your spending habits?
          </li>
          <li>
            <FlexRow $width="fit-content" $height="40px" $gap="0">
              <input type="text" placeholder="Enter email to access our advice" />
              <BtnSecondary
              $width="120px"
              $height="100%"
              $bdradius="0"
              onClick={() => setSubscribed(true)}>
                Subscribe
              </BtnSecondary>
            </FlexRow>
          </li>
        </ul>
      </FlexRow>
    </SubscribeSection>
  )
}