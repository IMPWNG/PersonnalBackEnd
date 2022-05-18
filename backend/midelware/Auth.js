import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export default function auth(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedData = jwt.verify(token, secret);

        if (token && decodedData) {
            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }
        next();
    } catch (err) {
        return res.status(401).json({ message: "Auth failed" });
        console.log(err);
    };
};