"use strict";

const Room = use("App/Models/Room");

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
}

module.exports = RoomController;
