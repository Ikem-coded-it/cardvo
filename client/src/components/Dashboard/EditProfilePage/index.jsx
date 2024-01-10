import { FlexColumn, FlexRow } from "../../styles/Container.styled";
import { PasswordInputContainer } from "../../AuthPages/shared";
import { BtnSecondary, BtnPrimary } from "../../styles/Button.styled";
import { StyledEditProfileForm } from "./styles";
import PhotoEdit from "./PhotoEdit";
import useAuth from "../../../hooks/useAuth";
import EditInput from "./Input";
import { Formik } from 'formik';
import { FaEye } from "react-icons/fa";
import { useRef } from "react";

export default function EditProfileForm() {
  const { user } = useAuth();
  const input = useRef();

  const initial = {
    full_name: user.full_name,
    email: user.email,
    pass_word: ""
  }

  const validate = (values) => {
    const errors = {};
    
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.name) {
      errors.name = "Required";
    }

    return errors;
  }

  const onSubmit = () => {

  }

  function handleTogglePassword() {
    if (input.current.type === "password") {
      input.current.type = "text";
    } else {
      input.current.type = "password";
    }
  }

  return (
    <Formik
      initialValues={initial}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({
        values,
        // errors,
        // touched,
        handleChange,
        handleBlur,
        handleSubmit,
        // isSubmitting,
      }) => (
        <StyledEditProfileForm onSubmit={handleSubmit}>
          <FlexColumn $height="100%" $justify="flex-start">
            <PhotoEdit/>
          </FlexColumn>

          <FlexColumn $height="100%" $width="60%" $gap="20px">
            <EditInput
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.full_name}
            label="Full name"
            type="text"/>

            <EditInput
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            label="Email"
            type="email"/>

            <FlexColumn $width="100%" $align="flex-start">
              <label htmlFor="password">Password</label>

              <PasswordInputContainer $width="100%">
                <input
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                name="password"
                />

                <BtnPrimary
                type="button"
                $border="white" 
                $width="30px" 
                onClick={handleTogglePassword}>
                  <FaEye size="20px"/>
                </BtnPrimary>
              </PasswordInputContainer>
            </FlexColumn>

            <FlexRow $width="100%" $justify="flex-end">
              <BtnSecondary
              type="submit"
              $width="150px"
              $height="50px">
                Save
              </BtnSecondary>
            </FlexRow>
          </FlexColumn>

        </StyledEditProfileForm>
      )}
    </Formik>
  )
}