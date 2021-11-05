import { Reservation } from '../models/Reservations'

class GetAllReservationsService {

    async execute() {
        const reservations = await Reservation.find({})
        return reservations
    }

}

export { GetAllReservationsService }