import mongoose, { Mongoose } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

let mongoUrl = process.env.MONGODB_URL
console.log(mongoUrl)
console.log(process.env.NODE_ENV)
export const connect = async (): Promise<Mongoose> =>
  await mongoose.connect(mongoUrl)

export const close = (): Promise<void> => mongoose.connection.close()
