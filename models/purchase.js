const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const purchaseSchema = new mongoose.Schema({
  total: {
    type: Number,
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Purchase = mongoose.model("purchase", purchaseSchema);

function validatePurchase(purchase) {
  console.log("purchase", purchase);
  const schema = Joi.object({
    total: Joi.number().required(),
    products: Joi.array(),
  });
  return schema.validate(purchase);
}

module.exports = {
  Purchase,
  validatePurchase,
};
