import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import UserModal from "../models/User.model.js";

const JWT_SECRET = process.env.JWT_SECRET;

export default async function signup(req, res) {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
        return res.status(400).json({
            message: "Please provide username, password and email",
        });
    } else {
        try {
        // Check if the username or email already exists
        const userExist = await UserModal.findOne({ username, email });

        if (userExist) {
            return res.status(400).json({ message: "Username/email has already been taken" });
        } else {
          const hashedPassword = await bcrypt.hash(req.body.password, 10);   
          const newUser = await UserModal.create({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email,
            });
            const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: "1h" });

            return res.status(201).json({ newUser, token });
          }
        } catch (err) {
            return res.status(500).json({ message: err.message });

            console.log(err);
        };  
    };
};

