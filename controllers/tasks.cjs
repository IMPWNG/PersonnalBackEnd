

const getAllTasks = async (req, res) => {
    res.send("get all tasks");
}

const createTask = async (req, res) => {
    res.json(req.body);
}

const getTask = async (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = async (req, res) => {
  res.json({ id: req.params.id });
};

const deleteTask = async (req, res) => {
  res.json({ id: req.params.id });
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };