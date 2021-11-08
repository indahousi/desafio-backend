import { IReservations } from '../interfaces/Reservations'
import { Reservation } from '../models/Reservations'
import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";

export async function findAndUpdateReservations(
    query: FilterQuery<IReservations>,
    update: UpdateQuery<IReservations>,
    options: QueryOptions
  ) {
    
        const reservation = await Reservation.findOneAndUpdate(query, update, options);
        return reservation
      
  }
