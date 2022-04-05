const express = require("express");
const app = express();
const errorMiddeleware = require("./middleware/error");
app.use(express.json());

//route
//Products
const products = require("./routes/productRoute");
app.use("/api/v1", products);

//user
// const user = require("./routes/userRoute");
// app.use("/api/v1", user);

//Middleware for error
app.use(errorMiddeleware);

module.exports = app;
