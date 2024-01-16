import { ProfileNav } from "./styles";
import { useEffect, useContext, useRef } from "react";
import { AppContext } from "../../../App";
import StyledLink from "../../styles/Link.styled";

export default function ProfileNavigation() {
  const { currentPage } = useContext(AppContext);
  const profilePageLinkRef = useRef();
  const changePasswordPageLinkRef = useRef();

  useEffect(() => {
    function highlightCurrentPageLink() {
      if (currentPage === "/dashboard/profile")
        profilePageLinkRef.current.style.color = "#4267b2";
      else
        profilePageLinkRef.current.style.color = "#50615D";

      if (currentPage === "/dashboard/profile/change-password")
        changePasswordPageLinkRef.current.style.color = "#4267b2";
      else
        changePasswordPageLinkRef.current.style.color = "#50615D";
    }

    highlightCurrentPageLink()
  }, [currentPage])


  return (
    <ProfileNav>
      <ul>
        <li>
          <StyledLink 
          ref={profilePageLinkRef}
          to="/dashboard/profile" >
            Profile
          </StyledLink>
        </li>

        <span>/</span>

        <li>
          <StyledLink
          ref={changePasswordPageLinkRef}
          to="/dashboard/profile/change-password">
            Change password
          </StyledLink>
        </li>
      </ul>
    </ProfileNav>
  )
}