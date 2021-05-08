const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlebgth: 2,
  },
  desc: {
    type: String,
    min: 0.01,
  },
  price: {
    require: true,
    type: Number,
    min: 0.01,
  },
  amount: {
    require: true,
    type: Number,
    default: 0,
  },
  amount_ordered: {
    require: true,
    type: Number,
    default: 0,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("product", productSchema);

function validateProduct(product) {
  console.log("product", product);
  const schema = Joi.object({
    title: Joi.string().min(2).required(),
    desc: Joi.string().allow(""),
    price: Joi.number().min(0.01).required(),
    amount: Joi.number().required(),
    image: Joi.string().allow(""),
  });
  return schema.validate(product);
}

module.exports = {
  Product,
  validateProduct,
};
