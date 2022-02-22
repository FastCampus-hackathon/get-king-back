const express = require("express");
const mongoose = require("mongoose");
const saramRouter = require("./routes/saram");
const categoryRouter = require("./routes/category");
const memoRouter = require("./routes/memo");
const setRouter = require("./routes/set");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/saram", saramRouter);
app.use("/category", categoryRouter);
app.use("/memo", memoRouter);
app.use("/set", setRouter);

app.listen(process.env.PORT || 5555, () => {
  console.log("start server ");
});
