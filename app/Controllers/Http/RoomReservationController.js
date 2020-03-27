"use strict";

const Room = use("App/Models/Room");

class RoomReservationController {
  async store({ response, request }) {
    const data = request.only("reservations");
    let room = {};

    const bookings = {};
    for (let index = 0; index < data.reservations.length; index++) {
      const reservation = data.reservations[index];
      room = await Room.query()
        .where("id", reservation.id)
        .where("available_beds", ">", reservation.beds)
        .first();

      if (room && room.available_beds >= reservation.beds) {
        await Room.query()
          .where("id", reservation.id)
          .update({
            available_beds: room.available_beds - reservation.beds
          });
        bookings[reservation.id] = { reservation, room };
      }
    }
    return response.json({ bookings }, 201);
  }
}

module.exports = RoomReservationController;
