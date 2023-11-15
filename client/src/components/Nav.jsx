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
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import axios from "axios";
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

export function LoggedOutNav() {
  const context = useContext(AppContext);
  const mobileNav = useRef()
  const signupBtn = useRef()
  const signinBtn = useRef()
  const navContainer = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    if (context.currentPage) {
      if (context.currentPage.includes('/edit')) {
        navContainer.current.style.position = "static";
      } else {
        navContainer.current.style.position = "fixed";
      }
    }
  }, [context.currentPage, context.user])

  const handleOpenMenu = () => {
    mobileNav.current.classList.add('open');
  }

  const handleCloseMenu = () => {
    mobileNav.current.classList.remove('open');
  }

  const checkAuthAndNavigate = () => {
    const { user } = context;
    if (user) return navigate("/explore")
    return navigate("/auth/signin")
  }

  return (
    <NavContainer
    ref={navContainer}
    $width="100%"
    $height="70px"
    $bg="#ecf3f1">
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
           <li onClick={window.scrollTo(0, 0)}>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li onClick={window.scrollTo(0, 0)}>
            <StyledLink onClick={checkAuthAndNavigate}>Explore</StyledLink>
          </li>
          <li onClick={window.scrollTo(0, 0)}>
            <StyledLink to="/about">About us</StyledLink>
          </li>
          <li onClick={window.scrollTo(0, 0)}>
            <StyledLink to="/contact">Contact us</StyledLink>
          </li>
        </ul>

        <BtnContainer
        $gap="20px"
        $width="fit-content"
        >
          {
            !context.user && (
              <StyledLink to="/auth/signin" ref={signinBtn}>
                <BtnPrimary onClick={window.scrollTo(0, 0)} $height="55px" $width="130px">Sign in</BtnPrimary>
              </StyledLink>
            )
          }
          <StyledLink to="/auth/signup" ref={signupBtn}>
            <BtnSecondary onClick={window.scrollTo(0, 0)} $height="55px" $width="130px">Sign up</BtnSecondary>
          </StyledLink>
        </BtnContainer>

      </StyledNav>

     {
      window.innerWidth <= 900 &&
      <MenuBars className="fa-solid fa-bars" onClick={handleOpenMenu}></MenuBars>
    }

    </NavContainer>
  )
}

export function LoggedInNav() {
  const context = useContext(AppContext);
  const mobileNav = useRef()
  const navContainer = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    if (context.currentPage) {
      if (context.currentPage.includes('/edit')) {
        navContainer.current.style.position = "static";
      } else {
        navContainer.current.style.position = "fixed";
      }
    }
  }, [context.currentPage, context.user])

  const handleOpenMenu = () => {
    mobileNav.current.classList.add('open');
  }

  const handleCloseMenu = () => {
    mobileNav.current.classList.remove('open');
  }

  const logout = async() => {
    const loggedOut = await axios.post(`${context.serverURL}/auth/logout`);
    if (loggedOut.data.success === true) {
      localStorage.removeItem('cardvo-user')
      context.setUser(null);
      return navigate("/")
    }
  }

  return (
    <NavContainer
    ref={navContainer}
    $width="100%"
    $height="70px"
    $bg="#ecf3f1">
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
           <li onClick={window.scrollTo(0, 0)}>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li onClick={window.scrollTo(0, 0)}>
            <StyledLink to="/explore">Explore</StyledLink>
          </li>
          <li onClick={window.scrollTo(0, 0)}>
            <StyledLink to="/about">About us</StyledLink>
          </li>
          <li onClick={window.scrollTo(0, 0)}>
            <StyledLink to="/contact">Contact us</StyledLink>
          </li>
        </ul>
      </StyledNav>

      <BtnContainer>
        <BtnPrimary
        $height="55px"
        $width="130px"
        onClick={logout}>
          Logout
        </BtnPrimary>
      </BtnContainer>

      {
        window.innerWidth <= 900 &&
        <MenuBars className="fa-solid fa-bars" onClick={handleOpenMenu}></MenuBars>
      }

    </NavContainer>
  )
}