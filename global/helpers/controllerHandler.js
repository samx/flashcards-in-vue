const AppError = require('./AppError');

const sendErrorDev = (err, res) => {
    console.error('ERROR 💥: ', err);
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    })
}
const sendErrorProd = (err, res) => {
    if (err.isOperational) { // Operational, trusted error:send message to client;
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        })
    } else {   //Programming or other unknown error: don't leak error details
        // 1) Log error
        console.error('ERROR 💥: ', err);

        // 2) Send generic message
        res.status(500).json({
            status: 'error',
            message: 'Something went very wrong!'
        })
    }
}

const customProductionErrorMessage = (err) => {
    switch (err.name) {
        case 'customErrorMessageExample':
            message = `Invalid ${err.path}: ${err.value}`;
            return new AppError(message, 400)
            break;
        default:
            return err;
            break;
    }
}

const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    if (process.env.NODE_ENV === 'development') {
        sendErrorDev(err, res);
    } else if (process.env.NODE_ENV === 'production') {
        let error = { ...err };
        error = customProductionErrorMessage(error);
        sendErrorProd(error, res)
    }
}
const controllerHandler = (promise, params) => async (req, res, next) => {
    const boundParams = params ? params(req, res, next) : [];
    try {
        const result = await promise(...boundParams);
        return res.json(result || { message: 'OK' });
    } catch (error) {
        return res.status(500) && next(error);
    }
};


module.exports = {
    errorHandler,
    controllerHandler
}