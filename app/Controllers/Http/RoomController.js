"use strict";

const Room = use("App/Models/Room");
const Database = use("Database");

class RoomController {
  async store({ response, request }) {
    const room = await Room.create(
      request.only([
        "name",
        "type",
        "mixed",
        "bed_capacity",
        "available_beds",
        "cost_per_bed"
      ])
    );
    return response.json({ room });
  }

  async index({ response }) {
    const rooms = await Database.table("dorm_rooms");
    return response.json({ rooms });
  }

  async index({ response, request }) {
    const rooms = await Database.table("dorm_rooms").where(
      "id",
      request.params.id
    );
    return response.json({ rooms });
  }
}

module.exports = RoomController;
