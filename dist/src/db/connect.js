"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let MONGODB_URI = process.env.PROD_MONGODB || 'mongodb://127.0.0.1:27017/desafio';
const connectDB = () => {
    return mongoose_1.default
        .connect(MONGODB_URI);
};
exports.connectDB = connectDB;
