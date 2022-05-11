import express from "express";
import tasks from "./routes/tasks.js"; // Need extension to import from a folder
import connectDB from "./db/connect.js";
import { config } from "dotenv";
config({ path: config.env });

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());


// Simple Routes
app.get("/hello", (req, res) => {
  res.send("TaskManagerApp");
});
app.use("/api/v1/tasks", tasks);


const start = async () => {
  try {
    await connectDB();
    // Start Server
    app.listen(PORT, console.log(`Listening on port ${PORT}...`));
  } catch (error) {
      console.log(error);
  }
}

start();



 
