import express from 'express'
import { router } from '../routes/reservas'
import { connect } from '../db/connect'
import cors from 'cors'
import swaggerDocs from './config-swagger.json'
import swaggerUi from 'swagger-ui-express'

class App {
    public app: express.Application
    
    constructor() {
        this.app = express()
        this.initializeMiddlewares()
        this.initializeControllers()
        this.initializeDatabase()
        this.initializeDocumentation()
    }

    private initializeMiddlewares(): void {
        this.app.use(express.json())
        this.app.use(cors({
            origin: '*',
          }))
    }
    
    private initializeControllers(): void {
        this.app.use('/api/v1/reserva', router)
    }

    private async initializeDatabase(): Promise<void> {
        try {
            await connect()
          } catch (error) {
            console.log(error)
          }
    }

    private initializeDocumentation (): void {
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
      }
}
export default new App().app