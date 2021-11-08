import { IReservations } from '../interfaces/Reservations'
import { Reservation } from '../models/Reservations'
import { FilterQuery } from "mongoose";

export async function deleteReserve(query: FilterQuery<IReservations>) {
    return await Reservation.findOneAndDelete({ _id: query });
  }