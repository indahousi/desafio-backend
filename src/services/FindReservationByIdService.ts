import { IReservations } from '../interfaces/Reservations'
import { Reservation } from '../models/Reservations'
import { FilterQuery, QueryOptions } from "mongoose";

export async function findReservationById(query: FilterQuery<IReservations>, options: QueryOptions = { lean: true }) {
    return Reservation.findById(query, {}, options)    
}