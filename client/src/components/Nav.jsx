import { 
  NavContainer, 
  LogoContainer,
  UserImageContainer
} from "./styles/Nav.styled";
import { FlexRow, Container } from "./styles/Container.styled"
import { StyledNav } from "./styles/Nav.styled";
import { BtnPrimary, BtnSecondary } from "./styles/Button.styled";
import { Image } from "./styles/Image.styled"
import StyledLink from "./styles/Link.styled";
import { CiMenuFries } from "react-icons/ci";
import { RiCloseCircleLine } from "react-icons/ri";
import { useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
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
  const {currentPage} = context;

  useEffect(() => {
    function hightlightCurrentPage() {
      const hightlights = Array.from(document.getElementsByClassName('highlight'));

      hightlights.forEach(h => {
        const link = h.previousElementSibling;

        let path = link.textContent.toLowerCase();
        if (path === 'home') path = '/'
        if (path === 'contact us') path = '/contact'
        if (path === 'explore') path = '/explore'
        if (path === 'about us') path = '/about'

        if (path ===currentPage) {
          h.style.opacity = 1
        } else {
          h.style.opacity = 0
        }
      })
    }

    hightlightCurrentPage()
  }, [currentPage])

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
            <Container $width="100px" $height="3px" $bg={({theme})=>theme.colors.prim.six} className="highlight"/>
          </li>
          <li onClick={window.scrollTo(0, 0)}>
            <StyledLink onClick={checkAuthAndNavigate} >Explore</StyledLink>
            <Container $width="100px" $height="3px" $bg={({theme})=>theme.colors.prim.six} className="highlight"/>
          </li>
          <li onClick={window.scrollTo(0, 0)}>
            <StyledLink to="/about">About us</StyledLink>
            <Container $width="100px" $height="3px" $bg={({theme})=>theme.colors.prim.six} className="highlight"/>
          </li>
          <li onClick={window.scrollTo(0, 0)}>
            <StyledLink to="/contact">Contact us</StyledLink>
            <Container $width="100px" $height="3px" $bg={({theme})=>theme.colors.prim.six} className="highlight"/>
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
  const { logout } = useAuth();
  const { currentPage } = context;

  useEffect(() => {
    function hightlightCurrentPage() {
      const hightlights = Array.from(document.getElementsByClassName('highlight'));

      hightlights.forEach(h => {
        const link = h.previousElementSibling;
        
        let path = link.textContent.toLowerCase();
        if (path === 'home') path = '/'
        if (path === 'contact us') path = '/contact'
        if (path === 'explore') path = '/explore'
        if (path === 'about us') path = '/about'

        if (path === currentPage) {
          h.style.opacity = 1
        } else {
          h.style.opacity = 0
        }
      })
    }

    hightlightCurrentPage()
  }, [currentPage])

  useEffect(() => {
    if (context.currentPage) {
      if (context.currentPage.includes('/edit') ||
          context.currentPage.includes('/dashboard')) {
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
            <Container $width="100px" $height="3px" $bg={({theme})=>theme.colors.prim.six} className="highlight"/>
          </li>
          <li onClick={window.scrollTo(0, 0)}>
            <StyledLink to="/explore">Explore</StyledLink>
            <Container $width="100px" $height="3px" $bg={({theme})=>theme.colors.prim.six} className="highlight"/>
          </li>
          <li onClick={window.scrollTo(0, 0)}>
            <StyledLink to="/about">About us</StyledLink>
            <Container $width="100px" $height="3px" $bg={({theme})=>theme.colors.prim.six} className="highlight"/>
          </li>
          <li onClick={window.scrollTo(0, 0)}>
            <StyledLink to="/contact">Contact us</StyledLink>
            <Container $width="100px" $height="3px" $bg={({theme})=>theme.colors.prim.six} className="highlight"/>
          </li>
        </ul>

        <BtnContainer>
          {
            !context.currentPage.includes("dashboard") ? (
              <BtnPrimary
              $height="55px"
              $width="130px"
              onClick={logout}>
                Logout
              </BtnPrimary>
            ) : (
              null
            )
          }

          {
            !context.currentPage.includes("dashboard") ? (
              <StyledLink to="/dashboard/profile">
                <BtnSecondary
                $height="55px"
                $width="130px">
                  Dashboard
                </BtnSecondary>
              </StyledLink>
            ) : (
              null
            )
          }

          {
            context.currentPage.includes("dashboard") ? (
              <LoggedInUserImage/>
            ) : (null)
          }
        </BtnContainer>
      </StyledNav>

      <CiMenuFries size="30px" className="open-menu" onClick={handleOpenMenu}></CiMenuFries>

    </NavContainer>
  )
}

function LoggedInUserImage() {
  const { user: { photo_url, full_name } } = useAuth();
  return (
    <UserImageContainer $width="200px">
      <p>{full_name.split(" ")[0]}</p>

      <Image
        src={photo_url}
        alt={full_name}
        $height="50px"
        $width="50px"
        $bdradius="50%"
      />
    </UserImageContainer>
  )
}