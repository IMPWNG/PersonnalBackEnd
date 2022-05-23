import Task from "../models/taskModel.js"; // ES6 syntax
// import asyncWrapper from "../middelware/async.js";
import createCustomError from "../middelware/error-handler.js";

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
    res.status(200).json({ tasks, amount: tasks.length });
    res
      .status(200)
      .json({ status: "sucess", data: { tasks, nbHits: tasks.length } });
    res.status(200).json({ tasks });
  } catch (err) {
    createCustomError(err, res);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    createCustomError(err, res);
  }
};

const getTask = async (req, res, next) => {
  try {
    const { id: taskID } = req.params.id;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return next(createCustomError(`No Task with ID : ${taskID}`, 404));
    } else {
      res.status(200).json({ task });
    }
  } catch (err) {
    createCustomError(err, res);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params.id;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
    });
    if (!task) {
      return next(createCustomError(`No Task with ID : ${taskID}`, 404));
    } else {
      res.status(200).json({ task });
    }
  } catch (err) {
    createCustomError(err, res);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params.id;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return next(createCustomError(`No Task with ID : ${taskID}`, 404));
    } else {
      res.status(200).json({ msg: `Task with ID : ${taskID} deleted` });
    }
  } catch (err) {
    createCustomError(err, res);
  }
};

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
