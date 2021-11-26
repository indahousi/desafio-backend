import { Document } from "mongoose"

export interface IGuest extends Document {
    guest_name: string;
    guest_email: string;
}