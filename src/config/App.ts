import express from 'express'
import { router } from '../routes/reservas'
import { connectDB } from '../db/connect'
import cors from 'cors'


class App {
    public app: express.Application
    
    constructor() {
        this.app = express()
    
        this.initializeMiddlewares()
        this.initializeControllers()
        this.initializeDatabase()
    }
    
    private initializeMiddlewares(): void {
        this.app.use(express.json())
        this.app.use(cors())
    }
    
    private initializeControllers(): void {
        this.app.use('/api/v1/reserva', router)
    }

    private initializeDatabase(): void {
        try {
            connectDB()
          } catch (error) {
            console.log(error)
          }
    }
}
export default new App().app