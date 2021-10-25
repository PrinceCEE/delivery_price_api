const supertest = require("supertest");
const app = require("../app");

describe("Test the delivery price", () => {
  test("Get the regular price for two different routes", async () => {
    const request = supertest(app);
    const response = await request.get(
      "/delivery-price?pick_up_addr=ikeja&drop_off_addr=ikorodu&delivery_type=regular"
    );

    const { body } = response;
    expect(body.data).toBe("N2000");
  });

  test("Get the express price for two different routes", async () => {
    const request = supertest(app);
    const response = await request.get(
      "/delivery-price?pick_up_addr=ikeja&drop_off_addr=ikorodu&delivery_type=express"
    );

    const { body } = response;
    expect(body.data).toBe("N4000");
  });

  test("Get price with insufficient queries", async () => {
    const request = supertest(app);
    const response = await request.get(
      "/delivery-price?pick_up_addr=ikeja&drop_off_addr=ikorodu"
    );

    const { body } = response;
    expect(body.data).toBe("Query parameters not complete");
  });

  test("Get price with invalid address", async () => {
    const request = supertest(app);
    const response = await request.get(
      "/delivery-price?pick_up_addr=ikej&drop_off_addr=ikorodu&delivery_type=regular"
    );

    const { body } = response;
    expect(body.data).toBe("Pick up address not valid");
  });

  test("Get price for invalid delivery type", async () => {
    const request = supertest(app);
    const response = await request.get(
      "/delivery-price?pick_up_addr=ikeja&drop_off_addr=ikorodu&delivery_type=regul"
    );

    const { body } = response;
    expect(body.data).toBe("Invalid delivery type");
  });
});
