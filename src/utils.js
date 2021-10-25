const routes = require("./routes");
const prices = require("./prices");

/**
 * The location index is zero-based, hence
 * route 1 becomes route 0 and so on.
 */
exports.getRouteIndex = (location) => {
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    if (route.includes(location)) {
      return i;
    }
  }
  return null;
};

exports.getPrice = (pickUpIdx, dropOffIdx, type) => {
  const basePrice = prices[pickUpIdx][dropOffIdx];

  return type === "regular" ? basePrice : basePrice * 2;
};
