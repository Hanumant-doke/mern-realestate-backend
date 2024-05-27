export const errorHandler = (statusCode, message) => {
    const err = new Error();
    err.statuaCode = statusCode;
    err.message = message;
    return err;
}