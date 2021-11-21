import mongoose from "mongoose"
import {IReservations} from "../interfaces/Reservations"
import { IGuest } from "../interfaces/Guest"

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
        required: [true,'must provide check-out date'],
        default: false
    },
    number_guests: {
        type: Number,
        required: [true,'must provide number of guests'],
        default: false,
        min: [1,'number of guests must be greater than 0']
    },
    guest_data: {
        type: [GuestSchema],
        required: [true,'must provide guest data'],
        default: false,
        validate: {
            validator: function(guest: Array<IGuest>) {
                return guest.length > 0
            }    
        }    
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})
const Reservation = mongoose.model<IReservations>('Reservation', ReservationSchema)
export { Reservation }
