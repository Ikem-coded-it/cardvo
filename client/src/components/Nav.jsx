import { 
  NavContainer, 
  LogoContainer, 
  MenuBars,
  CloseMenu
} from "./styles/Nav.styled";
import { FlexRow } from "./styles/Container.styled"
import { Link } from "react-router-dom";
import { StyledNav } from "./styles/Nav.styled";
import { BtnPrimary, BtnSecondary } from "./styles/Button.styled";
import { useRef } from "react";
import styled from "styled-components";

const StyledLink = styled(Link)`
  width: fit-content;
  text-decoration: none;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.font};
`

export default function Nav() {
  const mobileNav = useRef()

  const handleOpenMenu = () => {
    mobileNav.current.classList.add('open');
  }

  const handleCloseMenu = () => {
    mobileNav.current.classList.remove('open');
  }

  return (
    <NavContainer
    width="100%"
    height="70px"
    bg="#ecf3f1">
      <LogoContainer>
        <i className="fa-solid fa-c"></i>
        <h1>Card</h1>
        <span>vo</span>
      </LogoContainer>

      <StyledNav ref={mobileNav}>
        <CloseMenu 
        className="fa-solid fa-x" 
        onClick={handleCloseMenu}>
        </CloseMenu>

        <ul>
          <li>
            <StyledLink to="/">Explore</StyledLink>
          </li>
          <li>
            <StyledLink to="/about">About us</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact">Contact us</StyledLink>
          </li>
        </ul>

        <FlexRow
        gap="20px"
        width="fit-content"
        >
          <Link to="/auth/signin">
            <BtnPrimary height="55px" width="130px">Sign in</BtnPrimary>
          </Link>
          <Link to="/auth/signup">
            <BtnSecondary height="55px" width="130px">Sign up</BtnSecondary>
          </Link>
        </FlexRow>

      </StyledNav>

      <MenuBars className="fa-solid fa-bars" onClick={handleOpenMenu}></MenuBars>

    </NavContainer>
  )
}