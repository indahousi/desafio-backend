"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReservation = void 0;
const Reservations_1 = require("../models/Reservations");
async function createReservation(data) {
    const reservation = await Reservations_1.Reservation.create(data);
    return reservation;
}
exports.createReservation = createReservation;
