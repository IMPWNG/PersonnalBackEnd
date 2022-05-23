import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import notFount from "./middelware/not-found.js";
import errorHandler from "./middelware/error-handler.js";
const app = express();
const PORT = process.env.PORT || 8080;

import auhRoute from "./routes/authRoute.js";
import userModel from "./models/userModel.js";
import tasks from "./routes/taskRoute.js";

import { config } from "dotenv";
config({ path: config.env });

// Connect to MongoDB
mongoose.connect(
  process.env.NODE_APP_DB_CONNECTION_CDR,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("MongoDB connected");
  }
);

app.listen(process.env.PORT || 8080, () => {
  console.log("Listening");
});

app.use("/api/v1/tasks", tasks);

// Middleware to receive form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json(), cors());
app.use(express.static("./public")); 
app.use(express.json());
app.use(notFount);
app.use(errorHandler);



