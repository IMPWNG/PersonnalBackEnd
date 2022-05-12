import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: true,
        completed: Boolean
    },
    description: {
        type: String,
        // required: true
    }
});

export default mongoose.model("Task", taskSchema);