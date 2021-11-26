import mongoose, { Mongoose } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

let mongoUrl = process.env.MONGODB_URL

export const connect = async (): Promise<Mongoose> =>
  mongoose.connect(mongoUrl)

export const close = (): Promise<void> => mongoose.connection.close()
