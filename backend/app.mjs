import express from "express";
import bodyParser from "body-parser";
import tasks from "./routes/tasks.js"; // Need extension to import from a folder
import connectDB from "./db/connect.js";
import notFount from "./midelware/not-found.js";
import errorHandler from "./midelware/error-handler.js";
import cors from "cors";
import { config } from "dotenv";
config({ path: config.env });

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors());
// app.use(express.static("./public")); 
// app.use(express.json());

// Simple Routes

app.get("/home", (req, res) => {
  res.json({
    name: "Welcome to your personnal backend",
  });
});

app.post("/home", (req, res) => {
  console.log(req.body);
});


// app.use("/api/v1/tasks", tasks);

// app.use(notFount);
// app.use(errorHandler);

// const start = async () => {
//   try {
//     connectDB();
//     // Start Server
//     app.listen(PORT, console.log(`Listening on port ${PORT}...`));
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
