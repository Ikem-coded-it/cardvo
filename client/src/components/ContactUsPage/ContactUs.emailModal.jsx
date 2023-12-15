import { DarkModalOverlay } from "../styles/Modal.styled";
import { EmailForm } from "./styles";
import { FlexColumn, FlexRow } from "../styles/Container.styled";
import { BtnPrimary } from "../styles/Button.styled";
import { ImCancelCircle } from "react-icons/im";
import { Formik, Field } from 'formik';
import { useState } from "react";
import sendContactFormMessage from "../../utils/email";
import MessageDisplay from "../MessageDisplay/index";
import PropTypes from "prop-types";

export default function EmailModal({ close }) {
  const [emailMessage, setEmailMessage] = useState("");
  const [message, setMessage] = useState(null);

  const initial = {
    name: "",
    email: ""
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

  async function onSubmit(values, { setSubmitting }) {
    try {
      const templateParams = {
        from_name: values.name,
        to_name: "Cardvo Developer",
        message: emailMessage,
        reply_to: values.email
      };

      const sent = await sendContactFormMessage(templateParams);
      sent instanceof Error ?? setMessage(sent.message);
      if(sent.status == 200) {
        values.name = ""
        values.email = ""
        setEmailMessage("")
        return setMessage("Message sent");
      }
    } catch (error) {
      setMessage(error.message)
      setSubmitting(false);
    }
  }


  return<>
  <DarkModalOverlay>
    {
      message && <MessageDisplay message={message} closeMessage={() => setMessage(null)}/>
    }
    <Formik
      initialValues={initial}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <EmailForm animate={{scale: 1}} initial={{scale: 0}} onSubmit={handleSubmit}>
          <FlexRow $justify="space-between">
            <h1>Send a message</h1>

            <ImCancelCircle size="25px" color="white" onClick={close}/>
          </FlexRow>

          <FlexColumn $align="flex-start" $gap="20px">
            <label htmlFor="name">Your name</label>
            <Field 
            id="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            type="text"/>
          </FlexColumn>
          <span>{errors.name && touched.name && errors.name}</span>

          <FlexColumn $align="flex-start" $gap="20px">
            <label htmlFor="email">Your email address</label>
            <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}/>
          </FlexColumn>
          <span>{errors.email && touched.email && errors.email}</span>

          <FlexColumn $align="flex-start" $gap="20px">
            <label htmlFor="message">Your message</label>
            <textarea 
            id="message"
            name="message"
            onChange={(e) => setEmailMessage(e.target.value)}
            value={emailMessage}></textarea >
          </FlexColumn>
          <span>{errors.message && touched.message && errors.message}</span>

          <FlexColumn $align="center">
            <BtnPrimary
            type="submit"
            $color="white"
            $height="60px"
            $width="80%"
            $border="white"
            disabled={isSubmitting}>
              Send Message
            </BtnPrimary>
          </FlexColumn>
        </EmailForm>
      )}
    </Formik>
  </DarkModalOverlay>
  </>
}

EmailModal.propTypes = {
  close: PropTypes.func
}