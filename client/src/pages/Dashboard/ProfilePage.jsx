import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../App";
import { StyledProfileContainer } from "../../components/Dashboard/EditProfilePage/styles";
import ProfileNavigation from "../../components/Dashboard/EditProfilePage/ProfileNavigation";
import { Outlet } from "react-router-dom";

const ProfilePage = () => {
  const context = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    context.setCurrentPage(location.pathname)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <StyledProfileContainer $justify="flex-start">
      <ProfileNavigation/>
      <Outlet/>
    </StyledProfileContainer>
  )
}

export default ProfilePage