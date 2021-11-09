import { IReservations } from '../interfaces/Reservations'
import { Reservation } from '../models/Reservations'
import { FilterQuery, QueryOptions } from "mongoose";

export async function getAllReservations(query: FilterQuery<IReservations>, options: QueryOptions = { lean: true }) {
    
    const reservations = await Reservation.find(query, {}, options)
    return reservations
}