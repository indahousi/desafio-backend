import express from "express"
import { GetAllReservationsController} from "../controllers/GetAllReservationsController"
import { CreateReservationController} from "../controllers/CreateReservationController"
import { GetReservationController} from "../controllers/GetReservationController"
import { UpdateReservationController} from "../controllers/UpdateReservationController"
import { DeleteReservationController} from "../controllers/DeleteReservationController"

const router = express.Router()

router.route("/").get(GetAllReservationsController).post(CreateReservationController)
router.route("/:id").get(GetReservationController).put(UpdateReservationController).delete(DeleteReservationController)


export { router }