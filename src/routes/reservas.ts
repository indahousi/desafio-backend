import express from "express"
import { getAllReservationsController} from "../controllers/GetAllReservationsController"
import { createReservationsController} from "../controllers/CreateReservationController"
import { getReservationController} from "../controllers/GetReservationController"
import { updateReservationController} from "../controllers/UpdateReservationController"
import { deleteReservationController} from "../controllers/DeleteReservationController"

const router = express.Router()

router.route("/")
    .get(getAllReservationsController.handle)
    .post(createReservationsController.handle)
router.route("/:id")
    .get(getReservationController.handle)
    .put(updateReservationController.handle)
    .delete(deleteReservationController.handle)


export { router }