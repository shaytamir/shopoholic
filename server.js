const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

/* routs */
const productsRouter = require("./routes/products");
const purchaseRouter = require("./routes/purchase");

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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join("client/build")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, path.join("client/build"), "index.html")
    );
  });
}

const _PORT = process.env.PORT || 5000;
app.listen(_PORT, () => console.log(`connected to port : ${_PORT}`));
