const Joi = require('joi');

//schema validation for sign_up
const signUpSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9!@#$%^&*()_+{}|':;',.]{3,30}$"))
    .required(),
  email: Joi.string().email().required(),
});

////schema validation for login
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = {
  signUpSchema,
  loginSchema,
};
