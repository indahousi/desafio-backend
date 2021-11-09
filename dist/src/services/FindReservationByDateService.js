"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findReservationByDate = void 0;
const Reservations_1 = require("../models/Reservations");
async function findReservationByDate(query, options = { lean: true }) {
    const reservations = await Reservations_1.Reservation.find({
        $and: [
            { apartment_name: query.apartment_name },
            { $or: [
                    { checkin_date: { $gte: query.checkin_date, $lt: query.checkout_date } },
                    { checkout_date: { $gte: query.checkin_date, $lt: query.checkout_date } }
                ] }
        ]
    }, {}, options);
    return reservations;
}
exports.findReservationByDate = findReservationByDate;
