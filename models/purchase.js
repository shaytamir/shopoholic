const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const purchaseSchema = new mongoose.Schema({
  total: {
    type: Number,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});

const Purchase = mongoose.model("purchase", purchaseSchema);

function validatePurchase(purchase) {
  console.log("purchase", purchase);
  const schema = Joi.object({
    total: Joi.number().required(),
    items: Joi.array(),
    // title: Joi.string().min(2).required(),
    // desc: Joi.string().allow(""),
    // price: Joi.number().min(0.01).required(),
    // image: Joi.string().allow(""),
  });
  return schema.validate(purchase);
}

module.exports = {
  Purchase,
  validatePurchase,
};
