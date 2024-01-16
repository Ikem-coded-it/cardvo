import { ChangePasswordFormContainer } from "./styles";
import { BtnSecondary } from "../../styles/Button.styled";
import LoaderSpinner from "../../Loader";
import EditInput from "./Input";
import { useLocation } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { AppContext } from "../../../App";

const ChangePassword = () => {
  const { setCurrentPage } = useContext(AppContext);
  const { pathname } = useLocation();
  const [newPassword, setNewPassword] = useState("")
  const [oldPassword, setOldPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isSubmitting, setSubmitting] = useState(false);
  const [oldPasswordError, setOldPasswordError] = useState(null);
  const [newPasswordError, setNewPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  useEffect(() => {
    setCurrentPage(pathname)
  }, [pathname, setCurrentPage])

  const handleValidateOldPassword = (value) => {
    setOldPassword(value)
    if (value.length === 0)
      setOldPasswordError("* Required");
    else
      setOldPasswordError(null);
  }

  const handleValidateNewPassword = (value) => {
    setNewPassword(value)
    if (value.length < 8)
      setNewPasswordError("* Password must be 8 characters long");
    else
      setNewPasswordError(null);
  }

  const handleValidateConfirmPassword = (value) => {
    setConfirmPassword(value)
    if (value !== newPassword)
      setConfirmPasswordError("* Does not match new password");
    else
      setConfirmPasswordError(null);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(oldPassword, newPassword, confirmPassword)
    if (oldPasswordError || newPasswordError || confirmPasswordError) return setSubmitting(false)
  }

  return (
    <ChangePasswordFormContainer $width="100%" $height="90%">
      <form onSubmit={(e) => handleSubmit(e)}>
        <EditInput
        onChange={(e) => handleValidateOldPassword(e.target.value)}
        value={oldPassword}
        label="Old Password"
        type="password"
        name="old_password"
        minLength={1}/>

        <p>{oldPasswordError && oldPasswordError}</p>

        <EditInput
        onChange={(e) => handleValidateNewPassword(e.target.value)}
        value={newPassword}
        label="New Password"
        type="password"
        name="new_password"
        minLength={8}/>

        <p>{newPasswordError && newPasswordError}</p>

        <EditInput
        onChange={(e)=>handleValidateConfirmPassword(e.target.value)}
        value={confirmPassword}
        label="Confirm Password"
        type="password"
        name="confirm_password"
        minLength={1}/>

        <p>{confirmPasswordError && confirmPasswordError}</p>

        <BtnSecondary
        type="submit"
        $width="200px"
        $height="50px"
        >
          {
            isSubmitting ? (
              <LoaderSpinner height={20} width={20} color="white" type="spin"/>
            ) : (
              "Change Password"
            )
          }
        </BtnSecondary>
      </form>
    </ChangePasswordFormContainer>
  )
}

export default ChangePassword