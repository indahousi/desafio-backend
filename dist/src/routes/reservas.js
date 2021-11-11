"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const ReservationController_1 = require("../controllers/ReservationController");
const router = express_1.default.Router();
exports.router = router;
router.route("/").get(ReservationController_1.ReservationController.getAllReservations);
router.route("/create").post(ReservationController_1.ReservationController.createReserve);
router.route("/:id").get(ReservationController_1.ReservationController.getReserve);
router.route("/update/:id").put(ReservationController_1.ReservationController.updateReserve);
router.route("/delete/:id").delete(ReservationController_1.ReservationController.deleteReserve);
router.route("/getByDate").post(ReservationController_1.ReservationController.getReservationsByDate);
