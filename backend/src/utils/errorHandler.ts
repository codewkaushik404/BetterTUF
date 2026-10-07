import type { Request, Response, NextFunction} from "express";
import ApiError from "./ApiError.js";

export default function globalErrorHandler(
    req: Request,
    res: Response, 
    next: NextFunction,
    err: Error
){
    const success: boolean = false;

    if(err instanceof ApiError){
        return res.status(err.statusCode).json({
            success,
            ...err
        })
    }

    console.error({
        message: err.message,
        stackTrace: err.stack
    });

    return res.status(500).json({
        success,
        statusCode: 500,
        message: err.message || "Internal Server Error",
        errors: []    
    })
}
