import Joi from "joi-browser";

/* product schema */
const productSchema = {
  title: Joi.string().min(2).required(),
  desc: Joi.string().allow(""),
  price: Joi.number().min(0.01).required(),
  amount: Joi.number().required(),
  image: Joi.string().allow(""),
};
/* login schema validation */
export const validateProductSchema = (data) => {
  console.log(data);
  const options = { abortEarly: false };
  return Joi.validate(data, productSchema, options);
};
