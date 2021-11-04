import mongoose from 'mongoose'

const ReservationsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'must provide name'],
        trim: true,
        maxlength:[20, 'name can not be more than 20 char']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Reservations', ReservationsSchema)