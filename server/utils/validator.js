const Joi = require('joi');
// const asyncHandler = require("express-async-handler");

const validateSignUp = (fullName, email, password) => {
  const schema = Joi.object({
    fullName: Joi.string()
      .min(3)
      .max(100)
      .required(),

    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .required(),

    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required(),
  })

  return schema.validate(fullName, email, password);
};

const validateSignIn = (email, password) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required(),

    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .required(),
  })

  return schema.validate(email, password);
}

module.exports = {
  validateSignUp,
  validateSignIn
}