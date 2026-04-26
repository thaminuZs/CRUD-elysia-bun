import { Elysia } from "elysia";
import dotenv from "dotenv";
import { dbConnection } from "../db/db";
import { userRoutes } from "../routes/user-routes";


dotenv.config()
const PORT = Number(process.env.PORT) || 5000;
const app = new Elysia()
  .onError(({error, code}) => {
    return {
      error: code,
      message: "internal error"
    }
  });
await dbConnection();

app.use(userRoutes);



app.listen(PORT,() => {
  console.log(`server is on ${PORT}`);
})