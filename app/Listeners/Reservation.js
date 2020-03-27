"use strict";

const Reservation = (exports = module.exports = {});

const Booking = use("App/Models/Booking");

Reservation.new = async bookings => {
  console.log("Notify the admin namespace about the event");
  for (const index in bookings) {
    if (bookings.hasOwnProperty(booking)) {
      const booking = bookings[index];

      const data = {
        room_id: booking.reservation.id,
        bed_spaces: booking.reservation.beds
      };

      await Booking.create(data);
    }
  }
};
