import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

let MONGODB_URI = process.env.PROD_MONGODB || process.env.DEV_MONGODB

const connectDB = () => {
    return mongoose
        .connect(MONGODB_URI)
}

export { connectDB }