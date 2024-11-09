import Joi from "joi";
import emailValidator from "email-validator";

const namePattern = /^[A-Za-z]+$/;
export const registerSchema = Joi.object({
  firstname: Joi.string()
    .pattern(namePattern) // Only alphabetic characters
    .min(3)
    .required()
    .messages({
      "string.empty": "First name is required",
      "string.min": "First name should have a minimum length of {#limit}",
      "string.pattern.base":
        "First name should only contain alphabetic characters (A-Z, a-z)",
    }),
  lastname: Joi.string()
    .pattern(namePattern) // Only alphabetic characters
    .min(3)
    .required()
    .messages({
      "string.empty": "Last name is required",
      "string.min": "Last name should have a minimum length of {#limit}",
      "string.pattern.base":
        "Last name should only contain alphabetic characters (A-Z, a-z)",
    }),
  email: Joi.string()
    .custom((value, helper) => {
      if (emailValidator.validate(value)) {
        return value;
      } else {
        return helper.message("Please enter a valid email address.");
      }
    })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email":
        "Please enter a valid email address in the format: user@example.com",
    }),
  password: Joi.string().min(6).required().messages({
    "string.empty": "Password is required",
    "string.min":
      "Password should have a minimum length of {#limit} characters",
  }),
});
