import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: [50, "Task name cannot be more than 50 characters"],
        minlength: [3, "Task name cannot be less than 3 characters"],
    },
    completed: {
        type: Boolean,
        default: false
    },
});

export default mongoose.model("Task", taskSchema); // ES6 syntax -- Export must be mongoose.model