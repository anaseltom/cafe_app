//express
const express = require("express");
// config imports
const { serverPort } = require("./config.json");
//router imports
const categoryRouter = require("./router/category");
const productRouter = require("./router/product");
const userRouter = require("./router/user");
const orderRouter = require("./router/order");
const dashboardRouter = require("./router/dashboard");
const stockRouter = require("./router/stock");
//sequelize imports
const { sequelize } = require("./SQL/models");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//router imports
app.use("/category", categoryRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);
app.use("/order", orderRouter);
app.use("/dashboard", dashboardRouter);
app.use("/stock", stockRouter);

app.listen(serverPort, async () => {
  console.log(`Up on ${serverPort}`);
  await sequelize.sync().then(() => console.log("connected to database"));
});
