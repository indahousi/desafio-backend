import { Request, Response } from 'express';
import { createReservation } from '../services/CreateReservationService';
import { IReservations } from '../interfaces/Reservations';
import { findReservationById } from '../services/FindReservationByIdService';
import { deleteReserve } from '../services/DeleteReservationService';
import { findAndUpdateReservations } from '../services/UpdateReservationService';
import { getAllReservations } from '../services/GetAllReservationsService';
import { findReservationByDate } from '../services/FindReservationByDateService';


class ReserveController {

    public  async createReserve (request: Request<IReservations>, response: Response) {
        try {
            const checkReservation = await findReservationByDate({...request.body})
            if (checkReservation.length > 0) {
                return response.status(400).json({ error: 'Reservation already exists' })
            }          
            const reservation = await createReservation(request.body)
            return response.status(201).json(reservation)
        } catch (error) {
            return response.status(400).json({message : error})
        }                        
    }

    public async deleteReserve (request: Request<IReservations>, response: Response){
        
        const reserveId = request.params.id

        try {
            const reserve = await findReservationById(reserveId)    
            if (!reserve) {
                return response.sendStatus(404)
            }
            const deleteReservation = await deleteReserve(reserveId)
            return response.sendStatus(200)
        } catch (error) {
            return response.status(400).json({message : error})
        }
    }

    public async updateReserve (request: Request<IReservations>, response: Response) {
        
        const reserveId = request.params.id
        const update = request.body
        
        try {
            const idCheck = await findReservationById(reserveId);
            if (!idCheck) {
                return response.sendStatus(404)
            }
            const updatedReservation = await findAndUpdateReservations(reserveId, update, { new: true, runValidators: true })
            return response.status(200).json(updatedReservation) 
        } catch (error) {
            return response.status(400).json({message : error})
        }               
    }

    public async getReserve (request: Request<IReservations>, response: Response) {
                
        const reserveId = request.params.id

        try {
            const reserve = await findReservationById(reserveId)
            if (!reserve) {
                return response.sendStatus(404);
            }
            return response.status(200).json(reserve)
        } catch (error) {
            return response.status(400).json({message : error})
        }    
        
    }

    public async getAllReservations (request: Request, response: Response) {
        
        try {
            const reservations = await getAllReservations({})
            if (reservations) {
                return response.status(200).json({count: reservations.length, reservations})
            }
        } catch (error) {
            return response.status(400).json({ error: 'Reservations not found' })
        }
    }

    public async getReservationsByDate (request: Request<IReservations>, response: Response) {
        
        try {
            const reservations = await findReservationByDate({...request.body},{sort:{checkin_date: 'asc'}})    
            if (reservations) {
                return response.status(200).json({count: reservations.length, reservations})
            } 
        } catch (error){
            return response.status(400).json({ error: 'Reservations not found' })
        }
    }
}

const ReservationController = new ReserveController()

export { ReservationController };