import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const JWT_SECRET = process.env.JWT_SECRET;

// @desc    Register new user
// @route   POST /api/users
// @access  Public

export default async function registerUser(req, res) {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({
      message: "Please provide username, password and email",
    });
  } else {
    try {
      // Check if the username or email already exists
      const userExist = await User.findOne({ username, email });

      if (userExist) {
        return res
          .status(400)
          .json({ message: "Username/email has already been taken" });
      } else {
        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Create a new user
        const newUser = await User.create({
          username: req.body.username,
          password: hashedPassword,
          email: req.body.email,
        });

        if (newUser) {
          return res.status(201).json({
            _id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            token: generateToken(newUser._id),
            message: "New User created successfully",
          });
        } else {
          return res.status(400).json({
            message: "Invalid credentials",
          });
        }
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
export async function getMe(req, res) {
  res.status(200).json(req.user)
}

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: '30d',
  })
}
