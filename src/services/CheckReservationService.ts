import { IReservations } from '../interfaces/Reservations'
import { Reservation } from '../models/Reservations'
import { QueryOptions } from "mongoose";

export async function checkReservationExists(query: IReservations, options: QueryOptions = { lean: true }) {
    return Reservation.find({
        $and: [
            { apartment_name: query.apartment_name },
            { $or:[
                { checkin_date: { $gte: new Date(new Date(query.checkin_date).setHours(0, 0, 0)), $lt: new Date(new Date(query.checkout_date).setHours(23, 59, 59))} },
                { checkout_date: { $gte: new Date(new Date(query.checkin_date).setHours(0, 0, 0)), $lt: new Date(new Date(query.checkout_date).setHours(23, 59, 59))} }
            ]}
        ]
    }, {}, options)    
}