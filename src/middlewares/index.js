const routes = require("../routes");
const { BadRequestError } = require("../error");

let allRoutes = [];
routes.forEach((val) => {
  allRoutes = allRoutes.concat(val);
});
// allRoutes = allRoutes.split(",");

exports.deliveryPriceMiddleware = (req, res, next) => {
  const { pick_up_addr, drop_off_addr, delivery_type } = req.query;

  if (!(pick_up_addr && drop_off_addr && delivery_type)) {
    return next(new BadRequestError("Query parameters not complete"));
  }

  if (!allRoutes.includes(pick_up_addr.toUpperCase())) {
    return next(new BadRequestError("Pick up address not valid"));
  }

  if (!allRoutes.includes(drop_off_addr.toUpperCase())) {
    return next(new BadRequestError("Drop off address not valid"));
  }

  if (delivery_type !== "regular" && delivery_type !== "express") {
    return next(new BadRequestError("Invalid delivery type"));
  }

  next();
};
