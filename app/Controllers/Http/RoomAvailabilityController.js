"use strict";

const Room = use("App/Models/Room");

class RoomAvailabilityController {
  async index({ response, request }) {
    const rooms = await Room.query()
      .where("available_beds", ">", 0)
      .fetch();
    return response.json({ rooms: rooms });
  }
}

module.exports = RoomAvailabilityController;
