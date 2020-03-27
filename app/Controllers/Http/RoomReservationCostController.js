"use strict";

const Room = use("App/Models/Room");
const Event = use("Event");

class RoomReservationCostController {
  async store({ response, request }) {
    const data = request.only("reservations");
    let totalCost = 0;
    const bookings = {};
    for (let index = 0; index < data.reservations.length; index++) {
      const reservation = data.reservations[index];
      let room = await Room.query()
        .where("id", reservation.id)
        .where("available_beds", ">", 0)
        .first();

      if (room) {
        const costPerBed = room.cost_per_bed;
        totalCost = totalCost + costPerBed * reservation.beds;
        bookings[reservation.id] = { reservation, room };
      }
    }
    return response.json({ bookings, totalCost }, 201);
  }
}

module.exports = RoomReservationCostController;
