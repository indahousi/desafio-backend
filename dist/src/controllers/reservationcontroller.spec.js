"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const supertest_1 = __importDefault(require("supertest"));
const App_1 = __importDefault(require("../config/App"));
beforeAll(done => {
    done();
});
const reserveTest = {
    _id: '6189ed211ce71374b338850c',
    apartment_name: 'teste',
    checkin_date: '2021-11-07 10:30',
    checkout_date: '2021-11-10 12:00',
    number_guests: 1,
    guest: {
        name: 'Teste',
        email: 'test@gmail.com'
    }
};
describe('Reservation Controller', () => {
    test('Should return 201 if created new user', async () => {
        let response = await (0, supertest_1.default)(App_1.default)
            .post(`/api/v1/reserva/create/`)
            .send(reserveTest);
        expect(response.statusCode).toBe(201);
    });
    test('Should return 400 if there is a reservation in the desired period', async () => {
        let response = await (0, supertest_1.default)(App_1.default)
            .post(`/api/v1/reserva/create/`)
            .send(reserveTest);
        expect(response.statusCode).toBe(400);
    });
    test('Should return 200 if success get all reservations', async () => {
        let test = await (0, supertest_1.default)(App_1.default)
            .get('/api/v1/reserva/');
        expect(test.statusCode).toBe(200);
    });
    test('Should return 200 if success get reserve by ID', async () => {
        let test = await (0, supertest_1.default)(App_1.default)
            .get(`/api/v1/reserva/${reserveTest._id}`);
        expect(test.statusCode).toBe(200);
    });
    test('Should return 200 if success get reserve by date', async () => {
        let test = await (0, supertest_1.default)(App_1.default)
            .post(`/api/v1/reserva/getByDate`)
            .send({ ...reserveTest });
        expect(test.statusCode).toBe(200);
    });
    test('Should return 200 if success update reserve', async () => {
        let test = await (0, supertest_1.default)(App_1.default)
            .put(`/api/v1/reserva/update/${reserveTest._id}`)
            .send({
            number_guests: 2,
            guest: {
                name: 'TesteUpdate',
                email: 'TesteUpdate@gmail.com'
            }
        });
        expect(test.statusCode).toBe(200);
    });
    test('Should return 200 if success delete reserve', async () => {
        let test = await (0, supertest_1.default)(App_1.default)
            .delete(`/api/v1/reserva/delete/${reserveTest._id}`);
        expect(test.statusCode).toBe(200);
    });
});
afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose_1.default.connection.close();
    done();
});
