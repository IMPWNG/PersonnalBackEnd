import express from "express";
import registerUser from "../controllers/userController.js";
import protect from "../middelware/authMiddelware.js";

const router = express.Router();

router.post("/", registerUser);


export default router;