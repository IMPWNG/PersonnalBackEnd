import mongoose from "mongoose";
import { config } from "dotenv";
config({ path: config.env });

const dbConnectionCdr = process.env.NODE_APP_DB_CONNECTION_CDR;

const connectDB = (url) => {
    return mongoose
      .connect(dbConnectionCdr, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
}

export default connectDB;

