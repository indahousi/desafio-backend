import mongoose, { Mongoose } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connect = async (): Promise<Mongoose> => {

  if (process.env.NODE_ENV === 'test') {
    const mongoUrl = process.env.MONGODB_URL 
    return await mongoose.connect(mongoUrl)
  } else {
    const mongoUrl = process.env.MONGODB_URL_TEST 
    return await mongoose.connect(mongoUrl)
  }
  
}
export const close = (): Promise<void> => mongoose.connection.close()
