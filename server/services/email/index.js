"use strict";
require("dotenv").config();
const nodemailer = require("nodemailer");
const {
  generateConfirmPasswordChangeTemplate,
  generateSignupEmailTemplate
} = require("./template");

const env = process.env.NODE_ENV;

const transporter = nodemailer.createTransport({
  service: 'hotmail',
  port: env === 'development' ? 587 : 465,
  secure:  env === 'development' ? false : true, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  }
});

async function sendNewSignupEmail(receiverName, receiverEmail) {
  try {
    const { html, text } = generateSignupEmailTemplate(receiverName);

    transporter.sendMail({
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

    transporter.sendMail({
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
