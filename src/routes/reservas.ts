import express from "express"
import { ReservationController } from "../controllers/ReservationController"

const router = express.Router()

router.route("/").get(ReservationController.getAllReservations)
router.route("/create").post(ReservationController.createReserve)
router.route("/:id").get(ReservationController.getReserve)
router.route("/update/:id").put(ReservationController.updateReserve)
router.route("/delete/:id").delete(ReservationController.deleteReserve)
router.route("/getByDate").post(ReservationController.getReservationsByDate)

export { router }