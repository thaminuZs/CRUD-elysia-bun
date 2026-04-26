import { UserModel } from "../models/user";
import { AppError } from "../utils/app-error";

type UserDTO = {
    name: string,
    email: string,
    age: number,
};

export default {
    createUser: async (data: UserDTO) => {
        if (!data.name) {
            throw new AppError("name is reqired");
        }
        if (!data.email) {
            throw new AppError("email is reqired");
        }
        if (data.age <= 0) {
            throw new AppError("enter a valid age");
        }

        const createdUser = await UserModel.create(data);
        return createdUser;
    },

    getAll: async () => {
        const users = async () => {
            const users = await UserModel.find();
            return users;
        }
    }
}