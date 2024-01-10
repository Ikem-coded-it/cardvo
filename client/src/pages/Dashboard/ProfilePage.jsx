import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../App";
import EditProfileForm from "../../components/Dashboard/EditProfilePage";

const ProfilePage = () => {
  const context = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    context.setCurrentPage(location.pathname)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <EditProfileForm/>
  )
}

export default ProfilePage