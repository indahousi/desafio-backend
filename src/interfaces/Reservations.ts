import { Document } from "mongoose"

export interface IReservations extends Document {
    apartment_name: string;
    checkin_date: Date;
    checkout_date: Date;
    number_guests: Number;
    guest_data: {
        guest_name: [string];
        guest_email: [string];
    }
}