import { Request, Response } from 'express';
import { IReservations } from '../interfaces/Reservations';
import { findReservationById } from '../services/FindReservationByIdService';
import { findAndUpdateReservations } from '../services/UpdateReservationService';


class UpdateReservationController {
    async handle(request: Request<IReservations>, response: Response) {
    
    const reserveId = request.params.id
    
    const update = request.body

    const idCheck = await findReservationById(reserveId);

    if (!idCheck) {
        return response.sendStatus(404)
    }

    const updatedReservation = await findAndUpdateReservations(reserveId, update, { new: true, runValidators: true })

    return response.status(200).json(updatedReservation)

    }
}

const updateReservationController = new UpdateReservationController()

export { updateReservationController };