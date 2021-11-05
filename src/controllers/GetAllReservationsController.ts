import { Request, Response } from 'express';
import { GetAllReservationsService } from '../services/GetAllReservationsService';


class GetAllReservationsController {
    async handle(request: Request, response: Response) {
        
        const getAllReservationsService = new GetAllReservationsService();

        const reservations = await getAllReservationsService.execute();

        return response.json(reservations);
    }
}

const getAllReservationsController = new GetAllReservationsController()

export { getAllReservationsController };