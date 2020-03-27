"use strict";

/*
|--------------------------------------------------------------------------
| RoomSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

const Room = use("App/Models/Room");

class RoomSeeder {
  async run() {
    const rooms = [
      {
        name: "Mixed Dorm Room",
        type: "dorm",
        bed_capacity: "4",
        available_beds: "4",
        cost_per_bed: "20",
        mixed: "true"
      },
      {
        name: "Mixed Dorm Room",
        type: "dorm",
        bed_capacity: "8",
        available_beds: "8",
        cost_per_bed: "20",
        mixed: "true"
      },
      {
        name: "Deluxe Room",
        type: "deluxe",
        bed_capacity: "1",
        available_beds: "1",
        cost_per_bed: "50",
        mixed: "false"
      },
      {
        name: "Standard Double Room",
        type: "standard",
        bed_capacity: "2",
        available_beds: "2",
        cost_per_bed: "30",
        mixed: "true"
      }
    ];
    for (let i = 0; i < rooms.length; i++) {
      const roomData = rooms[i];
      const room = new Room();
      Object.assign(room, roomData);
      await room.save();
    }
  }
}

module.exports = RoomSeeder;
