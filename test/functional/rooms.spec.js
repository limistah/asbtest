"use strict";

const { test, trait } = use("Test/Suite")("Rooms");
const Room = use("App/Models/Room");
const defaultRooms = require("../../libs/defaultRooms");
trait("Test/ApiClient");

// test("POST /rooms returns 422 for invalid data", async ({ client }) => {
//   const duplicateRoom = Object.assign({}, defaultRooms[0]);
//   duplicateRoom.name = "trials";
//   const response = await client
//     .post("rooms")
//     .send(duplicateRoom)
//     .end();
//   response.assertStatus(400);
// });

test("can create rooms", async ({ client }) => {
  const response = await client
    .post("/rooms")
    .send({
      name: "name of room",
      type: "room type",
      bed_capacity: 10,
      available_beds: 2,
      cost_per_bed: 20,
      mixed: true
    })
    .end();
  response.assertStatus(200);
});

test("contains default rooms", async ({ client }) => {
  const response = await client.get("/rooms").end();
  response.assertStatus(200);
  response.assertJSONSubset({ rooms: defaultRooms });
});

// test("PATCH /rooms returns 422 for invalid data", async ({ client }) => {
//   const update = defaultRooms[0];

//   const response = await client
//     .patch("/rooms/12")
//     .send(update)
//     .end();
//   console.log(response.error);
//   response.assertStatus(422);
// });

test("can update a room", async ({ client }) => {
  const newRoom = await Room.create(defaultRooms[0]);

  const update = { type: "deluxe", name: "New Name" };

  const response = await client
    .patch(`/rooms/${newRoom.id}`)
    .send(update)
    .end();
  response.assertStatus(200);
  const _room = Object.assign({}, newRoom.toJSON(), update);
  delete _room.created_at;
  delete _room.updated_at;
  response.assertJSONSubset({
    room: _room
  });
});

test("can delete a room", async ({ client }) => {
  const newRoom = await Room.create(defaultRooms[0]);

  const response = await client.delete(`/rooms/${newRoom.id}`).end();
  console.log(response.error);
  response.assertStatus(200);
});
