import { Document } from "mongoose"
import { IGuest } from "./Guest"

export interface IReservations extends Document {
    apartment_name: string;
    checkin_date: Date;
    checkout_date: Date;
    number_guests: number;
    guest_data: Array<IGuest>;
}