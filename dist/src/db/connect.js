"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connect = async () => {
    if (process.env.NODE_ENV === 'test') {
        const mongoUrl = process.env.MONGODB_URL;
        return await mongoose_1.default.connect(mongoUrl);
    }
    else {
        const mongoUrl = process.env.MONGODB_URL_TEST;
        return await mongoose_1.default.connect(mongoUrl);
    }
};
exports.connect = connect;
const close = () => mongoose_1.default.connection.close();
exports.close = close;
