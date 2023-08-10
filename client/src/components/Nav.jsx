import { 
  NavContainer, 
  LogoContainer, 
  MenuBars,
  CloseMenu
} from "./styles/Nav.styled";
import { FlexRow } from "./styles/Container.styled"
import { StyledNav } from "./styles/Nav.styled";
import { BtnPrimary, BtnSecondary } from "./styles/Button.styled";
import StyledLink from "./styles/Link.styled";
import { useRef, useEffect, useContext } from "react";
import { Context } from "../App";
import styled from "styled-components";

const BtnContainer = styled(FlexRow)`
  @media(max-width: ${({theme}) => theme.tablet}) {
    gap: 10px;
    & button {
      height: 40px;
      font-size: 16px;
      width: 80px;
    }
  }

  @media(max-width: ${({theme}) => theme.mobile}) {
    gap: 20px;
    & button {
      height: 50px;
      font-size: 18px;
      width: 120px;
    }
  }
`

export default function Nav() {
  const context = useContext(Context);
  const mobileNav = useRef()
  const signupBtn = useRef()
  const signinBtn = useRef()
  const navContainer = useRef()

  useEffect(() => {
    if (context.currentPage) {
      if(context.currentPage === '/auth/signup') {
        signupBtn.current.style.display = 'none';
      } else {
        signupBtn.current.style.display = 'block';
      }

      if(context.currentPage === '/auth/signin') {
        signinBtn.current.style.display = 'none';
      } else {
        signinBtn.current.style.display = 'block';
      }

      if (context.currentPage.includes('/edit')) {
        navContainer.current.style.position = "static";
        signupBtn.current.style.display = 'none';
        signinBtn.current.style.display = 'none';
      } else {
        navContainer.current.style.position = "fixed";
        signupBtn.current.style.display = 'block';
        signinBtn.current.style.display = 'block';
      }
    }
  }, [context.currentPage])

  const handleOpenMenu = () => {
    mobileNav.current.classList.add('open');
  }

  const handleCloseMenu = () => {
    mobileNav.current.classList.remove('open');
  }

  return (
    <NavContainer
    ref={navContainer}
    width="100%"
    height="70px"
    bg="#ecf3f1">
      <LogoContainer>
        <i className="fa-solid fa-c"></i>
        <div>Card</div>
        <span>vo</span>
      </LogoContainer>

      <StyledNav ref={mobileNav}>
        <CloseMenu 
        className="fa-solid fa-x" 
        onClick={handleCloseMenu}>
        </CloseMenu>

        <ul>
          <li>
            <StyledLink to="/explore">Explore</StyledLink>
          </li>
          <li>
            <StyledLink to="/about">About us</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact">Contact us</StyledLink>
          </li>
        </ul>

        <BtnContainer
        gap="20px"
        width="fit-content"
        >
          <StyledLink to="/auth/signin" ref={signinBtn}>
            <BtnPrimary height="55px" width="130px">Sign in</BtnPrimary>
          </StyledLink>
          <StyledLink to="/auth/signup" ref={signupBtn}>
            <BtnSecondary height="55px" width="130px">Sign up</BtnSecondary>
          </StyledLink>
        </BtnContainer>

      </StyledNav>

      <MenuBars className="fa-solid fa-bars" onClick={handleOpenMenu}></MenuBars>

    </NavContainer>
  )
}