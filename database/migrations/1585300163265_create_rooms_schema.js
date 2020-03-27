"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CreateRoomsSchema extends Schema {
  up() {
    this.createIfNotExists("rooms", table => {
      table.increments();
      table.timestamps();
      table.string("name");
      table.string("type");
      table.enu("mixed", [true, false]);
      table.string("bed_capacity");
      table.string("available_beds");
      table.integer("cost_per_bed");
    });
  }

  down() {
    this.dropIfExists("rooms");
  }
}

module.exports = CreateRoomsSchema;
