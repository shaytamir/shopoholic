const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

/* routs */
const productsRouter = require("./routes/products");
const purchaseRouter = require("./routes/purchase");

/* \routs */

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/shopoholic", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connected to mongo");
  })
  .catch((error) => {
    console.error("Connection to mongo Failed");
    console.error(error.message);
  });

app.use("/api/products", productsRouter);
app.use("/api/purchase", purchaseRouter);

const _PORT = process.env._PORT || 8181;
app.listen(_PORT, () => console.log(`connected to port : ${_PORT}`));
