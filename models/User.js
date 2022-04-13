import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter an email."]
    },
    password: {
        type: String,
        required: [true, "Please enter a password."]
    },
})

export default mongoose.models.User || mongoose.model("User", UserSchema);