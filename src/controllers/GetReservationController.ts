import { Request, Response } from 'express';
import { IReservations } from '../interfaces/Reservations';
import { findReservationById } from '../services/FindReservationByIdService';

class GetReservationController {
    async handle(request: Request<IReservations>, response: Response) {
    
    const reserveId = request.params.id
    
    const reserve = await findReservationById(reserveId);

    if (!reserve) {
        return response.sendStatus(404);
    }

    return response.status(200).json(reserve)

    }
}

const getReservationController = new GetReservationController()

export { getReservationController };