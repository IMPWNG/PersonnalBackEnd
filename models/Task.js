import mongoose from "mongoose";

const Task = new mongoose.Schema({
    name: String, 
    completed: Boolean
});

export default Task;