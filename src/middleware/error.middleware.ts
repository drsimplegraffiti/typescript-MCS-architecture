import { Request, Response, NextFunction, response } from 'express';

import HttpException from '@/utils/exceptions/http.exception';
import { request } from 'http';

function errorMiddleware(
    error: HttpException,
    req: Request,
    res: Response,
    next: NextFunction
): void {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';

    res.status(status).send({
        status,
        message
    })
}


export default errorMiddleware;


