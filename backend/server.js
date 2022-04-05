const app = require("./app");
const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/database");
const morgan = require("morgan");

//Handling Uncaught Exception

process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

//config
dotenv.config({ path: "backend/config/config.env" });

//connecting to the database
connectDB();

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});

//Unhandled Promise Rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`Shutting down the server due to unhandle Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
