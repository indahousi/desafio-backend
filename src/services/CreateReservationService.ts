import { IReservations } from '../interfaces/Reservations'
import { Reservation } from '../models/Reservations'

class CreateReservationService {
    async execute({ apartment_name, checkin_date, checkout_date, number_guests, guest_data }: IReservations): Promise<IReservations> {
        
        const reservation = await Reservation.create({ 
            apartment_name,
            checkin_date,
            checkout_date,
            number_guests,
            guest_data })
     
        return reservation;
    }

}

export { CreateReservationService }