import { Request, Response } from 'express';
import { IReservations } from '../interfaces/Reservations';
import { findReservationById } from '../services/FindReservationByIdService';
import { deleteReserve } from '../services/DeleteReservationService';


class DeleteReservationController {
    async handle(request: Request<IReservations>, response: Response) {
    
    const reserveId = request.params.id
    
    const reserve = await findReservationById(reserveId)

    if (!reserve) {
        return response.sendStatus(404)
    }

    const deleteReservation = await deleteReserve(reserveId)

    return response.status(200)

    }
}

const deleteReservationController = new DeleteReservationController()

export { deleteReservationController };