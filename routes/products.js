const router = require("express").Router();
// const auth = require("../../middleware/auth");
// const { Product, validateProduct } = require("");
const { Product, validateProduct } = require("../models/product");

router.get("/", async (req, res) => {
  const myPosts = await Product.find({});
  res.send(myPosts);
});

module.exports = router;
