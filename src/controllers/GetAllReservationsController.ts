import { Request, Response } from 'express';
import { GetAllReservationsService } from '../services/GetAllReservationsService';


class GetAllReservationsController {
    async handle(request: Request, response: Response) {
        const { name, email, admin, password} = request.body;

        const createUserService = new GetAllReservationsService();

        const user = await createUserService.execute({ name, email, admin, password});

        return response.json(user);
    }
}

export { GetAllReservationsController };