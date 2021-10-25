const { getRouteIndex, getPrice } = require("../utils");

exports.deliveryPriceHandler = (req, res) => {
  const { pick_up_addr, drop_off_addr, delivery_type } = req.query;
  const pickUpLocationIndex = getRouteIndex(
    pick_up_addr.toUpperCase()
  );
  const dropOffLocationIndex = getRouteIndex(
    drop_off_addr.toUpperCase()
  );

  let price = getPrice(
    pickUpLocationIndex,
    dropOffLocationIndex,
    delivery_type
  );

  res.json({
    ok: true,
    data: `N${price}`,
  });
};
