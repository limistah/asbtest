"use strict";

class Room {
  get rules() {
    return {
      name: "required|string|min:3",
      type: "required|string|min:3",
      bed_capacity: "required|number",
      available_beds: "min:1|number",
      cost_per_bed: "required|number|min:1",
      mixed: "required|boolean"
    };
  }
}

module.exports = Room;
