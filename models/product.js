const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const productSchema = new mongoose.Schema({
  //   skill_name: {
  //     type: String,
  //     required: true,
  //     minlebgth: 2,
  //     maxlength: 255,
  //     unique: true,
  //   },
  // skill_id: {
  //   type: Number,
  //   requred: true,
  //   unique: true,
  // },
});

const Product = mongoose.model("product", productSchema);

function validateProduct(product) {
  console.log("product", product);
  const schema = Joi.object({
    // skill_name: Joi.string().min(2).max(255).required(),
    // skill_id: Joi.number().required(),
  });
  return schema.validate(skill);
}

module.exports = {
  Product,
  validateProduct,
};
