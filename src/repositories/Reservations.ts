import { Schema, model, Document } from 'mongoose'
import { Reservation } from '../models/Reservations'
import { IReservations} from '../interfaces/Reservations'



// class ReservationsRepository extends Document {
    
    // public async createReservation({ apartment_name, checkin_date, checkout_date, number_guests, guest_data }) {
        
    //     const createReservation = await Reservation.create({ apartment_name, checkin_date, checkout_date, number_guests, guest_data })
    //     await Reservation.save(createReservation)
    //     return createReservation
    // }
    
// }

// const reservationsRepository = new ReservationsRepository()
// export { reservationsRepository };

