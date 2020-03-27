"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

Route.resource("rooms/available", "RoomAvailabilityController").only(["index"]);

Route.resource("rooms/reservation/cost", "RoomReservationCostController").only([
  "store"
]);

Route.resource("rooms/reservation", "RoomReservationController").only([
  "store"
]);

Route.resource("rooms", "RoomController")
  .only(["store", "show", "index", "update", "destroy"])
  .middleware(new Map([[["rooms.update", "rooms.destroy"], ["roomExists"]]]))
  .validator(new Map([[["rooms.store"], ["StoreRoom"]]]));

Route.resource("room/available", "RoomAvailabilityController");
