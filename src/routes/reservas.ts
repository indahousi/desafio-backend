import express from "express"
import { ReservationController } from "../controllers/ReservationController"

const router = express.Router()

router.route("/")
    .get(ReservationController.getAllReservations)
    .post(ReservationController.createReserve)
router.route("/:id")
    .get(ReservationController.getReserve)
    .put(ReservationController.updateReserve)
    .delete(ReservationController.deleteReserve)
router.route("/getByDate")
    .post(ReservationController.getReservationsByDate)

export { router }