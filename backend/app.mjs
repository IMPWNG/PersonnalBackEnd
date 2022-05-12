import express from "express";
// import bodyParser from "body-parser";
import tasks from "./routes/tasks.js"; // Need extension to import from a folder
import connectDB from "./db/connect.js";
import notFount from "./midelware/not-found.js";
import errorHandler from "./midelware/error-handler.js";
import { config } from "dotenv";
config({ path: config.env });

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// Simple Routes
app.get("/", (req, res) => {
  res.send("TaskManager");	
});

app.use("/api/v1/tasks", tasks);

app.use(notFount);
app.use(errorHandler);

const start = async () => {
  try {
    connectDB();
    // Start Server
    app.listen(PORT, console.log(`Listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
