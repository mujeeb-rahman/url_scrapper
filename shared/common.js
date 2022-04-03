const { httpConstants, errorConstants } = require('./constant');

const headers = { 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*'
}

const createResponse = (body, statusCode) => {
    return {
      statusCode,
      body: JSON.stringify({ data: body }),
      headers
    };
};
  
const createErrorResponse = (errorMessage, statusCode)=> {
    let code = statusCode ? statusCode : httpConstants.BAD_REQUEST;
    let message = errorMessage ? errorMessage : errorConstants.BAD_REQUEST;

    return {
        code,
        body: JSON.stringify({ error: message }),
        headers
    };
};

module.exports = {
    createResponse,
    createErrorResponse
};