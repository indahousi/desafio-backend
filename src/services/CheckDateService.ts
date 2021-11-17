import { IReservations } from '../interfaces/Reservations'

export async function checkDate(params: IReservations) {
    if(params.checkin_date > params.checkout_date) {
        return false
    } else {
        return true
    }
}