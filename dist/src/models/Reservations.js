"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservation = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const GuestSchema = new mongoose_1.default.Schema({
    guest_name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [50, 'name can not be more than 50 char']
    },
    guest_email: {
        type: String,
        required: [true, 'must provide email'],
        trim: true,
        maxlength: [30, 'email can not be more than 30 char']
    }
});
const ReservationSchema = new mongoose_1.default.Schema({
    apartment_name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 char']
    },
    checkin_date: {
        type: Date,
        required: [true, 'must provide check-in date'],
        default: false
    },
    checkout_date: {
        type: Date,
        required: [true, 'must provide check-out date'],
        default: false
    },
    number_guests: {
        type: Number,
        required: [true, 'must provide number of guests'],
        default: false
    },
    guest_data: [GuestSchema],
    timestamp: {
        type: Date,
        default: Date.now
    }
});
const Reservation = mongoose_1.default.model('Reservation', ReservationSchema);
exports.Reservation = Reservation;
