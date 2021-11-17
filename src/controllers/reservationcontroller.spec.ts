import mongoose from 'mongoose'
import request from 'supertest'
import App from '../config/App'

beforeAll(done => {
    done()
})

const reserveTest = {
      _id: '6189ed211ce71374b338850c',
      apartment_name: 'teste',
      checkin_date: '2021-11-07',
      checkout_date: '2021-11-10',
      number_guests: 1,
      guest_data:[
        {
            guest_name: 'Teste',
            guest_email: 'test@gmail.com'
        }
      ] 
}

describe('Reservation Controller', () => {
    
    test('Should return 201 if created new user', async () => {
        let response = await request(App)
            .post(`/api/v1/reserva/`)
            .send(reserveTest)
            expect(response.statusCode).toBe(201)            
    })

    test('Should return 400 if there is a reservation in the desired period', async () => {
        
        let response = await request(App)
        .post(`/api/v1/reserva/`)
        .send(reserveTest)
        expect(response.statusCode).toBe(400)    
    })

    test('Should return 200 if success get all reservations', async () => {
        let test = await request(App)
            .get('/api/v1/reserva/')
            expect(test.statusCode).toBe(200)
    })

    test('Should return 200 if success get reserve by ID', async () => {
        let test = await request(App)
            .get(`/api/v1/reserva/${reserveTest._id}`)
            expect(test.statusCode).toBe(200)
    })

    test('Should return 200 if success get reserve by date', async () => {
        let test = await request(App)
            .post(`/api/v1/reserva/getByDate`)
            .send({ ...reserveTest })
            expect(test.statusCode).toBe(200)
    })

    test('Should return 200 if success update reserve', async () => {
        let test = await request(App)
            .put(`/api/v1/reserva/${reserveTest._id}`)
            .send({
                apartment_name: 'teste',
                checkin_date: '2021-11-01',
                checkout_date: '2021-11-05',
                number_guests: 1,
                guest_data:[
                  {
                      guest_name: 'Teste',
                      guest_email: 'test@gmail.com'
                  }
                ] 
            })
            expect(test.statusCode).toBe(200)
    })

    test('Should return 200 if success delete reserve', async () => {
        let test = await request(App)
            .delete(`/api/v1/reserva/${reserveTest._id}`)
            expect(test.statusCode).toBe(200)
    })
})

afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close()
    done()
})