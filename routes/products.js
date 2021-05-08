const router = require("express").Router();
const { Product, validateProduct } = require("../models/product");

router.get("/", async (req, res) => {
  const myPosts = await Product.find({});
  res.send(myPosts);
});

router.post("/", async (req, res) => {
  console.log(req.body);

  const { error } = validateProduct(req.body.value);
  if (error) {
    console.log("errorr", error);
    return res.status(400).send(error.details[0].message);
  }
  let product = new Product(req.body.value);

  product.save();

  console.log("** product inserted successfuly");
  res.send(product).status(200);
});

/* patch product ordered */
router.patch("/patch/amount/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    console.log("cant find product");
    return res.status(404).send("The product with the given ID was not found.");
  }
  if (product.amount === 0 || product.amount_ordered === product.amount) {
    console.log("product sold out");
    return res.status(200).send("product sold out");
  }
  if (req.body.action === "+") {
    product.amount_ordered += 1;
  } else if (req.body.action === "-") {
    product.amount_ordered -= 1;
  }
  product.updatedAt = Date.now();

  await product.save();
  res.status(200).send(product);
});

/* patch edit product */
router.patch("/patch/purchase/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    console.log("cant find product");
    return res.status(404).send("The product with the given ID was not found.");
  }
  product.amount -= 1;
  product.amount_ordered -= 1;
  product.updatedAt = Date.now();

  await product.save();
  res.status(200).send(product);
});
/* patch edit product */
router.patch("/patch/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    console.log("cant find product");
    return res.status(404).send("The product with the given ID was not found.");
  }
  for (let i in req.body.value) {
    product[i] = req.body.value[i];
  }
  product.updatedAt = Date.now();

  await product.save();
  res.status(200).send(product);
});

router.delete("/delete/:id", async (req, res) => {
  //   console.log("body", req.body);
  // console.log(req.params.id);
  const product = await Product.findOneAndRemove({
    _id: req.params.id,
  });
  if (!product)
    return res.status(404).send("The product with the given ID was not found.");
  res.status(200).send("product has been deleted");
});

module.exports = router;
