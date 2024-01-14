import { FlexColumn, FlexRow } from "../../styles/Container.styled";
import { BtnSecondary } from "../../styles/Button.styled";
import { StyledEditProfileForm } from "./styles";
import PhotoEdit from "./PhotoEdit";
import useAuth from "../../../hooks/useAuth";
import EditInput from "./Input";
import { Formik } from 'formik';
import { useState, useContext } from "react";
import { AppContext } from "../../../App";
// import useFormDataFetch from "../../../hooks/useFormDataFetch";
import useFormDataAxios from "../../../hooks/useFormDataAxios";
import MessageDisplay from "../../MessageDisplay";
import LoaderSpinner from "../../Loader";

export default function EditProfileForm() {
  const { user, setUser } = useAuth();
  const { serverURL } = useContext(AppContext);
  const [message, setMessage] = useState(null);
  const [file, setFile] = useState(null);
  // const formDataFetch = useFormDataFetch();
  const formDataAxios = useFormDataAxios();

  const initial = {
    full_name: user.full_name,
    email: user.email
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

    if (!values.full_name) {
      errors.name = "Required";
    }

    return errors;
  }

  const onSubmit = async(values, { setSubmitting }) => {
    try {
      const formData = new FormData()
      formData.append("fullName", values.full_name);
      formData.append("email", values.email);
      formData.append("profile_picture", file);

      const url = `${serverURL}/auth/${user.id}/edit`;
      const response = await formDataAxios(url, formData);

      if (response instanceof Error) {
        setMessage(response.message);
        return setSubmitting(false)
      }

      if (response === "Check your internet connection") {
        setMessage(response);
        return setSubmitting(false);
      }

      if (response.data?.success) {
        setUser(response.data.user);
        setMessage("Profile updated");
        return setSubmitting(false);
      }

    } catch (error) {
      setMessage(error.message);
      setSubmitting(false)
    }
  }

  return (
    <>
    {
      message && <MessageDisplay message={message} closeMessage={()=>setMessage(null)}/>
    }
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
        isSubmitting,
      }) => (
        <StyledEditProfileForm onSubmit={handleSubmit}>
          <FlexColumn $height="100%" $justify="flex-start">
            <PhotoEdit setFile={setFile} file={file}/>
          </FlexColumn>

          <FlexColumn $height="100%" $width="60%" $gap="20px">
            <EditInput
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.full_name}
            label="Full name"
            type="text"
            name="full_name"/>

            <EditInput
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            label="Email"
            type="email"
            name="email"/>

           {/* <EditInput
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            label="Password"
            type="password"
            name="password"/> */}

            <FlexRow $width="100%" $justify="flex-end">
              <BtnSecondary
              type="submit"
              $width="150px"
              $height="50px">
                {
                  isSubmitting ? (
                    <LoaderSpinner height={20} width={20} color="white" type="spin"/>
                  ) : (
                    "Save"
                  )
                }
              </BtnSecondary>
            </FlexRow>
          </FlexColumn>

        </StyledEditProfileForm>
      )}
    </Formik>
    </>
  )
}