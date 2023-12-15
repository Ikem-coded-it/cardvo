import emailjs from "@emailjs/browser";

export default async function sendContactFormMessage(templateParams) {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICEID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

    return response;
  } catch (error) {
    return error;
  }
}