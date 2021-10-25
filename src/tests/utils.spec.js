const { getPrice, getRouteIndex } = require("../utils");

describe("Test the util module", () => {
  test("Get route index of valid route", () => {
    const index = getRouteIndex("OGUDU");
    expect(index).toBe(4);
  });

  test("Get route index for invalid route", () => {
    const index = getRouteIndex("ABC");
    expect(index).toBe(null);
  });

  test("Get regular price between route 1 and route 3", () => {
    const price = getPrice(0, 2, "regular");
    expect(price).toBe(1500);
  });

  test("Get express price between route 1 and route 3", () => {
    const price = getPrice(0, 2, "express");
    expect(price).toBe(3000);
  });
});
