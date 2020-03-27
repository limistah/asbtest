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
const defaultRooms = require("../../libs/defaultRooms");

const Room = use("App/Models/Room");

class RoomSeeder {
  async run() {
    for (let i = 0; i < defaultRooms.length; i++) {
      const roomData = defaultRooms[i];
      const room = new Room();
      Object.assign(room, roomData);
      await room.save();
    }
  }
}

module.exports = RoomSeeder;
