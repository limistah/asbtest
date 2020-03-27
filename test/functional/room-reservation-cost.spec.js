"use strict";

const { test, trait } = use("Test/Suite")("Room Reservation Cost");
trait("Test/ApiClient");

test("calculate costs for a reservation", async ({ assert, client }) => {
  const data = [
    { beds: 1, id: 1 },
    { beds: 2, id: 3 },
    { beds: 3, id: 2 }
  ];
  // From Seeded
  const totalCost = 1 * 20 + 3 * 20 + 2 * 50;

  const response = await client
    .post("/rooms/reservation/cost")
    .send({ reservations: data })
    .end();

  response.assertStatus(200);
  assert.equal(response.body.totalCost, totalCost);
});
