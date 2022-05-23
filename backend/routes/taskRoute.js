import express from "express";

import { getAllTasks, createTask, getTask, updateTask, deleteTask } from "../controllers/tasks.controller.js";

const routerTask = express.Router();

routerTask.route("/").get(getAllTasks).post(createTask);
routerTask.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

export default routerTask;
