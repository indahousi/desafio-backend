"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reservas_1 = require("../routes/reservas");
const connect_1 = require("../db/connect");
const cors_1 = __importDefault(require("cors"));
const config_swagger_json_1 = __importDefault(require("./config-swagger.json"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.initializeMiddlewares();
        this.initializeControllers();
        this.initializeDatabase();
        this.initializeDocumentation();
    }
    initializeMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)({
            origin: '*',
        }));
    }
    initializeControllers() {
        this.app.use('/api/v1/reserva', reservas_1.router);
    }
    initializeDatabase() {
        try {
            (0, connect_1.connect)();
        }
        catch (error) {
            console.log(error);
        }
    }
    initializeDocumentation() {
        this.app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(config_swagger_json_1.default));
    }
}
exports.default = new App().app;
