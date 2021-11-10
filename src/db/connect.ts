import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

let MONGODB_URI = process.env.PROD_MONGODB || 'mongodb://127.0.0.1:27017/desafio'

const connectDB = () => {
    return mongoose
        .connect(MONGODB_URI)
}

export { connectDB }