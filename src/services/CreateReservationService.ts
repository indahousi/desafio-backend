import { IReservations } from '../interfaces/Reservations'
import { Reservation } from '../models/Reservations'

export async function createReservation(data: IReservations){
    return Reservation.create(data)
}