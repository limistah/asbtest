"use strict";

const { test, trait, before } = use("Test/Suite")("Room Availability");
trait("Test/ApiClient");
const defaultRooms = require("../../libs/defaultRooms");
const ace = require("@adonisjs/ace");

before(async () => {
  await ace.call("migration:refresh");
  await ace.call("seed");
});

test("make sure 2 + 2 is 4", async ({ assert }) => {
  assert.equal(2 + 2, 4);
});

test("returns dorms with available bedspace", async ({ client }) => {
  const response = await client.get("/room/available").end();
  response.assertStatus(200);
  response.assertJSONSubset({ rooms: [defaultRooms[0]] });
});
