const { httpConstants, errorConstants } = require('./constant');

const createResponse = (body, statusCode) => {
    return {
      statusCode,
      body: JSON.stringify({ data: body })
    };
};
  
const createErrorResponse = (errorMessage, statusCode)=> {
    let code = statusCode ? statusCode : httpConstants.BAD_REQUEST;
    let message = errorMessage ? errorMessage : errorConstants.BAD_REQUEST;
    return {
        code,
        body: JSON.stringify({ error: message })
    };
};

module.exports = {
    createResponse,
    createErrorResponse
};