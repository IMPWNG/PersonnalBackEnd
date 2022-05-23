import CustomAPIError from "../errors/custom-error.js";

export default function errorHandlerMiddleware(err, req, res, next) {
    try {
        if (err instanceof CustomAPIError) {
            res.status(err.statusCode).send(err.message);
        } 
    } catch (error) {
        res.status(500).send("Internal server error");
    }
};
