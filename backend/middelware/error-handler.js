import CustomAPIError from "../errors/custom-error.js";

export default function errorHandlerMiddleware(err, req, res, next) {
    if (err instanceof CustomAPIError) {
        return (
            res.status(err.statusCode).json({ msg: err.message })
        )
    } else {
        return (
            res.status(500).json({ msg: "Internal Server Error, please try again" })
        )
    };
};
