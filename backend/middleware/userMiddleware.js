import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protect = async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
        // Get token from header
        token = req.headers.authorization.split(" ")[1];
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Get user from token
        req.user = User.findById(decoded.id).selected("-password");

        next();

        } catch (err) {
        return res.status(401).json({ message: "Auth failed" });
        }
    }

    if (!token) {
        return res.status(401).json({ message: "Auth failed" });
    }
};

export default protect;
        
   

