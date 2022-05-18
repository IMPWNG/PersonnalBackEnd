import express from "express";

const routerUser = express.Router();

import signup from "../controllers/users.controller.js";

routerUser.post("/signup", signup);
// routerUser.post("/signin", signin);

export default routerUser;