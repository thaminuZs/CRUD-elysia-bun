import { Schema, model, InferSchemaType } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
    },
    addedDate: {
        type: Date,
        default: Date.now
    }
});

type User = InferSchemaType<typeof userSchema>

export const UserModel = model<User>("User", userSchema);