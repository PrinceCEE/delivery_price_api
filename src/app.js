const express = require("express");
const Logger = require("morgan");
const { deliveryPriceHandler } = require("./controllers");
const { BadRequestError } = require("./error");
const { deliveryPriceMiddleware } = require("./middlewares");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Logger("dev"));

app.get(
  "/delivery-price",
  deliveryPriceMiddleware,
  deliveryPriceHandler
);

// server error
app.use((err, req, res, next) => {
  let statusCode = 500;
  if (err.name === BadRequestError.name) {
    statusCode = 400;
  }

  res.status(statusCode).json({
    ok: false,
    data: err.message,
  });
});

// Not found
app.use((req, res) => {
  res.status(404).json({
    ok: false,
    data: "Not found",
  });
});

module.exports = app;
