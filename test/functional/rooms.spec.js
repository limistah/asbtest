"use strict";

const { test, trait } = use("Test/Suite")("Rooms");
const Room = use("App/Models/Room");
trait("Test/ApiClient");

test("can create rooms", async ({ client }) => {
  const response = await client
    .post("/rooms")
    .send({
      name: "name of room",
      type: "room type",
      bed_capacity: "10",
      available_beds: "2",
      cost_per_bed: 20,
      mixed: "true"
    })
    .end();

  console.log(response.error);
  response.assertStatus(200);
});
