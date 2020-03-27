"use strict";

class BookingController {
  constructor({ socket, request }) {
    this.socket = socket;
    this.request = request;
  }
  async onMessage() {
    const Booking = use("App/Models/Booking");
    this.socket.emit("bookings", await Booking.all());
  }
}

module.exports = BookingController;
