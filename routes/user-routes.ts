import { Elysia, t } from "elysia";
import userService from "../services/user-service";
import { AppError } from "../utils/app-error";

export const userRoutes = new Elysia({prefix: "/users"})
    .get("/", async () => {
        return await userService.getAll();
    })
    .post("/", async ({body}) => {
        try {
            return await userService.createUser(body);
        }
        catch (err) {
            if (err instanceof AppError) {
                return { status: err.resCode, message: err.message}
            }
            else {
                return {message: "internal error"}
            }
        }
    },
    {
        body: t.Object({
            name: t.String(),
            email: t.String(),
            age: t.Number()
        })
    })
    .get("/:id", async ({params: {id}}) => {
        try {
            return await userService.getUserById(id);
        }
        catch (err) {
            if (err instanceof AppError) {
                return { status: err.resCode, message: err.message}
            }
            else {
                return {message: "internal error"}
            }
        }
    })