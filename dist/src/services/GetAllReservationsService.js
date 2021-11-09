"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllReservations = void 0;
const Reservations_1 = require("../models/Reservations");
async function getAllReservations(query, options = { lean: true }) {
    const reservations = await Reservations_1.Reservation.find(query, {}, options);
    return reservations;
}
exports.getAllReservations = getAllReservations;
