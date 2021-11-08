import { IReservations } from '../interfaces/Reservations'
import { Reservation } from '../models/Reservations'
import { FilterQuery, QuerySelector, QueryOptions } from "mongoose";

export async function findReservationByDate(query: IReservations, options: QueryOptions = { lean: true }) {
    const reservations = await Reservation.find({
        $and: [
            { apartment_name: query.apartment_name },
            { $or:[
                { checkin_date: { $gte: query.checkin_date, $lt: query.checkout_date } },
                { checkout_date: { $gte: query.checkin_date, $lt: query.checkout_date } }
            ]}
        ]
    }, {}, options)    
    return reservations
}