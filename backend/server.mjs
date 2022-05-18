import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import connectDB from "./db/connect.js";

import notFount from "./midelware/not-found.js";
import errorHandler from "./midelware/error-handler.js";

import auth from "./routes/Auth.route.js";

import { config } from "dotenv";
config({ path: config.env });

import User from "./models/User.model.js";

// Auth Routes


// Tasks manager //
// import tasks from "./routes/tasks.js"; // Need extension to import from a folder

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware to receive form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json(), cors());

// app.use(express.static("./public")); 
// app.use(express.json());

// Simple Routes

app.use('/api/auth', auth);

// app.use("/api/v1/tasks", tasks);

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

