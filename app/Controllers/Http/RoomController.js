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
    return response.json({ room }, 201);
  }

  async index({ response }) {
    const rooms = await Database.table("dorm_rooms");
    return response.json({ rooms });
  }

  async update({ response, request }) {
    await Room.query()
      .where("id", request.params.id)
      .update(request.all());
    const room = await Room.find(request.params.id);
    return response.json({ room });
  }

  async destroy({ response, request }) {
    const room = await Room.find(request.params.id);
    return response.json({ room: room.delete() });
  }
}

module.exports = RoomController;
