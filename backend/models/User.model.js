import mongoose from "mongoose";

const userShchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    id : {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {timestamps: true});

export default mongoose.model("User", userShchema);

