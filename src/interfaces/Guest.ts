import { Document } from "mongoose"

export interface IGuest extends Document {
    guest_name: String;
    guest_email: String;
}