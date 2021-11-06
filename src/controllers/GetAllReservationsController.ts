import { Request, Response } from 'express';
import { getAllReservations } from '../services/GetAllReservationsService';


class GetAllReservationsController {
    async handle(request: Request, response: Response) {
        
       
            const reservations = await getAllReservations({});

            if (reservations) {
                return response.status(200).json({count: reservations.length, reservations})
            } else {
                return response.status(400).json({ error: 'Reservations not found' })
            }
    }
}

const getAllReservationsController = new GetAllReservationsController()

export { getAllReservationsController };