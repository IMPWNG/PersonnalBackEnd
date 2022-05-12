import Task from "../models/Task.js"; // ES6 syntax


const getAllTasks = async (req, res) => {
    res.send("get all tasks");
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = async (req, res) => {
  res.json({ id: req.params.id });
};

const deleteTask = async (req, res) => {
  res.json({ id: req.params.id });
};

export { getAllTasks, createTask, getTask, updateTask, deleteTask };