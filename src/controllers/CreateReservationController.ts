import { Request, Response } from 'express';
import { CreateReservationService } from '../services/CreateReservationService';


class CreateReservationController {
    async handle(request: Request, response: Response) {
        
        const createReservationService = new CreateReservationService()

        try {
            const reservation = await createReservationService.execute(request.body)
            return response.status(201).json(reservation)
        } catch (error) {
            return response.status(400).json({message : error})
        }

    }
}

const createReservationsController = new CreateReservationController()

export { createReservationsController };