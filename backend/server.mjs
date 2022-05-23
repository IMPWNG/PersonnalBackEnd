import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import notFount from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";
const app = express();
const PORT = process.env.PORT || 8080;

import users from "./routes/userRoute.js";
import tasks from "./routes/taskRoute.js";

import userModel from "./models/userModel.js";


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




// Middleware to receive form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/tasks", tasks);
app.use(express.static("./public")); 
app.use("/api/v1/users", users);







// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  )
} else {
  app.get('/', (req, res) => res.send('Please set to production'))
}



app.use(notFount);
app.use(errorHandler);

app.listen(PORT || 8080, () => {
  console.log("Server started on port 8080");
});