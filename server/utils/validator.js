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

const validateCardDetails = ({
  card_number_one,
  card_number_two,
  card_number_three,
  card_number_four,
  name,
  background_image,
  cvv,
  expiration,
  color,
  category
}) => {
  const schema = Joi.object({
    card_number_one: Joi.number()
      .min(1000)
      .max(9999)
      .required(),

    card_number_two: Joi.number()
      .min(1000)
      .max(9999)
      .required(),

    card_number_three: Joi.number()
      .min(1000)
      .max(9999)
      .required(),

    card_number_four: Joi.number()
      .min(1000)
      .max(9999)
      .required(),

    name: Joi.string()
      .min(3)
      .max(60)
      .required(),

    background_image: Joi.string()
      .uri()
      .required(),

    cvv: Joi.number()
      .min(100)
      .max(999)
      .required(),

    color: Joi.string()
      .min(3)
      .max(7)
      .required(),

    expiration: Joi.date()
      .required(),

    category: Joi.string()
      .min(5)
      .max(10)
      .required()
  })

  return schema.validate({
    card_number_one,
    card_number_two,
    card_number_three,
    card_number_four,
    name,
    background_image,
    cvv,
    expiration,
    color,
    category
  });
}

const validateComment = (comment, userId, cardDesignId) => {
  const schema = Joi.object({
    userId: Joi.string(),
    comment: Joi.string().min(7),
    cardDesignId: Joi.string()
  })

  return schema.validate(comment, userId, cardDesignId);
}

const validateUserCollectionCardDetails = ({
  user_id,
  card_number_one,
  card_number_two,
  card_number_three,
  card_number_four,
  name,
  background_image,
  cvv,
  expiration,
  color
}) => {
  const schema = Joi.object({
    user_id: Joi.string(),

    card_number_one: Joi.number()
      .min(1000)
      .max(9999)
      .required(),

    card_number_two: Joi.number()
      .min(1000)
      .max(9999)
      .required(),

    card_number_three: Joi.number()
      .min(1000)
      .max(9999)
      .required(),

    card_number_four: Joi.number()
      .min(1000)
      .max(9999)
      .required(),

    name: Joi.string()
      .min(3)
      .max(60)
      .required(),

    background_image: Joi.string()
      .uri(),

    defaultImage: Joi.string()
      .uri(),

    cvv: Joi.number()
      .min(100)
      .max(999)
      .required(),

    expiration: Joi.date()
      .required(),

    color: Joi.allow(),
  })

  return schema.validate({
    user_id,
    card_number_one,
    card_number_two,
    card_number_three,
    card_number_four,
    name,
    background_image,
    cvv,
    expiration,
    color
  });
}

module.exports = {
  validateSignUp,
  validateSignIn,
  validateCardDetails,
  validateComment,
  validateUserCollectionCardDetails
}