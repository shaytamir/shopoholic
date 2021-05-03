const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

// const config = require("config");
// const MONGODB_URI = config.get("MONGODB_URI");

/* routs */
// const adminRouter = require("./routes/admin/admin");
// const userRouter = require("./routes/user/user");
// const authRouter = require("./routes/user/auth");
// const generalRouter = require("./routes/general/general");
// const imagesRouter = require("./routes/general/imagesRouter");
// const communitiesRauter = require("./routes/communities/communitiesRauter");
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
    // console.log(process.env);
  })
  .catch((error) => {
    console.error("Connection to mongo Failed");
    console.error(error.message);
  });

// app.use("/api/users", userRouter);
// app.use("/api/auth", authRouter);
// app.use("/api/general", generalRouter);
// app.use("/api/admin", adminRouter);
// app.use("/api/images", imagesRouter);
// app.use("/api/communities", communitiesRauter);

// app.get("/public/images/uploads/:filename", async (req, res) => {
//   await res.sendFile(req.params.filename, {
//     root: path.join(__dirname, "/public/images/uploads"),
//   });
// });
// console.log(process.env);
const _PORT = process.env._PORT || 8181;
app.listen(_PORT, () => console.log(`connected to port : ${_PORT}`));
