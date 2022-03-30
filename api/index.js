const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const path = require("path");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "admin")));
app.use(express.static(path.join(__dirname, "client")));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.use("/admin*", function (req, res) {
  res.sendFile(path.join(__dirname, "admin", "index.html"));
});

app.use("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.info(`Backend server is running on http://localhost:${port}`);
});
