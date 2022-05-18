import express from "express";
import bcrypt from "bcrypt";

const routerJwt = express.Router();

routerJwt.post("/login", async (req, res) => {
    const userLoggingIn = req.body;

    User.findOne({ username: userLoggingIn.username })
        .then(userExists => {
            if (!userExists) {
                return res.status(400).json({ message: "Invalid Username or Password" });
            } else {
                bcrypt.compare(userLoggingIn.password, userExists.password)
                .then(isCorrect => {
                    if (isCorrect) {
                        const payload = {
                            id: userExists._id,
                            username: userExists.username,
                        }
                        jwt.sign(
                            payload,
                            process.env.JWT_SECRET,
                            { expiresIn: 8600 },
                            (err, token) => {
                                if (err) return res.json({ message: err });
                                return res.json({
                                    message: "User logged in successfully",
                                    token: token,
                                })
                            }
                        )
                    }
                    else {
                        return res.status(400).json({ message: "Invalid Username or Password" });
                    }
                })
            }
        })
        .catch(err => {
            console.log(err.message);
        }
    )
})
  
                    
                
 