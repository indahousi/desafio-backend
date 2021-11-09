"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findReservationById = void 0;
const Reservations_1 = require("../models/Reservations");
async function findReservationById(query, options = { lean: true }) {
    const reservations = await Reservations_1.Reservation.findById(query, {}, options);
    return reservations;
}
exports.findReservationById = findReservationById;
