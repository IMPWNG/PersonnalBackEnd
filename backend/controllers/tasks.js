import Task from "../models/Task.js"; // ES6 syntax
import asyncWrapper from "../midelware/async.js";
import createCustomError from "../midelware/error-handler.js";

const getAllTasks = asyncWrapper( async (req, res) => {  
    const tasks = await Task.find({});
    // res.status(200).json({ tasks });
    // res.statute(200).json({ tasks,amount: tasks.length });
    // res.status(200).json({ status: "sucess", data: {tasks, nbHits:tasks.length} });
    res.status(200).json({ tasks });
});

const createTask = asyncWrapper( async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
});

const getTask = asyncWrapper( async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return (
         next(createCustomError(`No Task with ID : ${taskID}`, 404 ))
      )
    } else {
      res.status(200).json({ task });
    };
});

const updateTask = asyncWrapper( async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, { new: true });
    if (!task) {
      return (
        next(createCustomError(`No Task with ID : ${taskID}`, 404))
      ) 
    } else {
      res.status(200).json({ task });
    };
});

const deleteTask = asyncWrapper( async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {   
      return (
        next(createCustomError(`No Task with ID : ${taskID}`, 404))
      ) 
    } else {
      res.status(200).json({ msg: `Task with ID : ${taskID} deleted` });
    };
});

// const editTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;
//     const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//       new: true,
//       runValidators: true,
//       overwrite: true
//     });
//     if (!task) {
//       return res.status(404).json({ msg: `No Task with ID : ${taskID}` });
//     } else {
//       res.status(200).json({ task });
//     }
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

export { getAllTasks, createTask, getTask, updateTask, deleteTask }; // ES6 syntax 