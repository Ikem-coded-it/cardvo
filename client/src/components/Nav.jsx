import { 
  NavContainer, 
  LogoContainer,
} from "./styles/Nav.styled";
import { FlexRow } from "./styles/Container.styled"
import { StyledNav } from "./styles/Nav.styled";
import { BtnPrimary, BtnSecondary } from "./styles/Button.styled";
import StyledLink from "./styles/Link.styled";
import { CiMenuFries } from "react-icons/ci";
import { RiCloseCircleLine } from "react-icons/ri";
import { useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import useAuth from "../hooks/useAuth";
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
  const mobileNav = useRef();
  const signupBtn = useRef();
  const signinBtn = useRef();
  const navContainer = useRef();
  const navigate = useNavigate();

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
    const { user, setNextPage } = context;
    if (user) return navigate("/explore")
    setNextPage("/explore")
    return navigate("/auth/signin")
  }

  const goToSigninPage = () => {
    window.scrollTo(0, 0)
    const { setNextPage, currentPage } = context;
    setNextPage(currentPage);
    return navigate("/auth/signin");
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
        <RiCloseCircleLine className="close-menu" aria-label="close menu button" size="30px" onClick={handleCloseMenu}/>

        <ul>
           <li onClick={window.scrollTo(0, 0)}>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li onClick={window.scrollTo(0, 0)}>
            <StyledLink onClick={checkAuthAndNavigate} >Explore</StyledLink>
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
              <StyledLink ref={signinBtn}>
                <BtnPrimary onClick={goToSigninPage} $height="55px" $width="130px">Sign in</BtnPrimary>
              </StyledLink>
            )
          }
          <StyledLink to="/auth/signup" ref={signupBtn}>
            <BtnSecondary onClick={window.scrollTo(0, 0)} $height="55px" $width="130px">Sign up</BtnSecondary>
          </StyledLink>
        </BtnContainer>

      </StyledNav>

      <CiMenuFries size="30px" className="open-menu" onClick={handleOpenMenu}></CiMenuFries>

    </NavContainer>
  )
}

export function LoggedInNav() {
  const context = useContext(AppContext);
  const mobileNav = useRef();
  const navContainer = useRef();
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const { setUser } = useAuth();

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
    const response = await axiosPrivate.get("/auth/logout");
    if (response.status === 204) {
      setUser(null);
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
        <RiCloseCircleLine className="close-menu" aria-label="close menu button" size="30px" onClick={handleCloseMenu}/>

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

        <BtnContainer>
          <BtnPrimary
          $height="55px"
          $width="130px"
          onClick={logout}>
            Logout
          </BtnPrimary>
        </BtnContainer>
      </StyledNav>

      <CiMenuFries size="30px" className="open-menu" onClick={handleOpenMenu}></CiMenuFries>

    </NavContainer>
  )
}