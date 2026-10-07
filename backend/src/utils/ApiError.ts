export default class ApiError extends Error{
    constructor(
        public statusCode: number,
        public message: string,
        public errors: string[]
    ){
        super(message);
        Error.captureStackTrace(this, this.constructor);
    }
}

/**
 * Structure: {statusCode: 400, message: "Bad request", errors: ["Invalid payload"], stack: stack-Trace}
 * Node puts stackTrace under stack property can't change
 */
