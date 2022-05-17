export default class CustomAPIError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    };
};

export const createCustomAPIError = (message, statusCode) => {
    return new CustomAPIError(message, statusCode);
};
