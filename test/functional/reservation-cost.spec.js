"use strict";

const { test } = use("Test/Suite")("Reservation Cost");

// test("POST /reservation-cost returns 422 for invalid data", async ({ client }) => {
//   const duplicateRoom = Object.assign({}, defaultRooms[0]);
//   duplicateRoom.name = "trials";
//   const response = await client
//     .post("rooms")
//     .send(duplicateRoom)
//     .end();
//   response.assertStatus(400);
// });
// test("calculate costs for a reservation", async ({ assert }) => {
//   const data = {
//     guests: 10,
//     total_nights: 10,
//     check_in_date: new Date().toISOString()
//   };
//   const response = await client
//     .post("/rooms")
//     .send(data)
//     .end();
//   response.assertStatus(200);
// });
