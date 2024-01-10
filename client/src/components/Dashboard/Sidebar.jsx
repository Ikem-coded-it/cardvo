import { StyledSidebar, SidebarListItem } from "./styles";
import { FlexRow, Container } from "../styles/Container.styled";
import { BtnPrimary } from "../styles/Button.styled";
import StyledLink from "../styles/Link.styled";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


export default function Sidebar() {
  const location = useLocation();
  const { logout } = useAuth();
  const profileText = useRef();
  const profileIcon = useRef();
  const profileSideHighlight = useRef();
  const likedCardsText = useRef();
  const likedCardsIcon = useRef();
  const likedCardsSideHighlight = useRef();
  const savedCardsText = useRef();
  const savedCardsIcon = useRef();
  const savedCardsSideHighlight = useRef();

  useEffect(() => {
    function changeColorsOnActive() {
      if (location.pathname.includes("profile")) {
        profileText.current.style.color = "#375694";
        profileIcon.current.style.color = "#375694";
        profileSideHighlight.current.style.backgroundColor = "#375694";
      } else {
        profileText.current.style.color = "#50615D";
        profileIcon.current.style.color = "#50615D";
        profileSideHighlight.current.style.backgroundColor = "transparent";
      }

      if (location.pathname.includes("liked-cards")) {
        likedCardsText.current.style.color = "#375694";
        likedCardsIcon.current.style.color = "#375694";
        likedCardsSideHighlight.current.style.backgroundColor = "#375694";
      } else {
        likedCardsText.current.style.color = "#50615D";
        likedCardsIcon.current.style.color = "#50615D";
        likedCardsSideHighlight.current.style.backgroundColor = "transparent";
      }

      if (location.pathname.includes("saved-cards")) {
        savedCardsText.current.style.color = "#375694";
        savedCardsIcon.current.style.color = "#375694";
        savedCardsSideHighlight.current.style.backgroundColor = "#375694";
      } else {
        savedCardsText.current.style.color = "#50615D";
        savedCardsIcon.current.style.color = "#50615D";
        savedCardsSideHighlight.current.style.backgroundColor = "transparent";
      }
    }

    changeColorsOnActive();
  }, [location.pathname])

  return (
    <StyledSidebar>
      <ul>
        <SidebarListItem>
          <FlexRow $width="100%" $height="70px" $gap="40px" $justify="flex-start">
            <Container ref={profileSideHighlight} $width="7px" $height="90%" $bdradius="0 5px 5px 0"/>

            <StyledLink to="/dashboard/profile" $width="95%" $gap="20px">
              <i className="fa-solid fa-user" ref={profileIcon}/>

              <span ref={profileText}>
                Profile
              </span>
            </StyledLink>
          </FlexRow>
        </SidebarListItem>

        <SidebarListItem>
          <FlexRow $width="100%" $height="70px" $gap="40px" $justify="flex-start">
            <Container ref={likedCardsSideHighlight} $width="7px" $height="90%" $bdradius="0 5px 5px 0"/>

            <StyledLink to="/dashboard/liked-cards" $width="95%" $gap="20px">
              <i className="fa-solid fa-heart" ref={likedCardsIcon}/>

              <span ref={likedCardsText}>
                Liked Cards
              </span>
            </StyledLink>
          </FlexRow>
        </SidebarListItem>
        
        <SidebarListItem>
          <FlexRow $width="100%" $height="70px" $gap="40px" $justify="flex-start">
            <Container ref={savedCardsSideHighlight} $width="7px" $height="90%"  $bdradius="0 5px 5px 0"/>

            <StyledLink to="/dashboard/saved-cards" $width="95%" $gap="20px">
              <i className="fa-solid fa-bookmark" ref={savedCardsIcon}/>

              <span ref={savedCardsText}>
                Saved Cards
              </span>
            </StyledLink>
          </FlexRow>
        </SidebarListItem>
      </ul>

      <FlexRow $width="100%" $height="70px">
        <BtnPrimary
          $height="100%"
          $width="80%"
          $gap="20px"
          $margin="0 0 20px 0"
          onClick={logout}
        >
          <i className="fa-solid fa-right-from-bracket"></i>
          <p>Logout</p>
        </BtnPrimary>
      </FlexRow>
    </StyledSidebar>
  )
}

