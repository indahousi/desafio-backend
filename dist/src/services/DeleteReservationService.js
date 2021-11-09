"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReserve = void 0;
const Reservations_1 = require("../models/Reservations");
async function deleteReserve(query) {
    return await Reservations_1.Reservation.findOneAndDelete({ _id: query });
}
exports.deleteReserve = deleteReserve;
