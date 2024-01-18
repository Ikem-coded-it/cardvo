import { Section } from "../styles/Section.styled"
import { Outlet, useLocation } from "react-router-dom";
import { DashboardContainer, DynamicPageContainer, NoCardsAlternativeContainer } from "./styles";
import { FlexColumn } from "../styles/Container.styled";
import StyledLink from "../styles/Link.styled";
import { BtnPrimary } from "../styles/Button.styled";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <DashboardContainer $height="calc(100vh - 80px)" $gap="0">
      <Section
      $width="20%"
      $height="100%">
        <Sidebar />
      </Section>

      <Section
      $width="80%"
      $height="100%"
      $bg={({theme}) => theme.colors.sec.three}>
        <DynamicPageContainer $padding="20px" $height="530px" $width="1000px">
          <Outlet />
        </DynamicPageContainer>
      </Section>
    </DashboardContainer>
  )
}

export function NoCardsAlternative() {
  const [word, setWord] = useState("liked");
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes("saved-cards"))
      setWord("saved")
    else
      setWord("liked")
  }, [pathname])

  return (
    <NoCardsAlternativeContainer $height="100%" $width="100%">
      <FlexColumn $height="100%" $width="100%">
        <p>
          You currently have no {word} cards.
        </p>
        <StyledLink to="/explore">
          <BtnPrimary>
            View card designs
          </BtnPrimary>
        </StyledLink>
      </FlexColumn>
    </NoCardsAlternativeContainer>
  )
}

export default Layout