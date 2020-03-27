"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CreateBookingSchema extends Schema {
  up() {
    this.create("create_bookings", table => {
      table.increments();
      table.timestamps();
      table.timestamps();
      table.string("room_id");
      table.integer("bed_spaces");
    });
  }

  down() {
    this.drop("create_bookings");
  }
}

module.exports = CreateBookingSchema;
