import { Elysia } from "elysia";
import dotenv from "dotenv";
import { dbConnection } from "../db/db";


dotenv.config()
const PORT = Number(process.env.PORT) || 5000;
const app = new Elysia();
await dbConnection();



app.listen(PORT,() => {
  console.log(`server is on ${PORT}`);
})