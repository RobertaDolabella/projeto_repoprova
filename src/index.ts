import express, {json} from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import router from "./Routers/index";
import { errorHandlerMiddleware } from "./middleware/errorMiddleware";


const app = express()

dotenv.config()
app.use(json())

app.use(router)
app.use(errorHandlerMiddleware)


const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, () => {
  console.log(`Servidor funfando de boas na porta: ${PORT}`);
});