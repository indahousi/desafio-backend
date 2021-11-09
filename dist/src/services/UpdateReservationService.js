"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAndUpdateReservations = void 0;
const Reservations_1 = require("../models/Reservations");
async function findAndUpdateReservations(query, update, options) {
    const reservation = await Reservations_1.Reservation.findOneAndUpdate(query, update, options);
    return reservation;
}
exports.findAndUpdateReservations = findAndUpdateReservations;
