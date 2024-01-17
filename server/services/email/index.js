"use strict";
const nodemailer = require("nodemailer");
const {
  generateConfirmPasswordChangeTemplate,
  generateSignupEmailTemplate
} = require("./template");

const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  }
});

async function sendNewSignupEmail(receiverName, receiverEmail) {
  try {
    const { html, text } = generateSignupEmailTemplate(receiverName);

    const info = transporter.sendMail({
      from: process.env.MAIL_USERNAME,
      to: receiverEmail,
      subject: "Welcome",
      text,
      html,
    });

    return "message sent" 
  } catch (error) {
    return error
  }
}

async function sendConfirmPasswordChangeEmail(receiverName, receiverEmail) {
  try {
    const { html, text } = generateConfirmPasswordChangeTemplate(receiverName);

    const info = transporter.sendMail({
      from: process.env.MAIL_USERNAME,
      to: receiverEmail,
      subject: "Password Reset",
      text,
      html,
    });

    return "message sent" 
  } catch (error) {
    return error
  }
}

module.exports = {
  sendNewSignupEmail,
  sendConfirmPasswordChangeEmail
}
