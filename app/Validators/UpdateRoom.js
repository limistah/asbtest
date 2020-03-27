"use strict";

class Room {
  get rules() {
    return {
      name: "string|min:3",
      type: "string|min:3",
      bed_capacity: "number",
      available_beds: "min:1|number",
      cost_per_bed: "number|min:1",
      mixed: "boolean"
    };
  }
}

module.exports = Room;
