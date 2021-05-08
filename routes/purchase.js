const router = require("express").Router();

const { Purchase, validatePurchase } = require("../models/purchase");

router.get("/all", async (req, res) => {
  const purchases = await Purchase.find({});
  res.send(purchases);
});

router.post("/", async (req, res) => {
  console.log(req.body);

  const { error } = validatePurchase(req.body.value);
  if (error) {
    console.log("errorr", error);
    return res.status(400).send(error.details[0].message);
  }
  console.log(111);
  let purchase = new Purchase(req.body.value);

  purchase.save();

  console.log("** Purchase inserted successfuly");
  res.send(purchase).status(200);
});

module.exports = router;
