"use strict";

const Reservation = (exports = module.exports = {});

const Bookings = use("App/Models/Bookings");

Reservation.new = async bookings => {
  console.log("Notify the admin namespace about the event");
  for (const index in bookings) {
    if (bookings.hasOwnProperty(booking)) {
      const booking = bookings[index];

      const data = {
        room_id: booking.reservation.id,
        bed_spaces: booking.reservation.beds
      };

      await Bookings.create(data);
    }
  }
};
