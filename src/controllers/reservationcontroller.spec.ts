import { ReservationController } from './ReservationController'
import request from 'supertest'
import { App } from '../config/App'

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

        const createTest = {
            body: {
                apartment_name: 'teste',
                checkIn: '2021-11-07 10:30',
                checkOut: '2021-11-10 12:00',
                number_guests: 1,
                guest: {
                    name: 'Teste',
                    email: 'test@gmail.com'
                }
            }      
        }

        
    
    })
})