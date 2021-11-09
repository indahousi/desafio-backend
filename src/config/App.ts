import express from 'express'
import { router } from '../routes/reservas'
import { connectDB } from '../db/connect'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

export class App {
    public app: express.Application
    public port: number
    
    constructor() {
        this.app = express()
        this.port = Number(process.env.PORT) || 3000
    
        this.initializeMiddlewares()
        this.initializeControllers()
        this.initializeDatabase()
        this.listen()
    }
    
    private initializeMiddlewares(): void {
        this.app.use(express.json())
        this.app.use(cors())
    }
    
    private initializeControllers(): void {
        this.app.use('/api/v1/reserva', router)
    }

    private async initializeDatabase(): Promise<void> {
        try {
            await connectDB(process.env.MONGO_URI)
          } catch (error) {
            console.log(error)
          }
    }
    
    
    public listen(): void{
        this.app.listen(this.port, () => {
        console.log(`App listening on the port ${this.port}`)
        })
    }
}