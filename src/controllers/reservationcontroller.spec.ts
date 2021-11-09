import { ReservationController } from './ReservationController'
import request from 'supertest'
import { up } from '../server'

describe('Reservation Controller', () => {
    // test('Should return 400 if check checkReservation > 0', async () => {

    //     const createTest = {
    //         body: {
    //             apartment_name: 'teste',
    //             checkIn: '2021-11-07 10:30',
    //             checkOut: '2021-11-10 12:00',
    //             number_guests: 1,
    //             guest: {
    //                 name: 'Teste',
    //                 email: 'test@gmail.com'
    //             }
    //         }      
    //     }

    //     const check = await ReservationController.createReserve(createTest)
    
    // })

    test('Should return 201 if created new user', async () => {
        const response = await request(up)
            .post('/')
            .send({
                apartment_name: 'teste',
                checkin_date: '2021-11-07 10:30',
                checkout_date: '2021-11-10 12:00',
                number_guests: 1,
                guest: {
                    name: 'Teste',
                    email: 'test@gmail.com'
                }
            })
            expect(response.status).toBe(201)            
    })
})