import { Schema, model } from "mongoose";

const UserSchema  = new Schema(
    {
        name: { type: String, required: true},
        admin: { type: Boolean, default: false},
        email: { type: String, required: true },
        password: { type: String, required: true },
        image: { type: String, required: true },
    }
);

const User = model("User", UserSchema);
export default User;