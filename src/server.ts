import express from "express"
import { router } from "./routes/reservas"
import dotenv from 'dotenv'
import {connectDB} from "./db/connect";
dotenv.config();

const app = express ();
app.use(express.json());

app.use("/api/v1/reserva", router);

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(process.env.PORT, () =>
        console.log(`Server is listening on port ${process.env.PORT}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();