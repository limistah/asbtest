"use strict";

const { test, trait } = use("Test/Suite")("Room Reservation");
trait("Test/ApiClient");

// test("POST /reservation-cost returns 422 for invalid data", async ({ client }) => {
//   const duplicateRoom = Object.assign({}, defaultRooms[0]);
//   duplicateRoom.name = "trials";
//   const response = await client
//     .post("rooms")
//     .send(duplicateRoom)
//     .end();
//   response.assertStatus(400);
// });
test("calculate costs for a reservation", async ({ assert, client }) => {
  const data = [
    { beds: 1, id: 1 },
    { beds: 3, id: 2 },
    { beds: 2, id: 3 }
  ];
  const response = await client
    .post("/rooms/reservation")
    .send({ reservations: data })
    .end();
  console.log(response.body);

  response.assertStatus(200);
});
