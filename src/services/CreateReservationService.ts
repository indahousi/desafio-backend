import { IReservations } from '../interfaces/Reservations'
import { Reservation } from '../models/Reservations'

export async function createReservation(data: IReservations){
    const reservation = await Reservation.create(data)
 
    return reservation;
}