import mongoose from "mongoose"
import {IReservations} from "../interfaces/Reservations"

const GuestSchema = new mongoose.Schema({
    guest_name: {
        type: String,
        required: [true,'must provide name'],
        trim: true,
        maxlength:[50, 'name can not be more than 50 char']
    },
    guest_email: {
        type: String,
        required: [true,'must provide email'],
        trim: true,
        maxlength:[30, 'email can not be more than 30 char']
    }
})

const ReservationSchema = new mongoose.Schema({
    apartment_name: {
        type: String,
        required: [true,'must provide name'],
        trim: true,
        maxlength:[20, 'name can not be more than 20 char']
    },
    checkin_date: {
        type: Date,
        required: [true,'must provide check-in date'],
        default: false
    },
    checkout_date: {
        type: Date,
        required: [true,'must provide check-in date'],
        default: false
    },
    number_guests: {
        type: Number,
        required: [true,'must provide number of guests'],
        default: false
    },
    guest_data: [GuestSchema],
    timestamp: {
        type: Date,
        default: Date.now
    }
})
const Reservation = mongoose.model<IReservations>('Reservation', ReservationSchema)
export { Reservation }
