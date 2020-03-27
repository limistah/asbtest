"use strict";

class BookingController {
  constructor({ socket, request }) {
    this.socket = socket;
    this.request = request;
  }
  onMessage() {
    this.socket.emit("bookings", 200);
  }
}

module.exports = BookingController;
