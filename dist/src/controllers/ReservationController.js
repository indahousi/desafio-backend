"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationController = void 0;
const CreateReservationService_1 = require("../services/CreateReservationService");
const FindReservationByIdService_1 = require("../services/FindReservationByIdService");
const DeleteReservationService_1 = require("../services/DeleteReservationService");
const UpdateReservationService_1 = require("../services/UpdateReservationService");
const GetAllReservationsService_1 = require("../services/GetAllReservationsService");
const FindReservationByDateService_1 = require("../services/FindReservationByDateService");
class ReserveController {
    async createReserve(request, response) {
        try {
            const checkReservation = await (0, FindReservationByDateService_1.findReservationByDate)({ ...request.body });
            if (checkReservation.length > 0) {
                return response.status(400).json({ error: 'Reservation already exists' });
            }
            const reservation = await (0, CreateReservationService_1.createReservation)(request.body);
            return response.status(201).json(reservation);
        }
        catch (error) {
            return response.status(400).json({ message: error });
        }
    }
    async deleteReserve(request, response) {
        const reserveId = request.params.id;
        try {
            const reserve = await (0, FindReservationByIdService_1.findReservationById)(reserveId);
            if (!reserve) {
                return response.sendStatus(404);
            }
            const deleteReservation = await (0, DeleteReservationService_1.deleteReserve)(reserveId);
            return response.sendStatus(200);
        }
        catch (error) {
            return response.status(400).json({ message: error });
        }
    }
    async updateReserve(request, response) {
        const reserveId = request.params.id;
        const update = request.body;
        try {
            const idCheck = await (0, FindReservationByIdService_1.findReservationById)(reserveId);
            if (!idCheck) {
                return response.sendStatus(404);
            }
            const updatedReservation = await (0, UpdateReservationService_1.findAndUpdateReservations)(reserveId, update, { new: true, runValidators: true });
            return response.status(200).json(updatedReservation);
        }
        catch (error) {
            return response.status(400).json({ message: error });
        }
    }
    async getReserve(request, response) {
        const reserveId = request.params.id;
        try {
            const reserve = await (0, FindReservationByIdService_1.findReservationById)(reserveId);
            if (!reserve) {
                return response.sendStatus(404);
            }
            return response.status(200).json(reserve);
        }
        catch (error) {
            return response.status(400).json({ message: error });
        }
    }
    async getAllReservations(request, response) {
        try {
            const reservations = await (0, GetAllReservationsService_1.getAllReservations)({});
            if (reservations) {
                return response.status(200).json({ count: reservations.length, reservations });
            }
        }
        catch (error) {
            return response.status(400).json({ error: 'Reservations not found' });
        }
    }
    async getReservationsByDate(request, response) {
        try {
            const reservations = await (0, FindReservationByDateService_1.findReservationByDate)({ ...request.body }, { sort: { checkin_date: 'asc' } });
            if (reservations) {
                return response.status(200).json({ count: reservations.length, reservations });
            }
        }
        catch (error) {
            return response.status(400).json({ error: 'Reservations not found' });
        }
    }
}
const ReservationController = new ReserveController();
exports.ReservationController = ReservationController;
