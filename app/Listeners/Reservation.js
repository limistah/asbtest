"use strict";

const Reservation = (exports = module.exports = {});

const Ws = use("Ws");

Reservation.new = async bookings => {
  console.log("Notify the admin namespace about the event");
  const wsServer = Ws._wsServer;
  console.log(wsServer);
};
