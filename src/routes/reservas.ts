import express from "express"
import { getAllReservationsController} from "../controllers/GetAllReservationsController"
import { createReservationsController} from "../controllers/CreateReservationController"
// import { GetReservationController} from "../controllers/GetReservationController"
// import { UpdateReservationController} from "../controllers/UpdateReservationController"
// import { DeleteReservationController} from "../controllers/DeleteReservationController"

const router = express.Router()

router.route("/")
    .get(getAllReservationsController.handle)
    .post(createReservationsController.handle)
// router.route("/:id")
//     .get(GetReservationController)
//     .put(UpdateReservationController)
//     .delete(DeleteReservationController)


export { router }